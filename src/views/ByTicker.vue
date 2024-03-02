<script setup>
import { slide_films } from '../assets/films.js'
import { cinema } from '../assets/films.js'
</script>
<template>
  <div class="max-w-md mx-auto">
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="film">
          Название фильма
        </label>
        <input
          disabled
          v-model="filmName.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="film"
          type="text"
          placeholder="Название фильма"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="cinema">
          Название кинотеатра
        </label>
        <input
          v-if="cinemaName"
          disabled
          v-model="cinemaName.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cinema"
          type="text"
          placeholder="Название кинотеатра"
        />

        <select v-else id="cinema" v-model="selectedCinemaIndex" required>
          <option v-for="(name, index) in computedObj2()" :value="name.id">
            {{ name.name }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="date"> Дата сеанса </label>
        <select id="date" v-model="selectedDateIndex" required>
          <option v-for="(date, index) in filmName.date" :value="date">
            {{ date }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="time"> Время сеанса </label>
        <input
          v-model="formData.time"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="time"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Имя и фамилия </label>
        <input
          required
          v-model="formData.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Введите имя и фамилию"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone"> Телефон </label>
        <input
          required
          v-model="formData.phone"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          placeholder="Введите номер телефона"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Почта </label>
        <input
          required
          v-model="formData.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Введите адрес электронной почты"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide_films: slide_films,
      cinema: cinema,
      cinemaName: '',
      filmName: '',
      filmDate: '',
      selectedDateIndex: null,
      selectedCinemaIndex: null,
      formData: {
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
      },
      pathinfo: this.$route.params.id
    }
  },
  created() {
    function parseNumber(input, film) {
      input = String(input) // Преобразуем входное значение в строку
      const parts = input.split('-').map((part) => part.trim())

      if (parts.length === 2 && !isNaN(parseInt(parts[0])) && !isNaN(parseInt(parts[1]))) {
        if (film === true) {
          return parseInt(parts[0])
        } else if (film === false) {
          return parseInt(parts[1])
        }
      } else if (parts.length === 1 && !isNaN(parseInt(parts[0]))) {
        return parseInt(parts[0])
      }

      return null
    }

    this.filmName = this.slide_films[parseNumber(this.pathinfo, true)]
    this.cinemaName = this.cinema[parseNumber(this.pathinfo, false)]
  },
  watch: {
    $route(to, from) {
      this.pathinfo = this.$route.params.id
    }
  },
  methods: {
    submitForm() {
      console.log('Отправка формы с данными:', this.formData)
      // Здесь можно добавить логику для отправки данных на сервер или их обработки
    },

    computedObj2() {
      const film = this.slide_films[this.id - 1]
      console.log(film)
      function filterById(array, ids) {
        return array.filter((obj) => ids.includes(obj.id))
      }

      return filterById(this.cinema, this.filmName.cinema)
    }
  }
}
</script>
