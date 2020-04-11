<template>
  <div class="default-link link">
    <div class="link__divider"></div>
    <router-link class="link__title" :to="$props.to">{{$props.title}}</router-link>
    <router-link :to="$props.to">
      <img src="../assets/arrow-right.svg" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="./link.scss">
</style>

<script src="./link.js">
</script>