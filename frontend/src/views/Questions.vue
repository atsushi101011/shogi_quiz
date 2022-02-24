<template>
<div>
  <v-col cols="8">
        <table>
          <tr>
            <th>問題</th>
          </tr>
          <tr v-for="question in questions" :key="question.id">
            <td>{{ question.content }}</td>
          </tr>
        </table>
      </v-col>
</div>
</template>

<script>

import { mapState } from 'vuex' //変更 ①

export default {
  computed: { //変更 ②
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