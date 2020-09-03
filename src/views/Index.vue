<template>
    <v-row>
        <v-col
            v-intersect="handleIntersect"
            class="py-0"
        >
            <v-row
                align="center"
                justify="center"
                class="index-background height-100vh"
            >
                <v-col
                    cols="12"
                    sm="6"
                    class="gif-section text-center"
                >
                    <img
                        :src="require('@/assets/index/Animation.gif')"
                        width="100%"
                        height="100%"
                    />
                </v-col>
            </v-row>
            <v-row
                id="about"
                justify="center"
                align="center"
                class="height-100vh"
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
                        About
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
                                width="400px"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row
                id="services"
                justify="center"
                align="center"
                class="navy-blue-bg white--text"
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
                            <v-icon
                                x-large
                                dark
                            >
                                edit
                            </v-icon>
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
                                Title
                            </h1>
                            <p>
                                Phasellus ornare, leo in vehicula ultrices, ipsum eros
                                vulputate
                                neque, a eleifend est nunc non velit. Nulla facilisi.
                                Suspendisse
                                potenti. Nunc vel libero purus. In hac habitasse platea
                                dictumst.
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
                            <v-icon
                                x-large
                                dark
                            >
                                edit
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Title</h1>
                            <p>
                                Phasellus ornare, leo in vehicula ultrices, ipsum eros
                                vulputate
                                neque, a eleifend est nunc non velit. Nulla facilisi.
                                Suspendisse
                                potenti. Nunc vel libero purus. In hac habitasse platea
                                dictumst.
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
                            <v-icon
                                x-large
                                dark
                            >
                                edit
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Title</h1>
                            <p>
                                Phasellus ornare, leo in vehicula ultrices, ipsum eros
                                vulputate
                                neque, a eleifend est nunc non velit. Nulla facilisi.
                                Suspendisse
                                potenti. Nunc vel libero purus. In hac habitasse platea
                                dictumst.
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
                            <v-icon
                                x-large
                                dark
                            >
                                edit
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Title</h1>
                            <p>
                                Phasellus ornare, leo in vehicula ultrices, ipsum eros
                                vulputate
                                neque, a eleifend est nunc non velit. Nulla facilisi.
                                Suspendisse
                                potenti. Nunc vel libero purus. In hac habitasse platea
                                dictumst.
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
                            <v-icon
                                x-large
                                dark
                            >
                                edit
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Title</h1>
                            <p>
                                Phasellus ornare, leo in vehicula ultrices, ipsum eros
                                vulputate
                                neque, a eleifend est nunc non velit. Nulla facilisi.
                                Suspendisse
                                potenti. Nunc vel libero purus. In hac habitasse platea
                                dictumst.
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
                            <v-icon
                                x-large
                                dark
                            >
                                edit
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            class="text-center text-sm-left animation-class mx-6"
                            :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
                            v-animate.fade="'slide-up'"
                        >
                            <h1>Title</h1>
                            <p>
                                Phasellus ornare, leo in vehicula ultrices, ipsum eros
                                vulputate
                                neque, a eleifend est nunc non velit. Nulla facilisi.
                                Suspendisse
                                potenti. Nunc vel libero purus. In hac habitasse platea
                                dictumst.
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

    data() {
        return {
            slides: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nisi eu arcu suscipit malesuada. Donec euismod euismod lacus, sit amet feugiat ipsum aliquam ac. Etiam eget purus nec felis auctor convallis et nec leo. Aliquam ullamcorper mauris et convallis mattis. Sed sollicitudin aliquam scelerisque. Aenean suscipit velit et erat faucibus placerat. Vestibulum leo orci, consectetur ac egestas non, aliquet sit amet quam. Curabitur congue molestie quam ut aliquam. Ut a facilisis libero. Proin cursus, ipsum id posuere volutpat, eros purus congue magna, eget imperdiet lorem diam et sapien. Nulla at sagittis nisi. Ut et dui sed diam fringilla tristique.',
                'Proin vitae facilisis dolor. Ut ornare fermentum risus, sed faucibus elit suscipit in. Morbi auctor ipsum posuere, suscipit est sed, tempor erat. Vivamus tempus mauris orci, at tincidunt felis imperdiet sit amet. Cras quis quam volutpat, vulputate nisl eget, ullamcorper augue. Vivamus quis ante vitae enim sagittis interdum vitae quis eros. In et lacus orci. Nulla mattis, sapien sed congue efficitur, neque nunc volutpat mi, vel vulputate massa tortor id tortor. Mauris eleifend, lectus eget faucibus porta, leo arcu convallis odio, vel cursus mauris augue ut ante. Suspendisse eros ipsum, efficitur in libero in, egestas condimentum ante. Nullam non sodales lectus. Cras eget sapien quis mauris consequat placerat. Nunc suscipit ultricies sodales.',
                'Maecenas eu facilisis diam. Nunc dolor mauris, tempus id augue eget, dignissim pulvinar nulla. Aliquam erat volutpat. Fusce rutrum venenatis nisi sit amet tempus. Vestibulum ac ipsum nec lacus feugiat accumsan sit amet pharetra ipsum. Quisque nec ante porttitor, finibus dui porttitor, pretium elit. Suspendisse potenti. Sed vestibulum ullamcorper lectus vitae mollis. Vestibulum sit amet placerat nisi. Ut quis efficitur nisl, sed tempor odio. Donec in viverra nisi. Donec metus sem, elementum ut odio rutrum, tempor varius dolor. Integer id ipsum mauris.',
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent gravida neque a nunc sagittis, in finibus ipsum varius. Nunc accumsan ornare metus ac ultrices. Vestibulum suscipit varius nisi sed feugiat. Ut hendrerit arcu ac velit luctus ultricies. Cras sit amet pellentesque quam. Nullam placerat, augue sed ullamcorper blandit, massa est venenatis elit, suscipit dignissim dui nulla at quam. Vestibulum id convallis ligula, non tempor leo.',
                'Maecenas dignissim magna ac nulla hendrerit, ac lacinia urna facilisis. Nulla accumsan mi ut enim posuere ultrices in ut augue. Nulla at euismod magna. Curabitur egestas erat massa, vel ornare purus dictum et. Phasellus et justo eget orci rhoncus mollis. Phasellus sagittis risus commodo metus mollis imperdiet. Aliquam posuere nisi orci, cursus finibus turpis volutpat sit amet. Ut nec cursus turpis. Donec vehicula ligula vitae ex cursus commodo.',
            ],
        }
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

.index-background {
    background: url('../assets/index/Background.png')  no-repeat center;
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

.navy-blue-bg {
    background: #000080;
}

.gif-section {
    background: #fff;
    border: 10px solid #000;
}

</style>
