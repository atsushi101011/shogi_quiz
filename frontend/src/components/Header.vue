<template>
  <v-app dark>
  <v-app-bar dark>
    <v-app-bar-nav-icon />
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
  <v-content>
    <router-view />
  </v-content>
</v-app>
</template>