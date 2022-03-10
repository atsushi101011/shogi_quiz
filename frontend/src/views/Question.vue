<template>
  <div>
    <p>問題: {{this.$route.params.id}} {{ question().content }}</p>
    <p>回答</p>
        <p v-for="choice in question().choices" :key="choice.id">
          <v-btn @click="judgement(choice)">{{ choice.content }}</v-btn>
        </p>
        <p>{{ correct_answer }}</p>
        <!-- <router-link to="/questions/">次の問題へ</router-link> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["questions"]),
  },
  data() {
    return {
      correct_answer: null,
    }
  },

  methods: {
    question() {
      return (this.questions[this.$route.params.id - 1])
    },
    judgement(choice) {
      if (choice.is_answer) {
        this.correct_answer = "正解!!";
      } else {
        this.correct_answer = "不正解!!";
      }
    },
  },

  created() {
    this.$store.dispatch("fetchQuestions");
  },
};
</script>
