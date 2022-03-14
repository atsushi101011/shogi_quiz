<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question().content }}</p>
    <p>回答</p>
        <p v-for="choice in question().choices" :key="choice.id">
          <v-btn @click="judgement(choice)">{{ choice.content }}</v-btn>
        </p>
        {{ correctAnswer }}
    <!-- 最後の問題のときは結果ページへ遷移させる quizCount === numberOfQuestionsのとき-->
    <p v-if="this.quizCount < this.numberOfQuestions">
      <router-link :to="nextQuestion()">次の問題へ</router-link>
    </p>
    <p v-else>
      <router-link :to="result">結果ページへ</router-link>
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
      correctAnswer: null, //各question内にあれば、問題ごとの正誤がわかる
      numberOfQuestions: 5,
      quizCount: 0,
      correctCount: 0,
    }
  },

  methods: {
    question() {
      let question = this.questions[this.$route.params.id - 1]; //question.idを取得しているというより、配列の並びに対応した問題を取得している,ここを要素数が上限のランダムな数字にすればいい
      // question.push(this.correctAnswer);
      return (question)
    },
    judgement(choice) {
      if (choice.is_answer) {
        this.correctAnswer = "正解!!"; //true、falseでそのときに正解を表示する方がいい
      } else {
        this.correctAnswer = "不正解!!";
      }
    },
    nextQuestion() {  //次の問題へ進むのに必要な更新をこの関数で定義する
      this.quizCount = Number(this.$route.params.id);
      if (this.quizCount < this.numberOfQuestions) {
        return { name: 'show-question', params: {id: this.quizCount + 1 }};
      } else {
        return { name: 'result'};
      }
    },
  },

  created() {
    this.$store.dispatch("fetchQuestions");
  },
};
</script>
