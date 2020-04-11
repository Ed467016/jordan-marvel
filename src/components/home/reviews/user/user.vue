<template>
  <div class="user">
    <div class="user__image">
      <img :src="image">
    </div>

    <div class="user__info">
      <p class="user__info__name--info">
        {{$props.name}} ({{$props.age}})
      </p>
      <p class="user__info__date--info">
        {{$props.month}}, {{$props.year}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./user.scss">
</style>

<script src="./user.js">
</script>