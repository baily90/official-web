<template>
  <el-dialog v-model="visible" title="Contact Us" destroy-on-close center :width="diagConfig.width"
    border="1px solid [var(--el-border-color)]">

    <el-form ref="formRef" :size="diagConfig.size" :model="formData" :rules="formRules" label-width="auto">
      <el-form-item label="Name" prop="name">
        <el-input v-model="formData.name" placeholder="Please input name" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="formData.email" placeholder="Please input email" />
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-input type="textarea" :rows="5" :maxlength="200" show-word-limit v-model="formData.content"
          placeholder="Please input content" />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button v-throttle @click="onSubmmit" :loading="loading">submit</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { contact } from '@/api/index'

const diagConfig = ref({ width: '500px', size: 'large' })
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
    { required: true, message: 'Please input email', trigger: 'blur' },
    { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
  ],
  content: [
    { required: true, message: 'Please input content', trigger: 'blur' }
  ],
}

const open = async (config) => {
  diagConfig.value = { ...diagConfig.value, ...config }
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
