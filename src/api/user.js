import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/system/login',
    method: 'post',
    data
  })
}

export function getInfo(uid, token) {
  return request({
    url: 'user/getUserInfo',
    method: 'get'
  })
}
