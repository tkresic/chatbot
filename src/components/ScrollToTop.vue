<template>
    <v-fab-transition>
        <v-btn
            @click="$vuetify.goTo(0)"
            v-scroll="onScroll"
            v-show="fab"
            color="#4285F4"
            fab
            dark
            fixed
            bottom
            right
        >
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script>

import Vue from 'vue'

export default Vue.extend({
    name: 'ScrollToTop',

    data() {
        return {
            fab: false,
        };
    },

    methods: {
        onScroll(e) {
            if (typeof window === 'undefined') return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 20;
        },
    }
});

</script>