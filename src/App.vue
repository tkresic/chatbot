<template>
  <v-app>
    <v-fab-transition>
      <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-navigation-drawer
        v-model="drawer"
        v-if="$vuetify.breakpoint.smAndDown"
        app
        :style="{ top: '75px' }"
    >
      <v-list class="pt-0">
        <v-list-item-group>
          <v-list-item
              class="text-center"
              :to="'/'"
              active-class="active-ng-list-item"
          >
            <v-list-item-content>
              <v-list-item-title
                  v-text="'Index'"
                  class="text-uppercase dark--text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
              class="text-center"
              :to="'about'"
              active-class="active-ng-list-item"
          >
            <v-list-item-content>
              <v-list-item-title
                  v-text="'About'"
                  class="text-uppercase dark--text"
              >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-center">
            <v-list-item-content>
              <v-list-item-title>
                <a
                    class="text-styling font-weight-bold dark-link-text"
                    target="_blank"
                    href="mailto:info@d1gital.com"
                >
                  info@d1gital.com
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        color="rgba(255,255,255, 0.95)"
        height="75"
        class="elevation-1"
        fixed
        hide-on-scroll
        :style="{ 'z-index': 6 }"
    >
      <template v-if="$vuetify.breakpoint.smAndDown">
        <div
            class="nav-ham d-inline-block grey-background"
            @click.stop="drawer = !drawer"
            v-bind:class="{ open: drawer }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span
            class="d-inline-block font-weight-bold ml-4 dark--text text-uppercase"
        >{{ $router.currentRoute.name }}</span
        >
        <v-spacer></v-spacer>
        <v-avatar size="70">
          <v-img :src="require('@/assets/Placeholder.png')"></v-img>
        </v-avatar>
      </template>
      <template v-else>
        <a href="https://d1gital.hr">
          <v-img
              :src="require('@/assets/Placeholder.png')"
              max-width="90px"
              max-height="90px"
              alt="d1gital Logo"
          ></v-img>
        </a>
        <v-spacer></v-spacer>
        <template v-if="!$vuetify.breakpoint.smAndDown">
          <v-btn
              to="/"
              class="hover-animation font-size-16px text-uppercase dark--text ml-4 mr-12"
              :class="{
              'hover-animation-active': $router.currentRoute.name === 'index'
            }"
              text
          >
            Index
          </v-btn>
          <v-btn
              to="about"
              class="hover-animation font-size-16px text-uppercase dark--text ml-4 mr-12"
              :class="{
              'hover-animation-active': $router.currentRoute.name === 'about'
            }"
              text
          >
            About
          </v-btn>
        </template>
      </template>
    </v-app-bar>
    <v-main class="background">
      <v-container fluid fill-height class="py-0">
        <v-layout justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer
        :color="
        $vuetify.breakpoint.mdAndDown ? 'rgba(83, 100, 190, 0.05)' : '#fafafa'
      "
        class="footer px-0 pb-5"
    >
      <v-layout justify-center align-end wrap class="z-index-1">
        <v-flex xs12 sm2 mx-12 my-4 class="align-center text-center">
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
          <br/>
          <p class="text-styling grey-link-color mb-0">
            © {{ new Date().getFullYear() }} d1gital d.o.o.
          </p>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      drawer: null,
      show: false,
      color: "",
      message: "",
      items: [
        {icon: "dashboard", title: "Dashboard", route: "dashboard"},
        {icon: "book", title: "Orders", route: "orders"},
        {icon: "local_shipping", title: "Shippers", route: "shippers"},
        {icon: "people", title: "Clients", route: "clients"},
        {icon: "business_center", title: "Owner", route: "owner"},
        {icon: "money", title: "Finance", route: "finance"},
        {icon: "trending_up", title: "Analytics", route: "analytics"}
      ]
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="scss">
*:not(.v-messages__wrapper .v-text-field__details) {
  font-family: "Nunito Sans", sans-serif;
  color: rgba(0, 0, 0, 0.6);
}

.background {
  background: #f9f9f9;
}

.v-select:not(.do-not-apply-transform) {
  transform: scale(0.75);
  margin-top: 16px;
}

.text-light {
  color: #fff !important;
}

.v-list {
  padding: 0 !important;
}

.nav-ham {
  width: 40px;
  height: 45px;
  cursor: pointer;
  margin-left: -4px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.nav-ham span {
  display: block;
  position: absolute;
  height: 2px;
  left: 10px;
  width: 55%;
  border-radius: 9px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.white-background {
  margin-top: 12px;

  span {
    background: white;
  }
}

.grey-background {
  margin-top: 2px;

  span {
    background: #7b7b7b;
  }
}

.nav-ham span:nth-child(1) {
  top: 15px;
}

.nav-ham span:nth-child(2) {
  top: 20px;
}

.nav-ham span:nth-child(3) {
  top: 25px;
}

.nav-ham.open span:nth-child(1) {
  width: 42%;
}

.nav-ham.open span:nth-child(3) {
  width: 42%;
}

.footer {
  padding-bottom: 50px;
}

.footer-img {
  position: absolute !important;
  bottom: 0;
  right: 0;
  left: 0;
}

.hover-animation {
  &:before {
    opacity: 0 !important;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    background-color: #1976d2;
    transition: transform 0.3s;
  }

  &:hover {
    &:before {
      opacity: 0 !important;
    }

    &:after {
      transform: scaleX(1);
    }
  }
}

.hover-animation-active::after {
  transform: scaleX(1);
}

.active-ng-list-item {
  color: red;
}

.dark-link-text {
  color: rgba(0, 0, 0, 0.62) !important;
}
</style>
