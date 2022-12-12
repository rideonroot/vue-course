<script setup>
import { onMounted } from "vue-demi";
import { useUserStore } from "@/store/user";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useCartStore } from "./store/cart";

const userStore = useUserStore();
const cartStore = useCartStore();

const initApp = async () => {
  await userStore.getAccessKey();
  await cartStore.getCartProducts();
};

onMounted(initApp);
</script>

<template>
  <the-header />

  <router-view />

  <the-footer />
</template>
