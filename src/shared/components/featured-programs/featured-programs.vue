<template>
  <div class="featured-programs">
    <div class="featured-programs__header mb-5">
      <div class="section__left">
        <div class="section__left--divider"></div>
      </div>
      <div class="marvel-container">
        <div class="featured-programs__header--middle">
          <div class="section__title">
            <p>Featured Programs</p>
          </div>
          <div class="featured-programs__header--view-all">
            <link-component title="View All" to="#"></link-component>
          </div>
        </div>
      </div>
    </div>
    <div class="featured-programs__content">
      <div class="section__left">
        <div class="featured-programs__content--back-btn">
          <button class="btn h-100 w-100">
            <img src="./assets/arrow-left.svg" />
          </button>
        </div>
      </div>
      <div class="marvel-container">
        <div class="featured-programs__cards">
          <book-card-component title="Weekend In Jordan" price="240">
            <template v-slot:background>
              <div class="first"></div>
            </template>
          </book-card-component>
          <book-card-component class="gold" title="Weekend In Jordan" price="240">
            <template v-slot:background>
              <div class="second"></div>
            </template>
          </book-card-component>
          <book-card-component title="Weekend In Jordan" price="240">
            <template v-slot:background>
              <div class="third"></div>
            </template>
          </book-card-component>
          <book-card-component title="Weekend In Jordan" price="240">
            <template v-slot:background>
              <div class="fourth"></div>
            </template>
          </book-card-component>
        </div>
      </div>
      <div class="section__right">
        <div class="featured-programs__content--forward-btn">
          <button class="btn h-100 w-100">
            <img src="./assets/arrow-right.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"  src="./featured-programs.scss">
</style>

<script src="./featured-programs.js">
</script>