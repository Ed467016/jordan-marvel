<template>
  <div class="home">
    <div>
      <div class="first-section">
        <carousel-component class="carousel"></carousel-component>
        <search-component class="search"></search-component>
      </div>
    </div>
    <div class="second-section">
      <div class="section">
        <mood-travelling-component></mood-travelling-component>
      </div>
    </div>
    <div class="section">
      <featured-programs-component></featured-programs-component>
    </div>  
    <div class="section">
      <premium-jordan-experiencies-component></premium-jordan-experiencies-component>
    </div>
    <div class="section">
      <reviews-component></reviews-component>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style lang="scss" src="./home.scss"></style>
