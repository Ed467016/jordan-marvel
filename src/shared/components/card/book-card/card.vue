<template>
  <div class="book-card card">
    <div class="card__title">
      <p>{{$props.title}}</p>
    </div>
    <div class="card__content">
      <div class="card__content__background">
        <slot class="background" name="background"></slot>
      </div>
      <div class="card__content__inner">
        <div class="to--end">
          <div class="card__content__inner__starting-from">
            <span class="starting--from light">starting from</span>
            <div class="card__content__inner__starting-from__price">
              <p>${{$props.price}}</p>
              <span class="light">,00</span>
            </div>
          </div>
          <div class="card__content__inner__book-now">
            <link-component title="Book Now" to="#"></link-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./card.scss">
</style>

<script src="./card.js">
</script>