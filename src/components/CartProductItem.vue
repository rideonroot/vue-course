<script>
import { computed, toRefs } from "vue";
import { ROUTE_PRODUCT } from "@/router/routeNames";
import { numberToPrice } from "@/libs/utils";
</script>

<script setup>
const emit = defineEmits(["updateQuantity", "removeItem"]);
const props = defineProps({
  id: [Number || String],
  quantity: Number,
  image: String,
  price: Number,
  title: String,
});

const { id, quantity, image, price, title } = toRefs(props);
const totalPrice = computed(() => quantity.value * price.value);

const updateAmount = (value) => {
  if (!value) return emit("removeItem", id.value);

  emit("updateQuantity", { productId: id.value, quantity: value });
};
</script>

<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="image" width="120" height="120" :alt="title" />
    </div>
    <router-link
      :to="{ name: ROUTE_PRODUCT, params: { id } }"
      class="product__title"
    >
      {{ title }}
    </router-link>
    <span class="product__code"> Артикул: {{ id }} </span>

    <div class="product__counter form__counter">
      <button
        @click="updateAmount(quantity - 1)"
        type="button"
        aria-label="Убрать один товар"
      >
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input
        type="text"
        :value="quantity"
        @blur="({ target }) => updateAmount(+target.value)"
        name="count"
      />

      <button
        @click="updateAmount(quantity + 1)"
        type="button"
        aria-label="Добавить один товар"
      >
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price"> {{ numberToPrice(totalPrice) }} ₽ </b>

    <button
      @click="emit('removeItem', id)"
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>
