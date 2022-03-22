<template>
  <div class="result">
    <h1>クイズ結果</h1>
    <h2>{{correctCount}}問 / {{numberOfQuestions}}問 正解 !</h2>
    <br />
    <v-btn elevation="4" outlined x-large >{{rankJudgment()}}</v-btn><br /><br />
    <v-btn class="ma-2" outlined color="indigo"> Twitterにシェアする </v-btn
    ><br /><br />

    <v-btn to="/" class="ma-2" outlined color="indigo">
      トップページへ戻る
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["correctCount","numberOfQuestions"],

  methods: {
    rankJudgment(){
      if(this.correctCount >= 8){
        return ("観る将三段");
      } else if (this.correctCount >= 6) {
        return ("観る将初段");
      } else if (this.correctCount >= 4) {
        return ("観る将2級");
      } else if (this.correctCount >=2) {
        return ("観る将4級");
      } else if (this.correctCount < 2) {
        return ("観る将6級");
      }
    }
  }
};

</script>
