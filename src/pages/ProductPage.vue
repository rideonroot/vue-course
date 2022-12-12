<script>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/store/cart";
import useProductDetail from "@/composables/useProductDetail";
import { ROUTE_MAIN, ROUTE_CART } from "@/router/routeNames";
import { numberToPrice } from "@/libs/utils";
import AppLoader from "@/components/AppLoader.vue";
import AppBtnError from "@/components/AppBtnError.vue";
import AppDialog from "@/components/AppDialog.vue";
</script>

<script setup>
const store = useCartStore();
const route = useRoute();
const { product, category, isLoading, error, getProduct } = useProductDetail();

const productAmount = ref(1);
const isDialogOpen = ref(false);
const isInCart = computed(() => store.checkIsInCart(product.value.id));

const loadProduct = () => getProduct(+route.params.id);

const updateAmount = (value) => {
  if (value >= 1) productAmount.value = value;
};

const addToCart = async (productId) => {
  await store.addToCard({ productId, quantity: productAmount.value });

  isDialogOpen.value = true;
};

watch(
  () => route.params,
  () => loadProduct().then(() => (document.title = product.value.title)),
  {
    deep: true,
    immediate: true,
  }
);
</script>

<template>
  <app-dialog v-if="isDialogOpen" @close="isDialogOpen = false" color="#272727">
    <div v-if="store.isError">Ошибка добавления в корзину...</div>

    <div v-else>
      <p style="color: #fff">
        Товар <b style="color: #9eff00"> {{ product.title }} </b> успешно
        добавлен в корзину!
      </p>
      <router-link
        :to="{ name: ROUTE_CART }"
        class="cart__button button button--primery"
        style="text-align: center"
      >
        Перейти в корзину?
      </router-link>
    </div>
  </app-dialog>

  <main class="content container">
    <app-loader v-if="isLoading" />

    <app-btn-error v-else-if="error" @click="loadProduct">
      Что-то пошло не так.
    </app-btn-error>

    <template v-else>
      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <router-link :to="{ name: ROUTE_MAIN }" class="breadcrumbs__link">
              Каталог
            </router-link>
          </li>
          <li class="breadcrumbs__item">
            <router-link :to="{ name: ROUTE_MAIN }" class="breadcrumbs__link">
              {{ category.title }}
            </router-link>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link"> {{ product.title }} </a>
          </li>
        </ul>
      </div>

      <section class="item">
        <div class="item__pics pics">
          <div class="pics__wrapper">
            <img
              width="570"
              height="570"
              :src="product.image"
              :alt="product.title"
            />
          </div>
        </div>

        <div class="item__info">
          <span class="item__code">{{ product.id }}</span>
          <h2 class="item__title">{{ product.title }}</h2>

          <div class="item__form">
            <form @submit.prevent="addToCart(product.id)" class="form">
              <b class="item__price"> {{ numberToPrice(product.price) }} ₽ </b>

              <fieldset class="form__block">
                <legend class="form__legend">Цвет:</legend>
                <ul class="colors">
                  <li
                    v-for="color in product.colors"
                    :key="color.id"
                    class="colors__item"
                  >
                    <label class="colors__label">
                      <input
                        class="colors__radio sr-only"
                        type="radio"
                        name="color-item"
                        value="blue"
                        checked=""
                      />
                      <span
                        class="colors__value"
                        :style="{ backgroundColor: color.code }"
                      >
                      </span>
                    </label>
                  </li>
                </ul>
              </fieldset>

              <div class="item__row">
                <div class="form__counter">
                  <button
                    @click="updateAmount(productAmount - 1)"
                    type="button"
                    aria-label="Убрать один товар"
                  >
                    <svg width="12" height="12" fill="currentColor">
                      <use xlink:href="#icon-minus"></use>
                    </svg>
                  </button>

                  <input
                    type="text"
                    v-model.number="productAmount"
                    name="count"
                  />

                  <button
                    @click="updateAmount(productAmount + 1)"
                    type="button"
                    aria-label="Добавить один товар"
                  >
                    <svg width="12" height="12" fill="currentColor">
                      <use xlink:href="#icon-plus"></use>
                    </svg>
                  </button>
                </div>

                <button
                  :disabled="store.isLoading"
                  class="button button--primery"
                  type="submit"
                >
                  {{ isInCart ? "Уже в корзине" : "В корзину" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </template>
  </main>
</template>
