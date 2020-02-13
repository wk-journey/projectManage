import {
  login
} from '@/api/user'
import {
  getToken,
  setToken
} from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken()
  }
}

const state = getDefaultState()

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
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
          username: username.trim(),
          password
        })
        .then(response => {
          const {
            data
          } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
