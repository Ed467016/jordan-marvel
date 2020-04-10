<template>
  <header class="header__container">
    <div class="header__container--left">
      <div class="border-right pseudo_container">
        <dropdown-component title="eng"></dropdown-component>
      </div>
      <img src="@/assets/logo.svg" />
    </div>
    <div class="header__container--middle">
      <router-link-component :title="'home'" :to="'/home'"></router-link-component>
      <router-link-component :title="'destinations'" :to="'/destinations'"></router-link-component>
      <router-link-component :title="'stories'" :to="'/stories'"></router-link-component>
      <router-link-component :title="'about us'" :to="'/aboutus'"></router-link-component>
      <router-link-component :title="'help'" :to="'/help'"></router-link-component>
    </div>
    <div class="header__container--right">
      <div class="border-right border-left pseudo_container">
        <dropdown-component title="usd"></dropdown-component>
      </div>
      <div class="border-right pseudo_container">
        <dropdown-component title="sign up"></dropdown-component>
      </div>
      <div class="border-right pseudo_container">
        <dropdown-component title="get app"></dropdown-component>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped src="./header.scss">
</style>

<script src="./header.js">
</script>