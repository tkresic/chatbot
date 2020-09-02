<template>
    <v-app-bar
        color="rgba(255,255,255, 0.95)"
        height="75"
        class="elevation-1"
        fixed
        :style="{ 'z-index': 6 }"
    >
        <template v-if="$vuetify.breakpoint.smAndDown">
            <div
                class="nav-ham d-inline-block grey-background"
                @click.stop="$emit('update:drawer', !drawer);"
                v-bind:class="{ open: drawer }"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span class="d-inline-block font-weight-bold ml-4 dark--text text-uppercase">{{ $router.currentRoute.name }}</span>
            <v-spacer></v-spacer>
            <v-avatar size="70">
                <v-img :src="require('@/assets/Placeholder.png')"></v-img>
            </v-avatar>
        </template>
        <template v-else>
            <v-img
                @click="$vuetify.goTo(0)"
                :src="require('@/assets/Placeholder.png')"
                max-width="90px"
                max-height="90px"
                alt="d1gital Logo"
                class="cursor-pointer"
            ></v-img>
            <v-spacer></v-spacer>
            <template v-if="!$vuetify.breakpoint.smAndDown">
                <v-btn
                    @click="$vuetify.goTo('#about')"
                    class="hover-animation font-size-16px text-uppercase dark--text ml-4 mr-12"
                    :class="{ 'hover-animation-active': intersecting === 'about' }"
                    text
                >
                    About
                </v-btn>
                <v-btn
                    @click="$vuetify.goTo('#services')"
                    class="hover-animation font-size-16px text-uppercase dark--text ml-4 mr-12"
                    :class="{ 'hover-animation-active': intersecting === 'services' }"
                    text
                >
                    Services
                </v-btn>
            </template>
        </template>
    </v-app-bar>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'AppBar',

  props: ['drawer', 'currentRouteName', 'intersecting'],
})
</script>

<style>

.nav-ham {
  position: relative;
  top: 6px;
  left: -6px;
  width: 40px;
  height: 45px;
  cursor: pointer;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.nav-ham span {
  display: block;
  position: absolute;
  background: #fff;
  height: 2px;
  left: 10px;
  width: 55%;
  border-radius: 9px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.nav-ham span:nth-child(1) {
  top: 15px;
}

.nav-ham span:nth-child(2) {
  top: 20px;
}

.nav-ham span:nth-child(3) {
  top: 25px;
}

.nav-ham.open span:nth-child(1) {
  width: 42%;
}

.nav-ham.open span:nth-child(3) {
  width: 42%;
}

</style>