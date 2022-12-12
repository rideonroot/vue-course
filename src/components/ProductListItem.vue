<script>
import { defineProps, ref, toRefs } from "vue";
import { numberToPrice } from "@/libs/utils";
import { ROUTE_PRODUCT } from "@/router/routeNames";
</script>

<script setup>
const props = defineProps({
  id: Number,
  image: String,
  title: String,
  price: Number,
  colors: Array,
});

const { title, image, price, colors, id } = toRefs(props);
const activeColor = ref(colors.value[0].id);
</script>

<template>
  <div>
    <router-link
      :to="{ name: ROUTE_PRODUCT, params: { id } }"
      class="catalog__pic"
    >
      <img :src="image" :alt="title" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#">{{ title }}</a>
    </h3>

    <span class="catalog__price"> {{ numberToPrice(price) }} ₽ </span>

    <ul class="colors colors--black">
      <li v-for="color in colors" :key="color.id" class="colors__item">
        <label class="colors__label">
          <input
            v-model="activeColor"
            :value="color.id"
            type="radio"
            class="colors__radio sr-only"
          />
          <span
            class="colors__value"
            :style="`background-color: ${color.code}`"
          />
        </label>
      </li>
    </ul>
  </div>
</template>
