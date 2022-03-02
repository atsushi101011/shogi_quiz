<template>
<div>
        <table v-for="question in questions" :key="question.id">
          <tr><b>問題</b></tr>
          <tr>
            {{ question.id}}
            {{ question.content }}

            <p><b>回答</b></p>
            <p v-for="choice in question.choices" :key="choice.id">
            <v-btn @click="judgement(choice)">{{ choice.content }}</v-btn>
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
/* クラスを当てる */
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
  // data() {
  //   return {
  //     question: {},
  //   }
  // },
  methods: {
    judgement(choice) {
      if (choice.is_answer){
        console.log("正解")
      }
      else{
        console.log("不正解")
      }
    }
  }
}
</script>