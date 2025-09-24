<template>
  <el-dialog v-model="visible" title="Contact Us" destroy-on-close center width="500px"
    border="1px solid [var(--el-border-color)]">

    <el-form ref="formRef" size="large" :model="formData" :rules="formRules" label-width="auto">
      <el-form-item label="name" prop="name">
        <el-input v-model="formData.name" placeholder="name" />
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="formData.email" placeholder="email" />
      </el-form-item>
      <el-form-item label="content" prop="content">
        <el-input type="textarea" :rows="5" :maxlength="200" show-word-limit v-model="formData.content"
          placeholder="content" />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button v-throttle :auto-insert-space="true" @click="onSubmmit" :loading="loading">提交</el-button>
      <el-button @click="close" v-throttle :auto-insert-space="true">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { contact } from '@/api/index'

const visible = ref(false)
const formRef = ref(null)
const loading = ref(false)

const formData = ref({
  name: undefined,
  email: undefined,
  content: undefined,
})

const formRules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input content', trigger: 'blur' },
    { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
  ],
  content: [
    { required: true, message: 'Please input content', trigger: 'blur' }
  ],
}

const close = () => {
  visible.value = false
}

const open = async () => {
  visible.value = true
  resetForm()
}

const resetForm = () => {
  formRef.value?.clearValidate()
  formRef.value?.resetFields()
  formData.value = {
    name: undefined,
    email: undefined,
    content: undefined,
  }
}

const onSubmmit = async () => {

  try {
    await formRef.value.validate()
    loading.value = true
    await contact({ ...formData.value })
    ElMessage.success('success')
    visible.value = false
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

defineExpose({ open })
</script>
