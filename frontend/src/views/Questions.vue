<template>
<div>
  <v-col cols="8">
        <table v-for="question in questions" :key="question.id">
          <tr>問題</tr>
          <tr>
            {{ question.content }}
          </tr>
        </table>
      </v-col>
</div>
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