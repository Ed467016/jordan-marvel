import carousel from '@/components/home/carousel/carousel.vue';
import moodTravelling from '@/components/home/mood-travelling/mood-travelling.vue';
import search from '@/shared/components/search/search.vue';
import featuredPrograms from '@/shared/components/featured-programs/featured-programs.vue';
import premiumJordanExperiencies from '@/components/home/premium-jordan-experiencies/premium-jordan-experiencies.vue';
import reviews from '@/components/home/reviews/reviews.vue';

export default {
  components: {
    "carousel-component": carousel,
    "mood-travelling-component": moodTravelling,
    "search-component": search,
    'featured-programs-component': featuredPrograms,
    'premium-jordan-experiencies-component': premiumJordanExperiencies,
    'reviews-component': reviews,
  },
};