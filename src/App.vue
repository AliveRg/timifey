<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<template>
  <header class="bg-[#1f1f1f] py-[4px] px-[24px] md:h-[102px] z-10 relative">
    <div class="flex items-start gap-6">
      <div class="md:h-[108px] w-1/3 flex items-center gap-2 flex-col md:flex-row">
        <img class="md:h-full" src="/jacp.webp" alt="" />
        <div class="flex flex-col gap-1 items-start justify-center">
          <p class="font-blackops text-white text-[32px]">afisha</p>
          <span class="font-blackops text-white text-[13px]">kino sweet</span>
        </div>
      </div>
      <div class="w-2/3" @mouseleave="viewNavigate = false">
        <div class="h-[26px]"></div>
        <nav
          class="bg-[#1f1f1f] text-white w-full text-[13px] flex items-start justify-end md:justify-start gap-[10px] flex-wrap overflow-hidden px-3 pb-3 font-montserrat uppercase rounded-md"
          :class="
            viewNavigate
              ? 'h-auto shadow-md border-t-0 border-solid border-white/20 border-[1px]'
              : 'h-[52px]'
          "
        >
          <div
            class="specLink py-[13px] px-[16px] border-solid border-white/80 border-[1px] rounded-[34px] w-[52px] flex items-center justify-center"
            @mouseenter="viewNavigate = true"
          >
            ...
          </div>
          <RouterLink
            class="py-[13px] px-[16px] border-solid border-white/80 border-[1px] rounded-[34px]"
            to="/"
          >
            главная
          </RouterLink>
          <RouterLink
            v-for="route in routes"
            :key="route.id"
            class="py-[13px] px-[16px] border-solid border-white/80 border-[1px] rounded-[34px]"
            :to="{ name: route.name, params: { id: route.params } }"
            >{{ route.content }}</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>

  <div class="min-h-screen bg-[#1f1f1f] z-0 relative">
    <RouterView />
  </div>
</template>

<script>
// Import Swiper styles
export default {
  data() {
    return {
      viewNavigate: false,
      routes: [
        {
          id: 1,
          content: 'кинопремьеры',
          params: 'premiera',
          name: 'GenreView'
        },
        {
          id: 2,
          content: 'рекомендации',
          params: 'recomend',
          name: 'GenreView'
        },
        {
          id: 3,
          content: 'ужасы',
          params: 'triller',
          name: 'GenreView'
        },
        {
          id: 4,
          content: 'комедии',
          params: 'camedy',
          name: 'GenreView'
        },
        {
          id: 5,
          content: 'фантастика',
          params: 'fantasy',
          name: 'GenreView'
        },
        {
          id: 6,
          content: 'мультфильм',
          params: 'multfilm',
          name: 'GenreView'
        },
        {
          id: 7,
          content: 'боевик',
          params: 'butle',
          name: 'GenreView'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>

<style scoped>
nav a.router-link-exact-active,
.specLink:hover {
  box-shadow: inset 1px 1px 6px #fff;
}
</style>
