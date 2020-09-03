<template>
    <v-footer
        :color="$vuetify.breakpoint.mdAndDown ? 'rgba(83, 100, 190, 0.05)' : '#fafafa'"
        class="footer"
    >
        <v-row
            justify="center"
            align="center"
            class="my-8 text-center"
        >
            <v-col
                cols="12"
                sm="4"
            >
                <p class="grey-text font-weight-bold mb-0">
                    About
                </p>
                <a
                    class="text-styling grey-link-color font-weight-bold mb-0"
                    target="_blank"
                    href="mailto:info@d1gital.com"
                >
                    info@d1gital.com
                </a>
                <br>
                <a
                    class="text-styling grey-link-color font-weight-bold mb-0"
                    target="_blank"
                    href="tel:123-456-7890"
                >
                    123-456-7890
                </a>
                <br/>
                <p class="text-styling grey-link-color mb-0">
                    Ulica grada Zagreba, Zagreb 10 000, Hrvatska
                </p>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <p class="grey-text font-weight-bold mb-0">
                    Legal
                </p>
                <router-link to="terms-and-conditions" class="text-styling grey-link-color font-weight-bold mb-0">
                    Terms & Conditions, Privacy & Cookie Policy
                </router-link>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <p class="grey-text font-weight-bold mb-0">
                    Connect
                </p>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    icon
                    color="primary"
                    class="mx-1"
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>

import Vue from 'vue'

export default Vue.extend({
    name: 'Footer',

    data: () => ({
        icons: ['facebook', 'mdi-twitter', 'mdi-google-plus', 'mdi-instagram', 'mdi-linkedin', 'mdi-whatsapp'],
    })
});

</script>