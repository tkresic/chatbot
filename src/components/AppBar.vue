<template>
    <v-app-bar
        color="rgba(255,255,255, 0.95)"
        height="75"
        class="elevation-1"
        fixed
        :style="{ 'z-index': 6 }"
    >
        <v-img
            @click="$vuetify.goTo(0)"
            :src="require('@/assets/Placeholder.png')"
            max-width="90px"
            max-height="90px"
            alt="d1gital Logo"
            class="cursor-pointer"
        ></v-img>
        <v-spacer></v-spacer>
        <template v-if="currentRouteName === 'index'">
            <v-btn
                @click="$vuetify.goTo('#about')"
                class="hover-animation font-size-16px text-uppercase mx-6"
                :class="{ 'hover-animation-active': intersecting === 'about' }"
                text
            >
                About
            </v-btn>
            <v-btn
                @click="$vuetify.goTo('#services')"
                class="hover-animation font-size-16px text-uppercase mx-6"
                :class="{ 'hover-animation-active': intersecting === 'services' }"
                text
            >
                Services
            </v-btn>
        </template>
        <template v-else>
            <v-btn
                @click.stop="$router.push('/')"
                class="hover-animation font-size-16px text-uppercase mx-6"
                text
            >
                Back To Index
            </v-btn>
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