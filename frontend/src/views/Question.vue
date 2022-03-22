<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question.content }}</p>
    <p>回答</p>
        <p v-for="choice in question.choices" :key="choice.id">
          <v-btn @click="judgement(choice, question)">{{ choice.content }}</v-btn>
        </p>
        {{ question.correctAnswer}}

    <p v-if="this.$route.params.id < this.numberOfQuestions">
      <router-link :to="nextQuestion()">次の問題へ</router-link>
    </p>
    <p v-else>
      <router-link :to="{name:'result'}">結果ページへ</router-link>
    </p>

    <br><br>{{ question }} <!-- 確認用 -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async created() {
    await this.fetchQuestions(this.$route.params.id);
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
    }
  },

  async beforeRouteUpdate(to, from, next) {
    await this.fetchQuestions(to.params.id);
    console.log("[ENTER] To: " + to.path, + " From: " + from.path);
    console.log(to);
    next();
  },

  methods: {
    async fetchQuestions(id) {
      await this.$store.dispatch("fetchQuestions");
      this.question = this.questions[id - 1];
      console.log(id);
      this.$set(this.question, 'correctAnswer', false);
    },

    judgement(choice, question) {
      if (choice.is_answer) {
        question.correctAnswer = true;
        return(question.correctAnswer);
      } else {
        question.correctAnswer = false;
        return(question.correctAnswer);
      }
    },
    nextQuestion() {  //次の問題へ進むのに必要な更新をこの関数で定義する
      this.quizCount = Number(this.$route.params.id) + 1;
      return { name: 'show-question', params: {id: this.quizCount}};
    },
  },
};
</script>
