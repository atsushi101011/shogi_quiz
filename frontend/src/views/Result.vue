<template>
  <div class="result">
    <h1>クイズ結果</h1>
    <h2>{{correctCount}}問 / {{numberOfQuestions}}問 正解 !</h2>
    <br />
    <v-btn elevation="4" outlined x-large>観る将三段</v-btn><br /><br />
    <v-btn class="ma-2" outlined color="indigo"> Twitterにシェアする </v-btn
    ><br /><br />

    <v-btn to="/" class="ma-2" outlined color="indigo">
      トップページへ戻る
    </v-btn>
  </div>
</template>

<script>
import Question from "../views/Question.vue";

export default {
  props: ["correctCount","numberOfQuestions"],
  components: {
    Question
  },

  methods: {

  }
};

</script>
