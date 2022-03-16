<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question.content }}</p>
    <p>回答</p>
        <p v-for="choice in question.choices" :key="choice.id">
          <v-btn @click="judgement(choice, question)">{{ choice.content }}</v-btn>
        </p>
    <p v-if="this.quizCount < this.numberOfQuestions">
      <router-link :to="nextQuestion()">次の問題へ</router-link>
    </p>
    <p v-else-if="this.quizCount === this.numberOfQuestions">
      <router-link :to="{name:'result'}">結果ページへ</router-link>
    </p>

    <br><br>{{ question }} <!-- 確認用 -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["questions"]),
    question() {
      let question = this.questions[this.$route.params.id - 1];
      // question["correctAnswer"] = false;
      console.log(question);
      return(question);
    },
  },
  data() {
    return {
      numberOfQuestions: 10,
      quizCount: 0,
      correctCount: 0,
    }
  },

  methods: {
    judgement(choice, question) {
      if (choice.is_answer) {
        question.correctAnswer = true;
        console.log(question.correctAnswer);
      } else {
        question.correctAnswer = false;
        console.log(question.correctAnswer);
      }
    },
    nextQuestion() {  //次の問題へ進むのに必要な更新をこの関数で定義する
      this.quizCount = Number(this.$route.params.id);
      return { name: 'show-question', params: {id: this.quizCount + 1 }};
    },
  },

  created() {
    this.$store.dispatch("fetchQuestions");
  },
};
</script>
