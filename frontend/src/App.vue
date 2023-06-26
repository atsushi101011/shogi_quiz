<template>
  <div id="app">
    <v-container>
      <Header></Header>
      <router-view />
    </v-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e7eec0;
  margin-top: 50px;
}
</style>