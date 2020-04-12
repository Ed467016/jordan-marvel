<template>
  <div class="button-link link btn">
    <router-link class="link__title" :to="$props.to">{{$props.title}}</router-link>
    <router-link class="link__arrow" :to="$props.to">
      <img src="../assets/arrow-right-black.svg" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="./link.scss">
</style>

<script src="./link.js">
</script>