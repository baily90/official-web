import axios from 'axios'

const request = axios.create({
  timeout: 30 * 1000,
})
request.interceptors.request.use((config) => {
  // 请求拦截
  config.url = `${import.meta.env.VITE_API_URL}${config.url}`
  return config
})

request.interceptors.response.use(
  (response) => {
    if (response.status && response.status === 200) {
      const { status, message = '数据异常' } = response?.data
      if (status !== 0) {
        ElMessage({
          message: message,
          type: 'error',
        })
        return Promise.reject(message)
      }
      return response.data
    }
  },
  (error) => {
    ElMessage({
      message: error.message || '服务器异常',
      type: 'error',
    })
    return Promise.reject(error.message || '服务器异常')
  },
)

export default request
