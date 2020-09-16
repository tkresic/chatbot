<template>
    <v-footer
        id="contact"
        :color="$vuetify.breakpoint.mdAndDown ? 'rgba(83, 100, 190, 0.05)' : '#fafafa'"
        class="footer contact"
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
                <p class="font-weight-bold mb-0">
                    O nama
                </p>
                <a
                    class="text-styling link font-weight-bold mb-0"
                    target="_blank"
                    href="mailto:info@d1gital.com"
                >
                    info@d1gital.com
                </a>
                <br>
                <a
                    class="text-styling link font-weight-bold mb-0"
                    target="_blank"
                    href="tel:098/988-1519"
                >
                    Tel: 098/988-1519
                </a>
                <br/>
                <p class="text-styling  mb-0">
                    Majdanski put 6, Zagreb 10 000, Hrvatska
                </p>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <p class="font-weight-bold mb-0">
                    Legalne stvari
                </p>
                <router-link
                    to="uvjeti-i-odredbe"
                    class="text-styling link font-weight-bold mb-0"
                >
                    Uvjeti i odredbe
                </router-link>
                <br>
                <router-link
                    to="uvjeti-i-odredbe#politika-privatnosti"
                    class="text-styling link font-weight-bold mb-0"
                >
                    Politika privatnosti
                </router-link>
                <br>
                <router-link
                    to="uvjeti-i-odredbe#politika-kolacica"
                    class="text-styling link font-weight-bold mb-0"
                >
                    Politika kolačića
                </router-link>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <p class="font-weight-bold mb-0">
                    Povežite se
                </p>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    color="#4285F4"
                    class="mx-1"
                    icon
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
        icons: ['facebook', 'mdi-linkedin', 'mdi-instagram', 'mdi-youtube'],
    })
});

</script>

<style>

.footer {
    font-size: 14px;
}

.link {
    color: #747474e6 !important;
}

</style>