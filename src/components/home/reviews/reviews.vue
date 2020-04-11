<template>
  <div class="reviews">
    <div class="reviews__header mb-1">
      <div class="section__left">
        <div class="section__left--divider"></div>
      </div>
      <div class="marvel-container">
        <div class="reviews--middle">
          <div class="section__title">
            <p>Why travellers use Jordan Marvels</p>
          </div>
          <div class="reviews--view-all">
            <link-component title="Add Your Review" to="#"></link-component>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews__content mb-2">
      <div class="marvel-container">
        <div class="reviews__content__review">
          <div class="reviews__content__review__text">
            <div v-for="i in 5" :key="i">
              <review-component :content="reviewContent" :up="true"></review-component>
            </div>
          </div>
          <div class="reviews__content__review__users">
            <div v-for="i in 10" :key="i">
              <user-component v-if="i % 2 === 1" name="Laura" age="27" month="January" year="2020"></user-component>
              <user-component v-else name="Rene" age="39" month="October" year="2019"></user-component>
            </div>
          </div>
          <div class="reviews__content__review__text below">
            <div v-for="i in 5" :key="i">
              <review-component :content="reviewContent"></review-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./reviews.scss">
</style>

<script src="./reviews.js">
</script>