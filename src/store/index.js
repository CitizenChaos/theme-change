import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'blue' // 主题色
  },
  mutations: {
    changeTheme (state, val) {
      state.theme = val
    }
  },
  actions: {
  },
  modules: {
  }
})
