const pic = {
  state: {
    picurl: null
  },
  mutations: {
    setPicUrl: (state, data) => {
      state.picurl = data
    }
  },
  actions: {
    // 设置用户信息
    setPicUrl ({commit},data) {
      commit('setPicUrl', data)
    }
  }
}
export default pic