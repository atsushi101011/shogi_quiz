<template>
  <div class="home">
    <h2>ハイカーのための</h2>
    <h1>登山クイズ</h1>
    <br />
    <v-btn class="startButton" to="/questions/1" color="#009688" elevation="4" x-large
      >クイズを解く</v-btn
    >
    <h3>10問解いて、登山の知識を判定しよう</h3>
    <img src="@/assets/home_logo.png" alt="Logo" class="home_logo">
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  methods: {
  },
  components: {}
};
</script>

<style>
.v-btn.v-size--x-large {
  font-weight: bold;
}

h3 {
  margin-top: 30px;
}

.home_logo {
  width:350px;
  height:270px;
}
</style>
