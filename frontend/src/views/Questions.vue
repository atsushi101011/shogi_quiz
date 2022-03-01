<template>
<div>
        <table v-for="question in questions" :key="question.id">
          <tr><b>問題</b></tr>
          <tr>
            {{ question.id}}
            {{ question.content }}

            <p><b>回答</b></p>
            <p v-for="choice in question.choices" :key="choice.id">
            <v-btn @click="judgement">{{ choice.content }}</v-btn>
            {{ choice.is_answer}}
            </p>
          </tr><br>
        </table>
<v-btn to="/result"
  color="#009688"
  elevation="4"
  rounded
  x-large
>結果を見る</v-btn></div>
</template>

<style>
table {
  margin: 0 auto;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['questions'])
  },
  data() {
    return {
      question: {}
    }
  },
  methods: {
    judgement() {
      if (question.choice.is_answer == true)//クリックしたchoiceのis_answerのカラムをどうやって判定する？
        window.alert("正解");
    }
  }
}
</script>