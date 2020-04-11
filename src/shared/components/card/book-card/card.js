import link from '@/shared/components/link/button/link.vue';

export default {
  props: ['title', 'price'],
  components: {
    'link-component': link,
  }
};
