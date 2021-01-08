<template>
    <v-app>
        <v-main class="background">
            <v-container
                fluid
                fill-height
                class="py-0"
            >
                <v-layout justify-center>
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>


export default {

    mounted() {

        window.addEventListener('DOMContentLoaded', () => {
            var divs = document.querySelectorAll('div');
            for (var i = 0; i < divs.length; ++i) {
                if (divs[i].getAttribute("style")) {
                    if (divs[i].getAttribute("style").indexOf("z-index:") != -1) {
                        divs[i].remove();
                    }
                }
            }
        });
    },
}


</script>

<style lang="scss">

body {
    li, p {
        font-family: 'Helvetica Regular', sans-serif;
        color: #4a4a4a;
    }
}

</style>