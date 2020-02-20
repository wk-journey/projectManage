import {
  login,
  getInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken,
  getUid,
  setUid
} from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    uid: getUid(),
    userName: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_UID: (state, uid) => {
    state.uid = uid
  },
  SET_USERNAME: (state, userName) => {
    state.userName = userName
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
          userName: username.trim(),
          password
        })
        .then(response => {
          const {
            data
          } = response
          commit('SET_TOKEN', data.token)
          commit('SET_UID', data.uid)
          setToken(data.token)
          setToken(data.uid)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo({
          uid: state.uid,
          token: state.token
        })
        .then(response => {
          const {
            data
          } = response

          if (!response.success || !data) {
            reject('Verification failed, please Login again.')
          }

          const {
            roles,
            userName,
            nickName,
            avatar
          } = data

          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }

          console.log("[getInfo]: data");

          commit('SET_USERNAME', data.username)
          commit('SET_ROLES', data.roles)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
