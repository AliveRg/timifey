<script setup>
import { slide_films } from '../../assets/films.js'
import { RouterLink, RouterView } from 'vue-router'
import ButtonByTicket from '../../components/ButtonByTicket.vue'
</script>
<template>
  <div class="px-[24px]">
    <p class="text-white text-[44px] font-blackops uppercase py-[70px]">{{ id }} film</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
      <router-link
        :to="{ name: 'OnlyFilm', params: { id: film.film_id } }"
        v-for="film in computedObj2(id)"
      >
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
                  <ButtonByTicket :path="film.film_id"></ButtonByTicket>
                </div>
              </div>
            </div>
            <p class="font-bold text-[24px] px-[15px]">{{ film.name }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide_films: slide_films,
      id: this.$route.params.id
    }
  },
  components: {
    ButtonByTicket
  },
  computed: {
    computedObj() {
      return this.limit ? this.slide_films.slice(0, this.limit) : this.slide_films
    }
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id
    }
  },
  methods: {
    computedObj2(id) {
      function findFilmsByDate(films, targetDate) {
        if (id == 'all') {
          return films
        }
        return films.filter((film) => film.genre == id)
      }

      return findFilmsByDate(this.slide_films)
    }
  }
}
</script>
<style></style>
