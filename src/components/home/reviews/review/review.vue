<template>
  <div v-if="$props.up" class="review up">
    <div class="review__content">
      <p>"{{content}}"</p>
    </div>
  </div>
  <div v-else class="review down">
    <div class="review__content">
      <p>"{{content}}"</p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./review.scss">
</style>

<script src="./review.js">
</script>