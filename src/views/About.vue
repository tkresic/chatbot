<template>
  <v-row class="bg">
    <v-col class="py-0">
      <v-row
          align="center"
          justify="center"
          class="min-height-750px margin-top-100px"
      >
        <v-col cols="12" md="6" class="z-index-1 text-center text-md-left px-6">
          <h1>About Us</h1>
          <span class="grey--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a tincidunt diam, non euismod risus. Proin ultricies luctus libero, sit amet tristique nisi pretium sed. Integer aliquet lacinia diam, eget euismod ligula sagittis et. Aenean eu dolor pellentesque, commodo elit luctus, laoreet neque. Maecenas ac libero posuere, eleifend neque id, consectetur dui. Integer id orci eget risus hendrerit mollis. Donec risus arcu, efficitur tempus velit id, rhoncus pretium lacus. Nullam ante ligula, convallis vel volutpat ac, volutpat non erat. Nullam a nunc eros. Cras pharetra aliquet mi, vitae fringilla nibh volutpat eget. Phasellus vulputate risus eget cursus porttitor. Vivamus faucibus, erat vitae gravida sagittis, risus tellus bibendum justo, in sagittis nunc lacus vitae lorem. Aliquam erat volutpat.
          </span>
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

.font-size-16px {
  font-size: 16px !important;
}

.font-size-34px {
  font-size: 34px !important;
}

.min-height-750px {
  min-height: 750px;
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
