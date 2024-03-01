<script setup>
import { slide_films } from '../..//assets/films.js'
</script>
<template>
  <div class="px-[24px]">
    <p class="text-white text-[44px] font-blackops uppercase py-[70px]">Triller film</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
      <div v-for="film in computedObj2()">
        <div class="text-white">
          <div class="relative">
            <div class="relative">
              <img
                class="rounded-[40px] w-full h-[30dvh] object-cover"
                :src="film.img_path"
                alt=""
              />
              <div
                class="absolute top-0 left-0 w-full h-full backdrop-filter backdrop-brightness-50 rounded-[40px]"
              ></div>

              <div class="absolute top-0 left-0 w-full h-full p-4 rounded-[40px]">
                <div
                  class="h-full w-full flex justify-end flex-col text-white font-montserrat text-[15px] gap-[6px]"
                >
                  <div class="pt-3 pb-6 flex items-center justify-end w-full">
                    <button class="py-[38px] px-[28px] bg-white rounded-[32px] text-black">
                      Купить билет
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p class="font-bold text-[24px] px-[15px]">{{ film.name }}</p>
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
      slide_films: slide_films
    }
  },
  components: {},
  computed: {
    computedObj() {
      return this.limit ? this.slide_films.slice(0, this.limit) : this.slide_films
    }
  },
  methods: {
    computedObj2() {
      function findFilmsByDate(films, targetDate) {
        return films.filter((film) => film.genre == 'triller')
      }

      return findFilmsByDate(this.slide_films)
    }
  }
}
</script>
<style></style>
