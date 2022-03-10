<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question().content }}</p>
    <p>回答</p>
        <p v-for="choice in question().choices" :key="choice.id">
          <v-btn @click="judgement(choice)">{{ choice.content }}</v-btn>
        </p>
        {{ correct_answer }}
    <!-- 最後の問題のときは結果ページへ遷移させる -->
    <router-link :to="{ name: 'show-question', params: { id: nextQuestion(this.$route.params.id) }}">次の問題へ</router-link>
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
      correct_answer: null,
    }
  },

  methods: {
    question() {
      return (this.questions[this.$route.params.id - 1]) //idを取得しているというより、配列の並びに対応した問題を取得している
    },
    judgement(choice) {
      if (choice.is_answer) {
        this.correct_answer = "正解!!";
      } else {
        this.correct_answer = "不正解!!";
      }
    },
    nextQuestion(number) {  //次の問題へ進むのに必要な更新をこの関数で定義する
      this.quizCount = Number(number) + 1;
      if (this.quizCount <= this.questions.length) {
        return this.quizCount;
      } else {
        return 1;
      }
    },
  },

  created() {
    this.$store.dispatch("fetchQuestions");
  },
};
</script>
