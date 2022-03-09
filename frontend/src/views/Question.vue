<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question.content }}</p>
    <router-link to="/questions">Back</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["questions"]),
    question() {
      return (
        this.questions.find(
          (question) => question.id === this.$route.params.id
        )
      );
    },
  },
  created() {
    this.$store.dispatch("fetchQuestions");
  },
};
</script>
