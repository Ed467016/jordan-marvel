<template>
  <div class="search-container">
    <div class="marvel-container row">
      <div class="search-container__where flex col-sm-4">
        <div class="search-container__where-left">
          <div class="search-container__where-title">
            WHERE
          </div>
          <div class="search-container__where-dropdown">
            Anywhere in Jordan
            <!-- Change with dropdown-->
          </div>
        </div>
        <div class="search-container__where-right">
          <router-link to="#" class="link__arrow">
            <img src="./assets/arrow.svg" />
          </router-link>
        </div>
      </div>
      <div class="search-container__date-container flex col-sm-4">
        <div class="search-container__date">
          <div class="search-container__title">
            START DATE
          </div>
          Thu, Feb 20
        </div>
        <div class="search-container__date">
          <div class="search-container__title">
            END DATE
          </div>
          Fri, Feb 28
        </div>
      </div>
      <div class="search-container__traveler flex col-sm-3">
        <div class="search-container__title">
          TRAVELLERS
        </div>
        <div class="search-container__content-text">
          3 travellers
        </div>
      </div>
      <div class="search-container__button flex col-sm">
        <img src="./assets/search.svg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./search.scss"></style>

<script src="./search.js"></script>
