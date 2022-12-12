<script>
import { computed } from "vue";
import { useCartStore } from "@/store/cart";
import { ROUTE_MAIN, ROUTE_ORDER } from "@/router/routeNames";
import useAsyncDialog from "@/composables/useAsyncDialog";
import { numberToPrice, declensionNumber } from "@/libs/utils";
import CartProductItem from "@/components/CartProductItem.vue";
import AppLoader from "@/components/AppLoader.vue";
import AppBtnError from "@/components/AppBtnError.vue";
import AppDialogConfirm from "@/components/AppDialogConfirm.vue";
</script>

<script setup>
const store = useCartStore();
const { isOpen, openDialog, confirmDialog, closeDialog } = useAsyncDialog();

const cartInfoMsg = computed(() => {
  const count = store.itemsCount;
  const declension = declensionNumber(count, ["товар", "товара", "товаров"]);

  return `${count} ${declension}`;
});

const removeFromCart = async (id) => {
  const isConfirm = await openDialog();

  if (isConfirm) store.removeFromCart(id);
};
</script>

<template>
  <app-dialog-confirm
    v-if="isOpen"
    @confirm="confirmDialog"
    @close="closeDialog"
  >
    Удалить продукт из корзины?
  </app-dialog-confirm>

  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link :to="{ name: ROUTE_MAIN }" class="breadcrumbs__link">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info"> {{ cartInfoMsg }} </span>
    </div>

    <app-loader v-if="store.isLoading" />
    <app-btn-error v-else-if="store.isError" @click="store.getCartProducts">
      Что-то пошло не так.
    </app-btn-error>

    <section v-else class="cart">
      <form
        @submit.prevent="$router.push({ name: ROUTE_ORDER })"
        class="cart__form form"
      >
        <div class="cart__field">
          <ul class="cart__list">
            <cart-product-item
              v-for="{ product, quantity } in store.items"
              :key="product.id"
              :quantity="quantity"
              @remove-item="removeFromCart"
              @update-quantity="store.updateQuantity"
              :id="product.id"
              :title="product.title"
              :price="product.price"
              :image="product.image.file.url"
            />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ numberToPrice(store.cartTotal) }} ₽</span>
          </p>

          <button
            v-show="store.cartTotal"
            class="cart__button button button--primery"
            type="submit"
          >
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>
