import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    question: [],
  },
  mutations: {
    FETCH_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    SHOW_QUESTION(state, question) {
      state.question = question;
    },
  },
  actions: {
    async fetchQuestions({ commit }) {
      await axios()
        .get("/questions")
        .then((res) => {
          commit("FETCH_QUESTIONS", res.data);
        })
        .catch((e) => console.log(e));
    },
    async showQuestion({ commit }) {
      await axios()
        .get(`/questions/${this.$route.params.id}`) //idの書き方調べる
        .then((res) => {
          console.log(res.data),
          commit("SHOW_QUESTION", res.data);
        })
        .catch((e) => console.log(e));
    },
  },
});
