import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 10
//   },
//   mutations: {
//     add(state) {
//       state.count++
//     },
//     reduce(state) {
//       state.count--
//     }
//   }
// })

// export default store

//第二种写法
const state = {
  count: 10,
  sum: 100
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
}
const getters = {
  count: function(state) {
    return (state.count += 100)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
