module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/shared/scss/_variables.scss";`
      }
    }
  }
};