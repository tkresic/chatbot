<template>
    <v-app-bar
        color="rgba(255,255,255, 0.95)"
        height="75"
        class="elevation-0"
        fixed
        hide-on-scroll
        :style="{ 'z-index': 6 }"
    >
        <template v-if="currentRouteName === 'index'">
            <v-row
                :justify="$vuetify.breakpoint.mdAndUp ? 'end' : 'center'"
                align="center"
            >
                <v-col
                    cols="3"
                    class="text-center"
                >
                    <img
                        @click="$vuetify.goTo(0)"
                        :src="require('@/assets/Digital.png')"
                        :width="$vuetify.breakpoint.mdAndUp ? '150px' : '50px'"
                        alt="d1gital Logo"
                        class="cursor-pointer"
                        :class="{ 'ml-16' : $vuetify.breakpoint.mdAndUp }"
                    />
                </v-col>
                <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>
                <v-col
                    :cols="$vuetify.breakpoint.mdAndUp ? 'auto' : '3'"
                    class="text-center"
                >
                    <v-btn
                        @click="$vuetify.goTo('#about')"
                        class="hover-animation app-bar-font-size text-uppercase  px-0"
                        :class="{ 'hover-animation-active': intersecting === 'about'}"
                        text
                    >
                        O nama
                    </v-btn>
                </v-col>
                <v-col
                    :cols="$vuetify.breakpoint.mdAndUp ? 'auto' : '3'"
                    class="text-center"
                >
                    <v-btn
                        @click="$vuetify.goTo('#why-dooh')"
                        class="hover-animation app-bar-font-size text-uppercase  px-0"
                        :class="{ 'hover-animation-active': intersecting === 'why-dooh'}"
                        text
                    >
                        Zašto DOOH
                    </v-btn>
                </v-col>
                <v-col
                    :cols="$vuetify.breakpoint.mdAndUp ? 'auto' : '3'"
                    class="text-center"
                >
                    <v-btn
                        @click="$vuetify.goTo('#contact')"
                        class="hover-animation app-bar-font-size text-uppercase  px-0"
                        :class="{ 'hover-animation-active': intersecting === 'contact', 'mr-16' : $vuetify.breakpoint.smAndUp }"
                        text
                    >
                        Kontakt
                    </v-btn>
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <v-btn
                @click.stop="$router.push('/')"
                class="hover-animation app-bar-font-size text-uppercase mx-3 px-0"
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

<style>

.app-bar-font-size {
    font-size: 12px !important;
}

</style>