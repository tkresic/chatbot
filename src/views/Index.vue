<template>
    <v-row class="bg">
        <v-col class="py-0">
            <v-row
                align="center"
                justify="center"
                class="height-100vh"
            >
                <v-col
                    cols="12"
                    md="4"
                    class="text-center"
                >
                    <img
                        :src="require('@/assets/Placeholder.png')"
                        height="300px"
                        class="border-radius-15px"
                    />
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    class="z-index-1 text-center text-md-left px-6"
                >
                    <div :class="{ 'font-size-60px': $vuetify.breakpoint.lgAndDown, 'font-size-96px': $vuetify.breakpoint.xl }">
                        <span
                            v-intersect="handleIntersect"
                            class="d-inline-block mt-10 font-weight-bold"
                        >
                            d1gital
                        </span>
                    </div>
                    <br/>
                    <span class="grey--text">
                        Maecenas ut risus venenatis, dapibus lectus ut, porttitor turpis. Nulla ornare metus sed lacus facilisis fermentum. Aliquam hendrerit ut nunc non fringilla. Etiam arcu odio, sagittis sed metus non, mattis molestie diam. Duis id elit scelerisque, sollicitudin leo sit amet, dapibus mi. In nibh ex, accumsan quis gravida in, faucibus vel dolor. Aliquam at semper turpis. Cras fringilla ipsum eget massa interdum, vitae malesuada mauris lacinia. Quisque egestas eros leo. Nam euismod tristique erat, sed sodales ante. Integer est ex, congue ut elit at, blandit imperdiet nisl.
                    </span>
                    <br/>
                </v-col>
            </v-row>
            <v-row
                id="about"
                justify="center"
                align="center"
                class="height-100vh"
            >
                <v-col
                    v-animate.fade="'slide-up'"
                    cols="12"
                    md="4"
                    class="animation-class"
                >
                    <v-row class="justify-center justify-md-start">
                        <v-col 
                            cols="auto" 
                            class="text-center"
                        >
                            <img
                                :src="require('@/assets/Placeholder.png')"
                                width="400px"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                    class="text-center text-md-left animation-class"
                    :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                    :order="$vuetify.breakpoint.mdAndDown ? 'first' : 'last'"
                    v-animate.fade="'slide-up'"
                >
                    <h1
                        v-intersect="handleIntersect"
                        class="about"
                    >
                        Service 1
                    </h1>
                    <p class="grey--text">
                        Phasellus ornare, leo in vehicula ultrices, ipsum eros
                        vulputate
                        neque, a eleifend est nunc non velit. Nulla facilisi.
                        Suspendisse
                        potenti. Nunc vel libero purus. In hac habitasse platea
                        dictumst.
                        Pellentesque cursus nisi nisi, sit amet faucibus quam
                        malesuada ut.
                        Vestibulum purus tellus, molestie id mi eget, sagittis
                        convallis
                        quam.
                    </p>
                    <p class="grey--text">
                        Phasellus ornare, leo in vehicula ultrices, ipsum eros
                        vulputate
                        neque, a eleifend est nunc non velit. Nulla facilisi.
                        Suspendisse
                        potenti. Nunc vel libero purus. In hac habitasse platea
                        dictumst.
                        Pellentesque cursus nisi nisi, sit amet faucibus quam
                        malesuada ut.
                        Vestibulum purus tellus, molestie id mi eget, sagittis
                        convallis
                        quam.
                    </p>
                </v-col>
            </v-row>
            <v-row
                id="services"
                justify="center"
                align="center"
                class="height-100vh"
            >
                <v-col
                    v-animate.fade="'slide-up'"
                    cols="12"
                    md="4"
                    class="animation-class"
                >
                    <v-row class="justify-center justify-md-start">
                        <v-col
                            cols="auto"
                            class="text-center"
                        >
                            <img
                                :src="require('@/assets/Placeholder.png')"
                                width="400px"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                    class="text-center text-md-left animation-class"
                    :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                    :order="$vuetify.breakpoint.mdAndDown ? 'first' : 'last'"
                    v-animate.fade="'slide-up'"
                >
                    <h1
                        v-intersect="handleIntersect"
                        class="services"
                    >
                        Service 2
                    </h1>
                    <p class="grey--text">
                        Phasellus ornare, leo in vehicula ultrices, ipsum eros
                        vulputate
                        neque, a eleifend est nunc non velit. Nulla facilisi.
                        Suspendisse
                        potenti. Nunc vel libero purus. In hac habitasse platea
                        dictumst.
                        Pellentesque cursus nisi nisi, sit amet faucibus quam
                        malesuada ut.
                        Vestibulum purus tellus, molestie id mi eget, sagittis
                        convallis
                        quam.
                    </p>
                    <p class="grey--text">
                        Phasellus ornare, leo in vehicula ultrices, ipsum eros
                        vulputate
                        neque, a eleifend est nunc non velit. Nulla facilisi.
                        Suspendisse
                        potenti. Nunc vel libero purus. In hac habitasse platea
                        dictumst.
                        Pellentesque cursus nisi nisi, sit amet faucibus quam
                        malesuada ut.
                        Vestibulum purus tellus, molestie id mi eget, sagittis
                        convallis
                        quam.
                    </p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {

    props: ['intersecting'],

    data() {
        return {
            services: [
                {
                    title: 'Service 1',
                    text: 'Praesent eget eros sed tortor interdum molestie. Integer in est sed felis posuere sollicitudin.',
                    img: 'Placeholder.png'
                },
                {
                    title: 'Service 2',
                    text: 'Praesent eget eros sed tortor interdum molestie. Integer in est sed felis posuere sollicitudin.',
                    img: 'Placeholder.png'
                },
                {
                    title: 'Service 3',
                    text: 'Praesent eget eros sed tortor interdum molestie. Integer in est sed felis posuere sollicitudin.',
                    img: 'Placeholder.png'
                }
            ]
        };
    },

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

p {
    color: rgba(0, 0, 0, 0.6);
}

.bg {
    background: #fafafa;
    color: rgba(0, 0, 0, 0.87);
}

.text-styling {
    font-size: 14px;
    text-decoration: none;
}

.grey-link-color {
    color: #909090e6 !important;
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

</style>
