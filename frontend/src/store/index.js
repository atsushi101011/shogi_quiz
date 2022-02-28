import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    choices: []
  },
  mutations: {
    FETCH_QUESTIONS(state, questions) {
      state.questions = questions
    },
    FETCH_CHOICES(state, choices) {
      state.choices = choices
    },
  },
  actions: {
    async fetchQuestions({ commit }) {
      await axios().get('/questions')
        .then(res => {
          commit('FETCH_QUESTIONS', res.data)
        })
        .catch(e => console.log(e))
    },
    async fetchChoices({ commit }) {
      await axios().get('/choices')
        .then(res => {
          commit('FETCH_CHOICES', res.data)
        })
        .catch(e => console.log(e))
    }
  }
})