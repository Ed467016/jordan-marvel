<template>
  <div class="premium-jordan-experiences">
    <div class="premium-jordan-experiences__header mb-1">
      <div class="section__left">
        <div class="section__left--divider"></div>
      </div>
      <div class="marvel-container">
        <div class="premium-jordan-experiences--middle">
          <div class="section__title">
            <p>Premium Jordan experiences</p>
          </div>
          <div class="premium-jordan-experiences--view-all">
            <link-component title="View All" to="#"></link-component>
          </div>
        </div>
      </div>
    </div>
    <div class="premium-jordan-experiences__content">
      <div class="marvel-container">
        <div class="premium-jordan-experiences__cards">
          <premium-card-component title="Helicopter tour" price="180">
            <template v-slot:background>
              <div class="first"></div>
            </template>
          </premium-card-component>
          <premium-card-component class="gold" title="Helicopter tour" price="180">
            <template v-slot:background>
              <div class="second"></div>
            </template>
          </premium-card-component>
          <premium-card-component title="Helicopter tour" price="180">
            <template v-slot:background>
              <div class="third"></div>
            </template>
          </premium-card-component>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./premium-jordan-experiencies.scss">
</style>

<script src="./premium-jordan-experiencies.js">
</script>