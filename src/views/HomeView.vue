<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import { slide_films } from '../assets/films.js'
import { RouterLink, RouterView } from 'vue-router'
import { FreeMode } from 'swiper/modules'
import ButtonByTicket from '../components/ButtonByTicket.vue'
import 'swiper/css/free-mode'
</script>

<template>
  <main class="bg-[#1f1f1f] pt-[20px]">
    <div class="swiper">
      <swiper
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },

          640: {
            slidesPerView: 1.5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1440: {
            slidesPerView: 2.5,
            spaceBetween: 40
          }
        }"
        :space-between="30"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          style="padding: 0 24px"
          class="group"
          v-for="film in computedObj"
          :key="film.film_id"
        >
          <router-link :to="{ name: 'OnlyFilm', params: { id: film.film_id } }" class="relative">
            <img
              class="relative rounded-[40px] max-h-[90dvw] sm:max-h-[50dvw] md:max-h-[40dvw] lg:max-h-[30dvw] w-full h-full object-cover object-top z-0"
              :src="film.img_path"
              alt=""
            />
            <div
              class="absolute z-20 top-0 bottom-0 right-0 left-0 flex justify-end flex-col text-white font-montserrat text-[15px] gap-[6px] p-4"
            >
              <p class="font-light uppercase opacity-90">{{ film.genre }}</p>
              <p class="font-bold text-[34px]">{{ film.name }}</p>
              <p class="opacity-90">{{ film.description }}</p>
              <ButtonByTicket :path="film.film_id"></ButtonByTicket>
            </div>
            <div
              class="absolute top-0 bottom-0 right-0 left-0 z-10 backdrop-filter backdrop-brightness-50 rounded-[40px]"
            ></div>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="px-[24px] mt-[100px]">
        <div class="flex items-center gap-3 font-montserrat text-[34px] text-white">
          <p class="font-blackops text-[44px] uppercase">movie poster</p>
          <router-link
            :to="{ name: 'GenreView', params: { id: 'all' } }"
            class="flex items-end gap-1 specLink pt-[11px] pb-[13px] px-[16px] border-solid border-white/80 border-[1px] rounded-[34px]"
          >
            <p class="leading-7">все</p>
            <span class="material-symbols-outlined"> chevron_right </span>
          </router-link>
        </div>

        <div class="py-10 pt-[40px] text-white">
          <swiper
            :breakpoints="{
              320: {
                slidesPerView: 3,
                spaceBetween: 20
              },

              640: {
                slidesPerView: 4,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40
              },
              1440: {
                slidesPerView: 8,
                spaceBetween: 40
              }
            }"
            :space-between="20"
            :slideToClickedSlide="true"
            :centeredSlidesBounds="true"
            :centeredSlides="true"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="item in 29" :key="item" v-slot="{ isActive }">
              <div
                class="flex gap-8 font-montserrat text-[24px] items-center justify-center transition-all cursor-default"
                @click="formatDateFolter(item), (VirtualSlide = item)"
                :class="VirtualSlide == item ? 'text-black bg-white' : ''"
              >
                <p>{{ item }}</p>
                <p>{{ formatDate(item) }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="flex flex-col gap-10">
          <div class="" v-for="item in genreCollection" :key="item">
            <p class="text-white text-[44px] font-blackops uppercase">{{ item.name }}</p>
            <swiper
              :breakpoints="{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },

                640: {
                  slidesPerView: 1.75,
                  spaceBetween: 40
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40
                },
                1440: {
                  slidesPerView: 2.5,
                  spaceBetween: 40
                }
              }"
              :mousewheel="true"
              :space-between="30"
              :freeMode="true"
              :modules="modules"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide class="group" v-for="film in computedObj2(item.name)">
                <router-link
                  :to="{ name: 'OnlyFilm', params: { id: film.film_id } }"
                  class="text-white"
                >
                  <div class="relative">
                    <div class="relative">
                      <img
                        class="rounded-[40px] w-full h-[60dvh] object-cover"
                        :src="film.img_path"
                        alt=""
                      />
                      <div
                        class="absolute top-0 left-0 w-full h-full backdrop-filter group-hover:backdrop-brightness-[70%] backdrop-brightness-50 transition-all rounded-[40px]"
                      ></div>

                      <div class="absolute top-0 left-0 w-full h-full p-4 ounded-[40px]">
                        <div
                          class="h-full w-full flex justify-end flex-col text-white font-montserrat text-[15px] gap-[6px]"
                        >
                          <ButtonByTicket :path="film.film_id"></ButtonByTicket>
                        </div>
                      </div>
                    </div>
                    <p class="font-bold text-[24px] px-[15px]">{{ film.name }}</p>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <a href="https://freekassa.ru" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.freekassa.ru/banners/small-dark-2.png"
        title="Прием платежей на сайте"
      />
    </a>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modules: [FreeMode],
      slide_films: slide_films,
      currentDate: '01012024',
      limit: 5,
      limit2: 4,
      VirtualSlide: 1,
      genreCollection: [
        {
          name: 'premiera'
        },
        {
          name: 'recomend'
        },
        {
          name: 'triller'
        },
        {
          name: 'camedy'
        },
        {
          name: 'fantasy'
        },
        {
          name: 'multfilm'
        },
        {
          name: 'butle'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ButtonByTicket
  },

  computed: {
    computedObj() {
      return this.limit ? this.slide_films.slice(0, this.limit) : this.slide_films
    }
  },
  methods: {
    formatDate(day) {
      // Создаем дату на основе значения day
      const date = new Date(2024, 1, day)
      // Получаем форматированную дату с днем недели
      const weekday = date.toLocaleDateString('en-RU', { weekday: 'short' })
      return ` ${weekday}`
    },
    computedObj2(genre) {
      function findFilmsByDate(films, targetDate) {
        return films.filter(
          (film) => someCustomCheckFunction(film.date, targetDate) && film.genre == genre
        )
      }
      function someCustomCheckFunction(date, targetDate) {
        return date.some((date) => date == targetDate)
        return false
      }
      return this.limit2
        ? findFilmsByDate(this.slide_films, this.currentDate).slice(0, this.limit2)
        : findFilmsByDate(this.slide_films, this.currentDate)
    },
    formatDateFolter(day) {
      // Создаем дату на основе значения day
      const date = new Date(2024, 1, day)
      // Получаем компоненты даты (день, месяц, год)
      const dayOfMonth = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      // Форматируем дату в формат "DDMMYYYY" и возвращаем ее
      this.currentDate = `${dayOfMonth.toString().padStart(2, '0')}${month.toString().padStart(2, '0')}${year}`
      return `${dayOfMonth.toString().padStart(2, '0')}${month.toString().padStart(2, '0')}${year}`
    }
  },
  setup() {}
}
</script>

<style scoped>
.specLink:hover {
  box-shadow: inset 1px 1px 6px #fff;
}
</style>
