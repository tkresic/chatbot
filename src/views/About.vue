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
        <v-col cols="12" md="6" class="z-index-1 text-center text-md-left px-6">
          <h1>About Us</h1>
          <span class="grey--text">
            Requiro is a shipping, logistics and a forwarding agency. Connecting
            and simplifying trade to help our clients grow and thrive. With a
            dedicated team, operating in multiple countries, we go all the way
            to enable global trade for a growing world.
          </span>
        </v-col>
        <v-img
          :src="require('@/assets/blobs/FirstRightBlob.png')"
          class="first-right-blob hidden-sm-and-down"
        ></v-img>
      </v-row>
      <v-row justify="center" align="center" class="row-margin">
        <v-col cols="12" class="text-center" align-self="center">
          <h2 class="titles text-uppercase font-weight-bold mb-3">Visit Us</h2>
          <div class="divider"></div>
        </v-col>
        <v-col cols="12 px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9356.953212595557!2d16.0320256924078!3d45.794456454141745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766789ca76aaaab%3A0x35171c9e9145a7a!2sSlavonska%20avenija%201c%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1583601044266!5m2!1sen!2shr"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          ></iframe>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
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
  right: 4px;
}

.title-lg-and-md-position {
  top: 15px !important;
  right: 4px !important;
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
