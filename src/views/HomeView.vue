<script setup>
import { slide_films } from '../assets/films.js'
</script>

<template>
  <main class="bg-[#1f1f1f] pt-[20px]">
    <div class="swiper">
      <swiper
        :slides-per-view="2.5"
        :space-between="30"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide style="padding: 0 24px" v-for="film in computedObj" :key="film.film_id">
          <div class="relative">
            <img
              class="rounded-[40px] w-[37dvw] h-[37dvw] object-cover"
              :src="film.img_path"
              alt=""
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 p-4 backdrop-filter backdrop-brightness-50 rounded-[40px]"
            >
              <div
                class="h-full w-full flex justify-end flex-col text-white font-montserrat text-[15px] gap-[6px]"
              >
                <p class="font-light uppercase opacity-90">{{ film.genre }}</p>
                <p class="font-bold text-[34px]">{{ film.name }}</p>
                <p class="opacity-90">{{ film.description }}</p>
                <div class="pt-3 flex items-center justify-center w-full">
                  <button class="py-[18px] px-[28px] bg-white rounded-[32px] text-black">
                    Купить билет
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="px-[24px] mt-[100px]">
        <div class="flex items-center gap-3 font-montserrat text-[34px] text-white">
          <p class="font-blackops text-[44px] uppercase">movie poster</p>
          <div
            class="flex items-end gap-1 specLink pt-[11px] pb-[13px] px-[16px] border-solid border-white/80 border-[1px] rounded-[34px]"
          >
            <p class="leading-7">все</p>
            <span class="material-symbols-outlined"> chevron_right </span>
          </div>
        </div>

        <div class="py-10 pt-[40px] text-white">
          <swiper
            :slides-per-view="8"
            :space-between="20"
            :slideToClickedSlide="true"
            :centeredSlidesBounds="true"
            :centeredSlides="true"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="item in 29" :key="item" v-slot="{ isActive }">
              <div
                class="flex gap-2 font-montserrat text-[24px] items-center justify-center transition-all cursor-default"
                @click="console.log(formatDateFolter(item)), (VirtualSlide = item)"
                :class="VirtualSlide == item ? 'text-black bg-white' : ''"
              >
                <p>{{ item }}</p>
                <p>{{ formatDate(item) }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="" v-for="film in slide_films">
          <div class="text-white" v-if="film.date == currentDate || film.genre == 'фэнтези'">
            {{ film.name }}
          </div>
        </div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>
  </main>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  data() {
    return {
      slide_films: slide_films,
      currentDate: null,
      limit: 5,
      VirtualSlide: 0
    }
  },
  components: {
    Swiper,
    SwiperSlide
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
  setup() {
    const onSwiper = (swiper) => {
      function sliderDecoratorUpdateSlidesSize(func) {
        return function () {
          func.apply(this, arguments)

          var min = 0
          var max = slider.virtualSize - slider.width
          _.each(slider.snapGrid, function (val, i, list) {
            if (val < min) list[i] = min
            else if (val > max) list[i] = max
            else list[i] = Math.round(val)
          })
        }
      }
    }
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>

<style scoped>
.specLink:hover {
  box-shadow: inset 1px 1px 6px #fff;
}
</style>
