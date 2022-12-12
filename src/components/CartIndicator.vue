<script>
import { ROUTE_CART } from "@/router/routeNames";
import { useCartStore } from "@/store/cart";
</script>

<script setup>
const store = useCartStore();
</script>

<template>
  <router-link
    :to="{ name: ROUTE_CART }"
    class="header__cart"
    aria-label="Корзина с товарами"
  >
    <svg width="30" height="21" fill="currentColor">
      <use xlink:href="#icon-cart"></use>
    </svg>
    <span
      v-show="store.itemsCount"
      class="header__count"
      aria-label="Количество товаров"
    >
      {{ store.itemsCount }}
    </span>
  </router-link>
</template>
