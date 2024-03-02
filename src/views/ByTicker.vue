<script setup></script>
<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      filmid: Number,
      cinemaid: Number,
      pathinfo: this.$route.params
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
