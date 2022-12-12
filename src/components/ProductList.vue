<script>
import ProductListItem from "./ProductListItem.vue";
</script>
<script setup>
defineProps({ products: Array });
</script>

<template>
  <ul class="catalog__list">
    <ProductListItem
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :colors="product.colors"
    />
  </ul>
</template>
