<template>
  <div class="mood">
    <div class="mood_cards">
      <card-component title="Getaway with friends">
        <template v-slot:background>
          <div class="first">
          </div>
        </template>
      </card-component>
      <card-component title="Getaway with friends">
        <template v-slot:background>
          <div class="second">
          </div>
        </template>
      </card-component>
    </div>

    <div class="mood_cards">
      <card-component title="Getaway with friends">
        <template v-slot:background>
          <div class="third">
          </div>
        </template>
      </card-component>
      <card-component title="Getaway with friends">
        <template v-slot:background>
          <div class="fourth">
          </div>
        </template>
      </card-component>
    </div>
  </div>
</template>

<style lang="scss" src="./mood.scss">
</style>

<script src="./mood.js">
</script>