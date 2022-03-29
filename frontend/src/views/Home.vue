<template>
  <div class="home">
    <h2>観る将のための</h2>
    <h1>将棋クイズ</h1>
    <br />
    <v-btn class="startButton" to="/questions/1" color="#009688" elevation="4" x-large
      >クイズを解く</v-btn
    >
    <h3>10問解いて、将棋の知識を判定しよう</h3>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.v-btn.v-size--x-large {
  font-weight: bold;
}

h3 {
  margin-top: 30px;
}
</style>
