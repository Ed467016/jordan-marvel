import Vue from "vue";
import {
  BButton,
  CarouselPlugin,
  BootstrapVue,
} from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(CarouselPlugin)

const components = {
  'b-button': BButton,
}

export default components;
