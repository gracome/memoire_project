import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_infos: {},
    current_message: {},
    current_conversation: {
      messages: [],
      client: {
        phone: ''
      }
    },
    messages: [

    ],
    conversations: [

    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
