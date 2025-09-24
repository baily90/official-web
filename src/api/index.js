import request from '@/utils/request'

export const contact = (data) =>
  request({
    url: '/wjyy/xxx',
    method: 'post',
    data,
  })
