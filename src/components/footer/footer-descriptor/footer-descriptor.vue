<template>
  <div class="footer-descriptor">
    <div class="marvel-container">
      <div class="row no-gutters">
        <div class="col-md no-gutters">
          <p class="footer-descriptor__title">Destination</p>
          <div class="footer-descriptor__links">
            <router-link class="footer-descriptor__link" to="#">Petra</router-link>
            <router-link class="footer-descriptor__link" to="#">Dead Sea</router-link>
            <router-link class="footer-descriptor__link" to="#">Amman</router-link>
            <router-link class="footer-descriptor__link" to="#">Magic Bedouin Star</router-link>
          </div>
        </div>
        <div class="col-md no-gutters">
          <p class="footer-descriptor__title">About Us</p>
          <div class="footer-descriptor__links">
            <router-link class="footer-descriptor__link" to="#">Our agenda</router-link>
            <router-link class="footer-descriptor__link" to="#">Benefits</router-link>
            <router-link class="footer-descriptor__link" to="#">Contact</router-link>
          </div>
        </div>
        <div class="col-md no-gutters">
          <p class="footer-descriptor__title">Help</p>
          <div class="footer-descriptor__links">
            <router-link class="footer-descriptor__link" to="#">Payments</router-link>
            <router-link class="footer-descriptor__link" to="#">Frequently Asked Questions</router-link>
            <router-link class="footer-descriptor__link" to="#">Support Service</router-link>
            <router-link class="footer-descriptor__link" to="#">Guarantee</router-link>
          </div>
        </div>
        <div class="col-md no-gutters">
          <div class="footer-descriptor__icon">
            <img src="./assets/icon.svg">
          </div>
          <div class="footer-descriptor__payment--icons">
            <img class="footer-descriptor__payment--icons__icon" src="./assets/wallet.svg">
            <img class="footer-descriptor__payment--icons__icon" src="./assets/visa.svg">
            <img class="footer-descriptor__payment--icons__icon" src="./assets/mastercard.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./footer-descriptor.scss">
</style>

<script src="./footer-descriptor.js">
</script>