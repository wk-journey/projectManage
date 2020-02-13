import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/queryByName',
    method: 'post',
    data
  })
}
