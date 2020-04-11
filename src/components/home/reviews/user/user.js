export default {
  props: ['name', 'age', 'month', 'year'],
  computed: {
    image: function () {
      return require(`./assets/${this.name}.svg`);
    },
  },
};