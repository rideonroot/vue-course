<script>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useProducts from "@/composables/useProducts.js";
import ProductList from "@/components/ProductList.vue";
import AppPagination from "@/components/AppPagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import AppLoader from "@/components/AppLoader.vue";
import AppBtnError from "@/components/AppBtnError.vue";
</script>

<script setup>
const isPageLoaded = ref(false);
const currentPage = ref(1);
const filters = ref({});

const { products, isLoading, pagesCount, error, getProducts } = useProducts();
const router = useRouter();
const route = useRoute();

const searchProducts = async () => {
  const LIMIT_PER_PAGE = 6;
  const query = { page: currentPage.value, ...filters.value };

  router.push({ query });
  getProducts({ ...query, limit: LIMIT_PER_PAGE });
};

const filterProducts = (filterParams) => {
  currentPage.value = 1;
  filters.value = filterParams;

  searchProducts();
};

watch(currentPage, searchProducts);

onMounted(() => {
  const { page, ...restFilters } = route.query;

  if (page) currentPage.value = +page;
  filters.value = restFilters;

  searchProducts().then(() => (isPageLoaded.value = true));
});
</script>

<template>
  <main v-if="isPageLoaded" class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        @filter-products="filterProducts"
        :initial-filters="filters"
      />

      <app-loader v-if="isLoading" />
      <app-btn-error v-else-if="error" @click="searchProducts">
        Что-то пошло не так.
      </app-btn-error>

      <section v-else class="catalog">
        <ProductList :products="products" />
        <AppPagination v-model:page="currentPage" :pages-count="pagesCount" />
      </section>
    </div>
  </main>
</template>
