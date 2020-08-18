<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" class="text-center">
      <h1 id="title">404</h1>
      <p id="subtitle">Page not found :(</p>
      <v-btn @click="$router.go(-1)" depressed large color="grey" class="mx-6">
        <span class="white--text">Go Back</span>
      </v-btn>
      <v-btn
        @click="$router.push('/')"
        depressed
        large
        color="grey darken-4"
        class="mx-6"
      >
        <span class="white--text">Home Page</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style>
#title {
  font-size: 64px;
}

#subtitle {
  font-size: 32px;
}
</style>
