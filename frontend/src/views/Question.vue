<template>
  <div>
    <p>問題: {{ question.content }}</p>
    <router-link to="/questions">Back</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex"; // ①

export default {
  computed: {
    ...mapState(["question"]), // ②
    // question() {
    //   //要確認
    //   return (
    //     this.question.find(
    //       (questionId) => questionId.id === this.$route.params.id
    //     ) || {}
    //   );
    // },
  },
  created() {
    this.$store.dispatch("showQuestion");
  },
};
</script>
