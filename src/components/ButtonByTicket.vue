<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="pt-3 flex items-center justify-start w-[170px]">
    <RouterLink
      :to="{ name: 'Bytickets', params: { id: createPath } }"
      class="py-[18px] px-[28px] bg-white rounded-[32px] text-black w-fit"
    >
      Купить билет
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullPath: String,
      item: 5
    }
  },
  computed: {
    createPath() {
      function Create(firstChunk, seconChunk) {
        if (seconChunk) {
          return firstChunk + '-' + seconChunk
        }
        return firstChunk
      }

      return Create(this.path, this.cinema)
    }
  },
  props: {
    path: Number,
    cinema: Number
  }
}
</script>

<style></style>
