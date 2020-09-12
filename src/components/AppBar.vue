<template>
    <v-app-bar
        color="rgba(255,255,255, 0.95)"
        height="75"
        class="elevation-1"
        fixed
        :style="{ 'z-index': 6 }"
    >
        <template v-if="$vuetify.breakpoint.smAndUp">
            <v-img
                @click="$vuetify.goTo(0)"
                :src="require('@/assets/Digital.png')"
                max-width="90px"
                max-height="90px"
                alt="d1gital Logo"
                class="cursor-pointer"
            ></v-img>
            <v-spacer></v-spacer>
        </template>
        <template v-if="currentRouteName === 'index'">
            <v-row :justify="$vuetify.breakpoint.smAndUp ? 'end' : 'center'">
                <v-col cols="auto">
                    <v-btn
                        @click="$vuetify.goTo('#about')"
                        class="hover-animation text-uppercase mx-3 px-0"
                        :class="{ 'hover-animation-active': intersecting === 'about'}"
                        text
                    >
                        O nama
                    </v-btn>
                    <v-btn
                        @click="$vuetify.goTo('#services')"
                        class="hover-animation text-uppercase mx-3 px-0"
                        :class="{ 'hover-animation-active': intersecting === 'services'}"
                        text
                    >
                        Pokrenite svoj marketing
                    </v-btn>
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <v-btn
                @click.stop="$router.push('/')"
                class="hover-animation text-uppercase"
                text
            >
                Nazad na početnu
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