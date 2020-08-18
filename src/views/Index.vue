<template>
  <v-row class="bg">
    <v-col class="py-0">
      <v-img
        :src="require('@/assets/blobs/TopBlob.png')"
        class="header-img"
        :width="$vuetify.breakpoint.mdAndDown ? '100%' : '65%'"
      ></v-img>
      <v-row
        align="center"
        justify="center"
        class="min-height-1000px margin-top-100px"
      >
        <v-col
          cols="12"
          md="4"
          class="z-index-1 text-center"
          :class="{ 'header-img-position': $vuetify.breakpoint.smAndDown }"
        >
          <img
            :src="require('@/assets/HeaderImage.jpeg')"
            height="300px"
            class="border-radius-15px"
          />
        </v-col>
        <v-col cols="12" md="6" class="z-index-1 text-center text-md-left px-6">
          <div
            class="title-position"
            :class="{
              'font-size-60px': $vuetify.breakpoint.lgAndDown,
              'font-size-96px': $vuetify.breakpoint.xl,
              'title-xs-position': $vuetify.breakpoint.xs,
              'title-sm-position': $vuetify.breakpoint.sm,
              'title-lg-and-md-position':
                $vuetify.breakpoint.md || $vuetify.breakpoint.lg
            }"
          >
            <span class="font-weight-bold text-uppercase">Requiro </span>
            <br v-if="$vuetify.breakpoint.xs" />
            <span :class="{ 'agency-position': $vuetify.breakpoint.xs }"
              >Agency</span
            >
          </div>
          <br />
          <span
            class="d-inline-block font-size-34px grey--text"
            :class="{ 'mt-10': $vuetify.breakpoint.smAndDown }"
          >
            CHOOSE THE RIGHT FREIGHT FORWARDING PARTNER
          </span>
          <br />
          <span class="grey--text">
            Building a right freight forwarding agency business is one of the
            most important tasks for every freight forwarder.
          </span>
          <br />
          <v-btn
            color="rgb(222, 175, 22)"
            dark
            :class="{
              'mt-2': $vuetify.breakpoint.mdAndUp,
              'mt-8': $vuetify.breakpoint.smAndDown
            }"
            href="mailto:info.requiro@gmail.com"
            target="_blank"
          >
            Send us your request
          </v-btn>
        </v-col>
        <v-img
          :src="require('@/assets/blobs/FirstRightBlob.png')"
          class="first-right-blob hidden-sm-and-down"
        ></v-img>
      </v-row>
      <v-row
        justify="center"
        class="min-height-1000px"
        :class="{ 'margin-top-100px': $vuetify.breakpoint.xsOnly }"
      >
        <v-col cols="12" class="text-center" align-self="center">
          <h2 class="titles text-uppercase font-weight-bold mb-3">Services</h2>
          <div class="divider"></div>
        </v-col>
        <v-col
          v-for="({ title, text, img }, i) in services"
          :key="i"
          cols="12"
          md="3"
          align-self="start"
          class="animation-class mx-8 px-8"
          v-animate.fade="'slide-up'"
        >
          <v-card
            class="justify-center elevation-3 text-center py-12 px-4"
            height="350px"
          >
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
            >
              <img :src="require('@/assets/' + img)" width="50%" />
            </v-card-title>
            <span class="text-uppercase font-weight-bold black--text">{{
              title
            }}</span>
            <v-card-text class="grey--text" v-text="text"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="row-margin">
        <v-img
          :src="require('@/assets/blobs/LeftBlob.png')"
          class="left-blob hidden-sm-and-down"
          width="10%"
        ></v-img>
        <v-col
          cols="12"
          md="4"
          class="animation-class"
          v-animate.fade="'slide-up'"
        >
          <v-row class="justify-center justify-md-start">
            <v-col cols="auto" class="text-center">
              <img
                :src="require('@/assets/FirstSectionImage.jpeg')"
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
          <h1>Transport</h1>
          <p class="grey--text">
            Phasellus ornare, leo in vehicula ultrices, ipsum eros vulputate
            neque, a eleifend est nunc non velit. Nulla facilisi. Suspendisse
            potenti. Nunc vel libero purus. In hac habitasse platea dictumst.
            Pellentesque cursus nisi nisi, sit amet faucibus quam malesuada ut.
            Vestibulum purus tellus, molestie id mi eget, sagittis convallis
            quam.
          </p>
          <p class="grey--text">
            Phasellus ornare, leo in vehicula ultrices, ipsum eros vulputate
            neque, a eleifend est nunc non velit. Nulla facilisi. Suspendisse
            potenti. Nunc vel libero purus. In hac habitasse platea dictumst.
            Pellentesque cursus nisi nisi, sit amet faucibus quam malesuada ut.
            Vestibulum purus tellus, molestie id mi eget, sagittis convallis
            quam.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="row-margin">
        <v-col
          cols="12"
          md="4"
          class="text-center text-md-left animation-class"
          :class="{ 'px-8': $vuetify.breakpoint.mdAndDown }"
          v-animate.fade="'slide-up'"
        >
          <h1>Special Transport</h1>
          <p class="grey--text">
            Phasellus ornare, leo in vehicula ultrices, ipsum eros vulputate
            neque, a eleifend est nunc non velit. Nulla facilisi. Suspendisse
            potenti. Nunc vel libero purus. In hac habitasse platea dictumst.
            Pellentesque cursus nisi nisi, sit amet faucibus quam malesuada ut.
            Vestibulum purus tellus, molestie id mi eget, sagittis convallis
            quam.
          </p>
          <p class="grey--text">
            Phasellus ornare, leo in vehicula ultrices, ipsum eros vulputate
            neque, a eleifend est nunc non velit. Nulla facilisi. Suspendisse
            potenti. Nunc vel libero purus. In hac habitasse platea dictumst.
            Pellentesque cursus nisi nisi, sit amet faucibus quam malesuada ut.
            Vestibulum purus tellus, molestie id mi eget, sagittis convallis
            quam.
          </p>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="animation-class"
          v-animate.fade="'slide-up'"
        >
          <v-row class="justify-center justify-md-end">
            <v-col cols="auto" class="text-center">
              <img
                :src="require('@/assets/SecondSectionImage.jpeg')"
                width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="row-margin">
        <v-img
          :src="require('@/assets/blobs/SecondRightBlob.png')"
          class="second-right-blob hidden-sm-and-down"
          width="10%"
        ></v-img>
        <v-col
          cols="12"
          md="4"
          class="animation-class"
          v-animate.fade="'slide-up'"
        >
          <v-row class="justify-center justify-md-start">
            <v-col cols="auto" class="text-center">
              <img
                :src="require('@/assets/ThirdSectionImage.jpeg')"
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
          v-animate.fade="'slide-up'"
          :order="$vuetify.breakpoint.mdAndDown ? 'first' : 'last'"
        >
          <h1>Groupage Transport</h1>
          <p class="grey--text">
            Phasellus ornare, leo in vehicula ultrices, ipsum eros vulputate
            neque, a eleifend est nunc non velit. Nulla facilisi. Suspendisse
            potenti. Nunc vel libero purus. In hac habitasse platea dictumst.
            Pellentesque cursus nisi nisi, sit amet faucibus quam malesuada ut.
            Vestibulum purus tellus, molestie id mi eget, sagittis convallis
            quam.
          </p>
          <p class="grey--text">
            Phasellus ornare, leo in vehicula ultrices, ipsum eros vulputate
            neque, a eleifend est nunc non velit. Nulla facilisi. Suspendisse
            potenti. Nunc vel libero purus. In hac habitasse platea dictumst.
            Pellentesque cursus nisi nisi, sit amet faucibus quam malesuada ut.
            Vestibulum purus tellus, molestie id mi eget, sagittis convallis
            quam.
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Transport",
          text:
            "Quality partnership generates high revenue for every freight forwarding organization.",
          img: "Transport.png"
        },
        {
          title: "Forwarding Agency Consultation",
          text:
            "The freight forwarding agency industry is one of the most competitive industries in the world.",
          img: "ForwardingAgencyConsultation.png"
        },
        {
          title: "Special Transport",
          text:
            "Every freight forwarder must be careful about choosing right partners.",
          img: "SpecialTransport.png"
        }
      ]
    };
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

.left-blob {
  position: absolute !important;
  left: 0;
}

.first-right-blob {
  position: absolute !important;
  top: 800px;
  right: 0;
}

.second-right-blob {
  position: absolute !important;
  right: 0;
}

.font-size-16px {
  font-size: 16px !important;
}

.font-size-34px {
  font-size: 34px !important;
}

.min-height-1000px {
  min-height: 1000px;
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

.title-position {
  display: inline-block;
  position: relative;
  top: 30px;
}

.title-lg-and-md-position {
  top: 15px !important;
}

.title-sm-position {
  top: 55px !important;
}

.title-xs-position {
  top: 75px !important;
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

.margin-top-100px {
  margin-top: 100px;
}

.agency-position {
  position: relative;
  display: inline-block;
  top: -30px;
}

.header-img-position {
  position: relative;
  top: 70px;
}
</style>
