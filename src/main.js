import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueAnimate from 'vue-animate-scroll';

Vue.use(VueAnimate);
Vue.config.productionTip = false;

const fixIdScrolling = {
  watch: {
    $route() {
      const currentRoute = this.$router.currentRoute;
      const idToScrollTo = currentRoute.hash;
      this.$nextTick(() => {
        if (idToScrollTo && document.querySelector(idToScrollTo)) {
          const yOffset = -75;
          const element = document.getElementById(currentRoute.hash.substring(1));
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y });
        }
      });
    },
  },
};

new Vue({
  mixins: [fixIdScrolling],
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');