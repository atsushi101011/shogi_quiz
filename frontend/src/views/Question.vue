<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question().content }}</p>
    <p>回答</p>
        <p v-for="choice in question().choices" :key="choice.id">
          <v-btn >{{ choice.content }}</v-btn>
        </p>
        <!-- <router-link to="/questions/">次の問題へ</router-link> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["questions"]),
  },
  methods: {
    question() {
      return (this.questions[this.$route.params.id - 1])
    }
  },
  created() {
    this.$store.dispatch("fetchQuestions");
  },
};
</script>
