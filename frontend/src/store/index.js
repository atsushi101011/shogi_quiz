import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    FETCH_QUESTIONS(state, questions) {
      state.questions = questions
    }
  },
  actions: {
    async fetchQuestions({ commit }) {
      await axios().get('/questions')
        .then(res => {
          commit('FETCH_QUESTIONS', res.data)
        })
        .catch(e => console.log(e))
    }
  }
})