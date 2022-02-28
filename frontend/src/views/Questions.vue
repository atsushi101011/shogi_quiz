<template>
<div>
        <table v-for="question in questions" :key="question.id">
          <tr>問題</tr>
          <tr>
            {{ question.content }}
            <!-- forループで問題に対応する回答を表示? -->
          </tr>
        </table>
<v-btn to="/result"
  color="#009688"
  elevation="4"
  rounded
  x-large
>結果を見る</v-btn></div>
</template>

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