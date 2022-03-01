<template>
<div>
        <table v-for="question in questions" :key="question.id">
          <tr><b>問題</b></tr>
          <tr>
            {{ question.id}}
            {{ question.content }}
            <!-- forループで問題に対応する回答を表示?key使えばいけそう choiceのquestion_id = question.idとなる回答-->
            <p><b>回答</b></p>
            <p v-for="choice in question.choices" :key="choice.id">
              {{ choice.content }}
            </p>
          </tr>
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
    onSubmit() {
    }
  }
}
</script>