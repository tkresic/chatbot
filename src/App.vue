<template>
    <v-app>
        <ScrollToTop/>
        <AppBar
            :currentRouteName="$router.currentRoute.name"
            :intersecting.sync="intersecting"
        />
        <v-main class="background">
            <v-container
                fluid
                fill-height
                class="py-0"
            >
                <v-layout justify-center>
                    <router-view :intersecting.sync="intersecting"></router-view>
                </v-layout>
            </v-container>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>

import Footer from '@/components/Footer.vue';
import AppBar from '@/components/AppBar.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

export default {

    components: {
        Footer,
        AppBar,
        ScrollToTop,
    },

    data() {
        return {
            intersecting: null,
        };
    },
};

</script>

<style lang="scss">

body {
    li, p {
        font-family: 'Helvetica Regular', sans-serif;
        color: #4a4a4a;
    }
}

.v-select:not(.do-not-apply-transform) {
    transform: scale(0.75);
    margin-top: 16px;
}

.v-list {
    padding: 0 !important;
}

.nav-ham {
    width: 40px;
    height: 45px;
    cursor: pointer;
    margin-left: -4px;
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

.hover-animation {
    &:before {
        opacity: 0 !important;
    }
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        transform: scaleX(0);
        background-color: #4285F4;
        transition: transform 0.3s;
    }
    &:hover {
        &:before {
            opacity: 0 !important;
        }

        &:after {
            transform: scaleX(1);
        }
    }
}

.hover-animation-active::after {
    transform: scaleX(1);
}

.cursor-pointer {
    cursor: pointer;
}

</style>