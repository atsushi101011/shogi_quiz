<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question.content }}</p>
    <p>回答</p>
        <p v-for="choice in question.choices" :key="choice.id">
          <v-btn @click="judgement(choice, question)">{{ choice.content }}</v-btn>
        </p>
        {{ question.correctAnswer}}
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
async created() {
  await this.$store.dispatch("fetchQuestions");
  this.question = this.questions[this.$route.params.id - 1];
  this.$set(this.question, 'correctAnswer', false);
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

  methods: {
    // currentQuestion() {
    //   this.question = this.questions[this.$route.params.id - 1];
    //   this.question["correctAnswer"] = false; //呼び出すたびにfalseになる、どこに書く？
    //   return(this.question);
    // },
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
      this.quizCount = Number(this.$route.params.id);
      return { name: 'show-question', params: {id: this.quizCount + 1 }};
    },
  },
};
</script>
