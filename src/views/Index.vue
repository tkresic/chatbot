<template>
    <v-row>
        <v-col class="py-0">
            <v-row
                class="index-background height-100vh"
                justify="center"
                :align="$vuetify.breakpoint.smAndUp ? 'start' : 'center'"
            >
                <v-col
                    cols="12"
                    class="text-center text-sm-left"

                >
                    <h1
                        v-intersect="handleIntersect"
                        class="header-color"
                        :class="{ 'header-font-size header-margins': $vuetify.breakpoint.smAndUp }"
                    >
                        Na pravom mjestu
                    </h1>
                </v-col>
            </v-row>
            <v-row
                id="about"
                justify="center"
                align="center"
                class="py-12"
                :class="{ 'height-100vh' : $vuetify.breakpoint.smAndUp }"
            >
                <v-col
                    cols="12"
                    md="4"
                    class="text-center text-md-left animation-class"
                    :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                    :order="$vuetify.breakpoint.mdAndUp ? 'first' : 'last'"
                    v-animate.fade="'slide-up'"
                >
                    <h1
                        v-intersect="handleIntersect"
                        class="about"
                    >
                        O nama
                    </h1>
                    <p>
                        D1GITAL je novi brend multimedijskog digitalnog oglašavanja u OOH (Out-Of-Home) industriji koji kroz vlastitu mrežu digitalnih billboarda širi vaše tržište.
                    </p>
                    <h4>
                        Nije stvar veličine, stvar je preciznosti
                    </h4>
                    <p>
                        Naša mreža billboarda raste, a od ključne je važnosti da vam nudimo oglašavanje na najatraktivnijim lokacijama u Zagrebu kako bismo vam osigurali najbolju uslugu.
                    </p>
                    <h4>
                        Pratimo rezultate
                    </h4>
                    <p>
                        Uz nas nije teško pratiti OOH rezultate. Svi naši digitalni billboardi su opremljeni kamerama koje omogućavaju mjerenje uspjeha vašeg oglašavanja
                    </p>
                </v-col>
                <v-col
                    v-animate.fade="'slide-up'"
                    cols="12"
                    md="4"
                    class="animation-class"
                >
                    <v-row class="justify-center">
                        <v-col
                            cols="auto"
                            class="text-center"
                        >
                            <img
                                :src="require('@/assets/Placeholder.png')"
                                width="300px"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row
                id="services"
                justify="center"
                align="center"
                class="navy-blue-section py-12"
                :class="{ 'height-100vh' : $vuetify.breakpoint.smAndUp }"
            >
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-row
                        justify="center"
                        align="center"
                    >
                        <v-col
                            v-animate.fade="'slide-up'"
                            cols="auto"
                            class="animation-class mx-6"
                        >
                            <img
                                :src="require('@/assets/index/icons/Attraction.png')"
                                width="60px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1
                                v-intersect="handleIntersect"
                                class="services"
                            >
                                Atraktivnost
                            </h1>
                            <p class="white--text">
                                Frekventne i atraktivne lokacije u Zagrebu osigurat će veliki doseg vaše digitalne kampanje.
                            </p>
                        </v-col>
                    </v-row>
                    <v-row
                        justify="center"
                        align="center"
                    >
                        <v-col
                            v-animate.fade="'slide-up'"
                            cols="auto"
                            class="animation-class mx-6"
                        >
                            <img
                                :src="require('@/assets/index/icons/Measurable.png')"
                                width="60px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Mjerljivost</h1>
                            <p class="white--text">
                                Kamere u kombinaciji s pametnim software rješenjima pružaju vam mogućnost mjerenje uspjeha.
                            </p>
                        </v-col>
                    </v-row>
                    <v-row
                        justify="center"
                        align="center"
                    >
                        <v-col
                            v-animate.fade="'slide-up'"
                            cols="auto"
                            class="animation-class mx-6"
                        >
                            <img
                                :src="require('@/assets/index/icons/Agile.png')"
                                width="60px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Agilnost</h1>
                            <p class="white--text">
                                Hands-on pristup i fokusiranost na uspjeh svakog našeg partnera omogućava vam ažuriranje kampanja, izmjenu kreative i brigu o vašoj promociji u svakom trenutku.
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-row
                        justify="center"
                        align="center"
                    >
                        <v-col
                            v-animate.fade="'slide-up'"
                            cols="auto"
                            class="animation-class mx-6"
                        >
                            <img
                                :src="require('@/assets/index/icons/Visible.png')"
                                width="60px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Uočljivost</h1>
                            <p class="white--text">
                                Digitalna reklama je budućnost. Dok drugi stoje, vi se pokrenite! Privucite pažnju svojeg tržišta.
                            </p>
                        </v-col>
                    </v-row>
                    <v-row
                        justify="center"
                        align="center"
                    >
                        <v-col
                            v-animate.fade="'slide-up'"
                            cols="auto"
                            class="animation-class mx-6"
                        >
                            <img
                                :src="require('@/assets/index/icons/Relevant.png')"
                                width="60px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Relevantnost</h1>
                            <p class="white--text">
                                Prilagodite svoje poruke prema dobu dana, vremenskim uvjetima ili bilo kojem drugom parametru, a mi ćemo ih isporučiti onda kada su najrelevantnije.
                            </p>
                        </v-col>
                    </v-row>
                    <v-row
                        justify="center"
                        align="center"
                    >
                        <v-col
                            v-animate.fade="'slide-up'"
                            cols="auto"
                            class="animation-class mx-6"
                        >
                            <img
                                :src="require('@/assets/index/icons/EcoFriendly.png')"
                                width="60px"
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Eco-Friendly</h1>
                            <p class="white--text">
                                Prelaskom s tradicionalnih na digitalne billboarde uklanja se otpad, voda, tinta i otapala potrebna za proizvodnju tiskanih natpisa, a samim time se smanjuje negativan utjecaj na okoliš.
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {

    props: ['intersecting'],

    methods: {
        handleIntersect(entries) {
            if (entries[0].isIntersecting) {
                this.$emit('update:intersecting', entries[0].target.className);
            }
        }
    }

};
</script>

<style lang="scss">

.index-background {
    background: url('../assets/index/Background.png')  no-repeat center;
}

.text-styling {
    text-decoration: none;
}

.header-img {
    position: absolute !important;
    top: 0;
    left: 0;
}

.font-size-16px {
    font-size: 16px !important;
}

.font-size-34px {
    font-size: 34px !important;
}

.height-100vh {
    height: 100vh;
}

.font-size-60px {
    font-size: 60px;
}

.font-size-96px {
    font-size: 96px;
}

.border-radius-15px {
    border-radius: 15px;
}

.z-index-1 {
    z-index: 1;
}

.row-margin {
    margin: 125px 0;
}

.animation-class {
    margin-top: 25px;
    opacity: 0;
}

.animate {
    transition-delay: 0.15s;
    transition-duration: 0.75s;
    transition-timing-function: ease-in;
}

.slide-up {
    transform: translateY(0);
}

.slide-up.animate-active {
    transform: translateY(-25px);
    opacity: 1;
}

.grey-text {
    color: #848282;
}

.bottom-2px {
    bottom: 2px;
}

.divider {
    width: 50px;
    height: 2px;
    background: rgba(0, 0, 0, 0.12);
    margin: 0 auto;
}

.titles {
    font-size: 45px;
}

.header-img-position {
    position: relative;
    top: 70px;
}

.navy-blue-section {
    background: #4285F4;
    color: #fff !important;
}

.header-margins {
    margin-top: 150px;
    margin-left: 100px;
}

.header-color {
    color: #4285F4;

}

.header-font-size {
    font-size: 100px !important;
}

</style>
