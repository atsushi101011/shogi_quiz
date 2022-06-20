<template>
  <div v-if="question">
    <p class="question"> 第{{ this.$route.params.id }}問: {{ question.content }}</p>
    <div class="answer">
      <p v-for="choice in question.choices" :key="choice.id">
        <v-btn class="choice" @click="judgement(choice, question)">{{ choice.content }}</v-btn>  <!--v-bind:class="{ buttonColor: buttonState }"つけて色変更したい -->
      </p>
    </div>

    <!-- <v-btn v-bind:class="{ buttonColor: buttonState }" @click="changeColor()">Test</v-btn>
    {{buttonState}} -->

    <div v-if="isActive">
      <p v-if="question.correctAnswer">
        <v-btn class="correctButton" color="#00bfff" elevation="4" x-large> 正解! </v-btn>
      </p>
      <p v-else>
        <v-btn class="correctButton" color="#ff6347" elevation="4" x-large> 不正解! </v-btn>
      </p>

      <p v-if="this.$route.params.id < this.numberOfQuestions">
        <router-link tag="button" class="btn nextQuestion" :to="nextQuestion()">次の問題へ</router-link>
      </p>
      <p v-else>
        <router-link
          tag="button"
          class="btn nextQuestion"
          :to="{
            name: 'result',
            params: {
              correctCount: this.correctCount,
              numberOfQuestions: this.numberOfQuestions,
            },
          }"
        >
          結果ページへ
        </router-link>
      </p>
    </div>
  </div>

  <div v-else>
    ♻︎リロード中です
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async created() {
    await this.fetchQuestions();
    this.question = this.getQuestion(this.$route.params.id);
  },

  async beforeRouteUpdate(to, from, next) {
    this.question = this.getQuestion(to.params.id);
    this.isActive = false;
    this.buttonState = false;
    next();
  },

  computed: {
    ...mapState(["questions"]),
  },

  data() {
    return {
      numberOfQuestions: 10,
      quizCount: 0,
      correctCount: 0,
      question: null,
      isActive: false,
      buttonState: false,
    };
  },

  methods: {
    async fetchQuestions() {
      await this.$store.dispatch("fetchQuestions");
      this.shuffleArray(this.questions); //全問題の配列をシャッフルする
      for (let question of this.questions) {
        question.choices = this.shuffleArray(question.choices);
      }
    },

    shuffleArray(inputArray){
      inputArray.sort(()=> Math.random() - 0.5);
      return inputArray;
    },

    getQuestion(id) {
      const question = this.questions[id - 1];
      this.$set(question, "correctAnswer", false);
      return question;
    },

    judgement(choice, question) {
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      if (choice.is_answer) {
        question.correctAnswer = true;
        this.correctCount++;
        this.changeColor();
        return question.correctAnswer;
      } else {
        question.correctAnswer = false;
        return question.correctAnswer;
      }
    },
    nextQuestion() {
      this.quizCount = Number(this.$route.params.id) + 1;
      return { name: "show-question", params: { id: this.quizCount } };
    },
    changeColor() {
      this.buttonState = !this.buttonState
    }
  },
};
</script>

<style>
.answer {
  margin: 10px auto;
}

.choice {
  margin-bottom: 10px;
  width: 200px;
}

.correctButton {
  margin: 10px auto;
}
/* .nextQuestion {
} */
.buttonColor.theme--light.v-btn.v-btn--has-bg {
  background-color: #00bfff;
}
</style>