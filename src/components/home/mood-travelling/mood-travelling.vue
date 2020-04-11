<template>
  <div class="mood-travelling">
    <div class="section__left">
      <div class="section__left--divider"></div>
    </div>

    <div class="marvel-container">
      <div class="mood-travelling__content">
        <div class="row no-gutters">
          <div class="col-md-8 col-12">
            <div class="section__title">
              <p>What's your mood?</p>
            </div>
            <div class="mood-travelling__content">
              <div class="row no-gutters">
                <div class="col">
                  <mood-component></mood-component>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="section__title">
              <p>Travelling with us</p>
            </div>
            <div class="mood-travelling__content">
              <div class="row no-gutters h-100">
                <div class="col h-100">
                  <travelling-component></travelling-component>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./mood-travelling.scss">
</style>

<script src="./mood-travelling.js">
</script>