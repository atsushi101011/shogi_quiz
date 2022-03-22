<template>
  <div>
    <p>問題{{this.$route.params.id}}: {{ question.content }}</p>
    <p>回答</p>
        <p v-for="choice in question.choices" :key="choice.id"> <!-- 一度だけjudgement関数を発火させるには? -->
          <v-btn @click="judgement(choice, question)">{{ choice.content }}</v-btn>
        </p>

    <div v-if="isActive">
      <p v-if="question.correctAnswer">
        <v-btn color="#00bfff" elevation="4" x-large> 正解! </v-btn>
      </p>
      <p v-else>
        <v-btn color="#ff6347" elevation="4" x-large> 不正解! </v-btn>
      </p>

      <p v-if="this.$route.params.id < this.numberOfQuestions">
        <router-link :to="nextQuestion()">次の問題へ</router-link>
      </p>
      <p v-else>
        <router-link :to="{name:'result'}">結果ページへ</router-link>
      </p>
    </div>

    <br><br>{{ question }} <!-- 確認用 -->
  </div>
</template>

<style>
/* .buttonColor {
  background-color: green;
} */
</style>

<script>
import { mapState } from "vuex";

export default {
  async created() {
    await this.fetchQuestions(this.$route.params.id);
  },

  async beforeRouteUpdate(to, from, next) {
    await this.fetchQuestions(to.params.id);
    this.isActive = false;
    next();
  },

  computed: {
    ...mapState(["questions"]),
  },

  data() {
    return {
      numberOfQuestions: 10,
      quizCount: 0,
      correctCount: 0,
      question: null,
      isActive: false,
    }
  },

  methods: {
    async fetchQuestions(id) {
      await this.$store.dispatch("fetchQuestions");
      this.question = this.questions[id - 1];
      this.$set(this.question, 'correctAnswer', false);
    },
    judgement(choice, question) {
      if (this.isActive){
        return;
      };
      this.isActive = true;
      if (choice.is_answer) {
        question.correctAnswer = true;
        this.correctCount++;
        return(question.correctAnswer);
      } else {
        question.correctAnswer = false;
        return(question.correctAnswer);
      };
    },
    nextQuestion() {
      this.quizCount = Number(this.$route.params.id) + 1;
      return { name: 'show-question', params: {id: this.quizCount}};
    },
  },
};
</script>
