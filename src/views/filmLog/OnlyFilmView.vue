<script setup>
import { slide_films } from '../../assets/films.js'
import { cinema } from '../../assets/films.js'
import { FreeMode } from 'swiper/modules'
import ButtonByTicket from '../../components/ButtonByTicket.vue'

import 'swiper/css/free-mode'
</script>

<template>
  <div class="">
    <div class="w-full flex flex-col md:flex-row md:h-[70dvh] pt-[50px] px-[24px]">
      <div class="md:w-1/3 relative">
        <img
          class="relative rounded-[40px] w-full h-full object-cover object-top z-0"
          :src="slide_films[id - 1].img_path"
          alt=""
        />
        <div
          class="absolute z-20 top-0 bottom-0 right-0 left-0 flex justify-end flex-col text-white font-montserrat text-[15px] gap-[6px] p-4"
        >
          <p class="font-light uppercase opacity-90">{{ slide_films[id - 1].genre }}</p>
          <p class="font-bold text-[34px]">{{ slide_films[id - 1].name }}</p>
          <p class="opacity-90">{{ slide_films[id - 1].description }}</p>
        </div>
        <div
          class="absolute top-0 bottom-0 right-0 left-0 z-10 backdrop-filter md:backdrop-blur-[100px] backdrop-brightness-50 rounded-[40px]"
        ></div>
      </div>
      <div class="hidden md:block relative w-2/3">
        <img
          class="rounded-[40px] w-full h-full object-cover object-center"
          :src="slide_films[id - 1].img_path"
          alt=""
        />
        <div
          class="absolute top-0 left-0 right-0 bottom-0 p-4 backdrop-filter backdrop-brightness-50 rounded-[40px]"
        ></div>
      </div>
    </div>
    <div class="w-full px-[24px] md:px-[80px] pt-[50px]">
      <div class="inner_s rounded-[40px] flex flex-col p-[32px] gap-[60px]">
        <div
          class="flex justify-between flex-col md:flex-row gap-[60px] text-white font-montserrat"
          v-for="cinemI in computedObj2()"
          :key="cinemI.id"
        >
          <div class="flex items-start justify-start gap-[20px]">
            <div
              class="rounded-full w-[88px] h-[88px]"
              :style="'background-color: ' + cinemI.color"
            ></div>
            <div class="flex flex-col items-start justify-center gap-[10px]">
              <p class="text-[21px]">{{ cinemI.name }}</p>
              <p class="text-[13px] text-white/50">{{ cinemI.place }}</p>
              <div class="flex gap-[20px]">
                <div
                  class="border-solid border-[1px] border-white/50 flex items-center justify-center p-1 rounded-full"
                >
                  <span class="material-symbols-outlined"> favorite </span>
                </div>
                <div
                  class="border-solid border-[1px] flex items-center justify-center p-1 rounded-[34px] min-w-[40px]"
                  :class="cinemI.stars > 8 ? 'border-[#31be00]' : 'border-[#be1900]'"
                >
                  {{ cinemI.stars }}
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <ButtonByTicket :path="id - 1" :cinema="cinemI.id"></ButtonByTicket>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide_films: slide_films,
      cinema: cinema,
      id: this.$route.params.id
    }
  },

  components: {
    ButtonByTicket
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id
    }
  },
  methods: {
    computedObj2() {
      const film = this.slide_films[this.id - 1]

      function filterById(array, ids) {
        return array.filter((obj) => ids.includes(obj.id))
      }

      return filterById(cinema, film.cinema)
    }
  }
}
</script>

<style>
.inner_s {
  box-shadow: inset 1px 1px 10px #fff;
}
</style>
