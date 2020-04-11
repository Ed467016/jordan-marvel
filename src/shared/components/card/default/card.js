import link from '@/shared/components/link/default/link.vue';

export default {
  props: ['title', 'linkText', 'linkTo'],
  components: {
    'link-component': link,
  }
};
