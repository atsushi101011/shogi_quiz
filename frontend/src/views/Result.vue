<template>
  <div class="result">
    <h1>クイズ結果</h1>
    <h2>{{ correctCount }}問 / {{ numberOfQuestions }}問 正解 !</h2>
    <br />
    <v-btn elevation="4" outlined x-large>{{ rankJudgment() }}</v-btn
    ><br /><br />
    <v-btn class="ma-2" outlined color="indigo">
      <ShareNetwork
        network="twitter"
        url="https://yama-quiz.herokuapp.com/"
        title="正解数を出したい"
        description="Twitter投稿"
        quote="Vue is a progressive framework for building user interfaces."
        hashtags="登山クイズ"
      >
        Twitterにシェアする
      </ShareNetwork>
    </v-btn>
    <br/><br/>

    <v-btn to="/" class="ma-2" outlined color="indigo">
      トップページへ戻る
    </v-btn>

  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ["correctCount", "numberOfQuestions"],

  methods: {
    rankJudgment() {
      if (this.correctCount >= 8) {
        return "一流ハイカー";
      } else if (this.correctCount >= 6) {
        return "上級ハイカー";
      } else if (this.correctCount >= 4) {
        return "アマチュアハイカー";
      } else if (this.correctCount >= 2) {
        return "ビギナーハイカー";
      } else if (this.correctCount < 2) {
        return "ひよっこハイカー";
      }
    },
  },
};
</script>

<style scoped lang="scss">

</style>