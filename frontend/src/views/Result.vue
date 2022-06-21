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
        title="クイズで登山の知識を判定しよう!"
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
    <img src="@/assets/result_logo.png" alt="Logo" class="result_logo">
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ["correctCount", "numberOfQuestions"],

  methods: {
    rankJudgment() {
      if (this.correctCount >= 10) {
        return "一流ハイカー";
      } else if (this.correctCount >= 8) {
        return "上級ハイカー";
      } else if (this.correctCount >= 6) {
        return "中級ハイカー";
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
.result_logo {
  width:270px;
  height:360px;
}
</style>