<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#1f1f1f] py-[4px] px-[24px] h-[102px] z-10 relative">
    <div class="flex items-start gap-6">
      <div class="h-[108px] w-1/3 flex items-center gap-2">
        <img class="h-full" src="../jacp.webp" alt="" />
        <div class="flex flex-col gap-1 items-start justify-center">
          <p class="font-blackops text-white text-[32px]">afisha</p>
          <span class="font-blackops text-white text-[13px]">kino sweet</span>
        </div>
      </div>
      <div class="w-2/3" @mouseleave="viewNavigate = false">
        <div class="h-[26px]"></div>
        <nav
          class="bg-[#1f1f1f] text-white w-full text-[13px] flex items-start justify-between gap-[10px] flex-wrap overflow-hidden px-3 pb-3 font-montserrat uppercase rounded-md"
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
            v-for="route in routes"
            :key="route.id"
            class="py-[13px] px-[16px] border-solid border-white/80 border-[1px] rounded-[34px]"
            :to="{ name: route.name }"
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
export default {
  data() {
    return {
      viewNavigate: false,
      routes: [
        {
          id: 1,
          content: 'главная',
          name: 'Home'
        },
        {
          id: 2,
          content: 'кинопремьеры',
          name: 'Premiera'
        },
        {
          id: 3,
          content: 'рекомендации',
          name: 'Recomend'
        },
        {
          id: 4,
          content: 'ужасы',
          name: 'Triller'
        },
        {
          id: 5,
          content: 'комедии',
          name: 'Camedy'
        },
        {
          id: 6,
          content: 'фантастика',
          name: 'Fantasy'
        },
        {
          id: 7,
          content: 'мультфильм',
          name: 'Multfilm'
        },
        {
          id: 8,
          content: 'фантастика',
          name: 'Fantasy'
        },
        {
          id: 9,
          content: 'фантастика',
          name: 'Fantasy'
        },
        {
          id: 10,
          content: 'фантастика',
          name: 'Fantasy'
        }
      ]
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
