import carousel from '@/components/home/carousel/carousel.vue';
import moodTravelling from '@/components/home/mood-travelling/mood-travelling.vue';
import search from '@/shared/components/search/search.vue';
import featuredPrograms from '@/shared/components/featured-programs/featured-programs.vue';

export default {
  components: {
    "carousel-component": carousel,
    "mood-travelling-component": moodTravelling,
    "search-component": search,
    'featured-programs-component': featuredPrograms,
  },
};