<template>
  <div class="default-card card">
    <slot class="background" name="background"></slot>
    <div class="card__inner">
        <div class="card__inner__content">
          <div class="card__inner__content__title">
            <p>{{$props.title}}</p>
          </div>
          <div class="card__inner__content__link">
            <link-component title="86 DESTINATIONS" to="#"></link-component>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./card.scss">
</style>

<script src="./card.js">
</script>