const state = {
  userName: '',
  appWidth:''
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_APP_WIDTH(state,width) {
    state.appWidth = width
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setAppWidth({commit},name) {
    commit('SET_APP_WIDTH', name)
  }
}
export default {
  state,
  mutations,
  actions
}
