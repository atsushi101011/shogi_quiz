<template>
  <div>
    <p>問題: {{ question.content }}</p>
    <router-link to="/questions">Back</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex' // ①

export default {
  computed: {
    ...mapState(['questions']), // ②
    question() { // ③
      return this.questions.find(questionId => questionId.id === this.$route.params.id) || {}
    }
  }
}
</script>