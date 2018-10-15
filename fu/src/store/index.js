import Vue from 'vue'
import Vuex from 'vuex'
import pic from './modules/pic'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    	activitycount: 0,
      imgText: null,
      imgIndex: null,
      homeCount: 0,
      shareCount: 0
    },
    mutations: {
    	increment (state) {
    		state.activitycount++
    	},
      setText :(state, data)=>{
        state.imgText = data
      },
      setImgIndex: (state, data) =>{
        state.imgIndex = data
      },
      setHomeCount: (state, data) => {
        state.homeCount = data
      },
      setShareCount (state) {
        state.shareCount++
      }
    },
    actions: {
    	increment (context) {
	      context.commit('increment')
	    },
      setText: ({state,commit}, data) => {
        commit('setText', data)
      },
      setImgIndex: ({state,commit}, data) => {
        commit('setImgIndex', data)
      },
      setHomeCount: ({state,commit}, data) => {
        commit('setHomeCount', data)
      },
      setShareCount (context) {
        context.commit('setShareCount')
      }
    },
    modules: {
        pic
    },
    getters
})
export default store
