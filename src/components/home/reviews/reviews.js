import link from '@/shared/components/link/button/link.vue';
import user from './user/user.vue';
import review from './review/review.vue';

export default {
  components: {
    'link-component': link,
    'user-component': user,
    'review-component': review,
  },
  data() {
    return {
      reviewContent: 
        `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s,`,
    }
  }
};