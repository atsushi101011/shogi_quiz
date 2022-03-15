<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question().content }}</p>
    <p>回答</p>
        <p v-for="choice in question().choices" :key="choice.id">
          <v-btn @click="judgement(choice, question())">{{ choice.content }}</v-btn>
        </p>
        {{ question().correctAnswer }}
    <p v-if="this.quizCount < this.numberOfQuestions">
      <router-link :to="nextQuestion()">次の問題へ</router-link>
    </p>
    <p v-else-if="this.quizCount === this.numberOfQuestions">
      <router-link :to="{name:'result'}">結果ページへ</router-link>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["questions"]),
  },
  data() {
    return {
      numberOfQuestions: 10,
      quizCount: 0,
      correctCount: 0,
    }
  },

  methods: {
    question() {
      let question = this.questions[this.$route.params.id - 1]; //question.idを取得しているというより、配列の並びに対応した問題を取得している,ここを要素数が上限のランダムな数字にすればいい
      question["correctAnswer"] = false;
      // console.log(typeof(question.correctAnswer))
      return (question);
    },
    judgement(choice, question) {
      if (choice.is_answer) {
        question.correctAnswer = true;
      } else {
        question.correctAnswer = false;
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
