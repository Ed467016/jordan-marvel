<template>
  <div>
    <b-carousel
      class="carousel"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide>
        <template v-slot:img>
          <div class="slide-container">
            <div class="marvel-container">
              <div class="slide-container__left">
                <div class="slide-container__header">
                  Book your authentic trip,<br />
                  get the unique experience.
                </div>
                <div class="slide-container__footer">
                  <router-link class="slide-container__link" to="#">
                    <img src="./assets/plane.svg" /> BOOK A TRIP
                  </router-link>
                  <router-link class="slide-container__link" to="#">
                    <img src="./assets/car.svg" /> RENT A CAR
                  </router-link>
                </div>
              </div>
              <div class="slide-container__right">
                <div class="slide-container__map">
                  <img src="./assets/map.svg" />
                  <div class="slide-container__map-text">
                    MOST POPULAR
                    <div class="slide-container__map-text-place">
                      AL - Khazneh, Petra
                    </div>
                    <router-link class="slide-container__link" to="#">
                      DISCOVER DESTINATION
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="d-block img-fluid w-100 slide-container__img"
              width="1440"
              height="660"
              src="./assets/header-image.svg"
              alt="image slot"
            />
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <div class="slide-container">
            <div class="marvel-container">
              <div class="slide-container__left">
                <div class="slide-container__header">
                  Book your authentic trip,<br />
                  get the unique experience.
                </div>
                <div class="slide-container__footer">
                  <router-link class="slide-container__link" to="#">
                    <img src="./assets/plane.svg" /> BOOK A TRIP
                  </router-link>
                  <router-link class="slide-container__link" to="#">
                    <img src="./assets/car.svg" /> RENT A CAR
                  </router-link>
                </div>
              </div>
              <div class="slide-container__right">
                <div class="slide-container__map">
                  <img src="./assets/map.svg" />
                  <div class="slide-container__map-text">
                    MOST POPULAR
                    <div class="slide-container__map-text-place">
                      AL - Khazneh, Petra
                    </div>
                    <router-link class="slide-container__link" to="#">
                      DISCOVER DESTINATION
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="d-block img-fluid w-100 slide-container__img"
              width="1440"
              height="660"
              src="./assets/header-image2.svg"
              alt="image slot"
            />
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style lang="scss" src="./carousel.scss"></style>

<script src="./carousel.js"></script>
