<template>
  <div class="router-link__container">
    <router-link :to="$props.to" class="router-link__container__link">
      <span>{{$props.title}}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="./router-link.scss">
</style>

<script src="./router-link.js">
</script>