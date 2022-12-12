<script>
import { useOrderStore } from "@/store/order";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ROUTE_MAIN, ROUTE_CART, ROUTE_ORDER } from "@/router/routeNames";
import { declensionNumber, numberToPrice } from "@/libs/utils";
import AppLoader from "@/components/AppLoader.vue";
</script>

<script setup>
const route = useRoute();
const store = useOrderStore();

const orderInfoMsg = computed(() => {
  const count = store.itemsCount;
  const declension = declensionNumber(count, ["товар", "товара", "товаров"]);

  return `${count} ${declension}`;
});

const deliveryPrice = 500;
const orderTotal = computed(() => deliveryPrice + store.totalPrice);

onMounted(() => {
  const orderId = route.params.id;
  store.getOrder(orderId);
});
</script>

<template>
  <app-loader v-if="store.isLoading" />

  <main v-else class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: ROUTE_MAIN }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: ROUTE_CART }">
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: ROUTE_ORDER }">
            Оформление заказа
          </router-link>
        </li>
      </ul>

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ store.order.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет
            письмо с&nbsp;деталями заказа. Наши менеджеры свяжутся с&nbsp;Вами
            в&nbsp;течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key"> Получатель </span>
              <span class="dictionary__value">
                {{ store.order.name }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Адрес доставки </span>
              <span class="dictionary__value">
                {{ store.order.address }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Телефон </span>
              <span class="dictionary__value"> {{ store.order.phone }} </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Email </span>
              <span class="dictionary__value"> {{ store.order.email }} </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Способ оплаты </span>
              <span class="dictionary__value"> картой при получении </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <ul v-if="store.order.basket?.items" class="cart__orders">
            <li
              v-for="{ product, quantity } in store.order.basket.items"
              :key="product.id"
              class="cart__order"
            >
              <h3>{{ product.title }}</h3>
              <b>{{ numberToPrice(product.price * quantity) }} ₽</b>
              <span>Артикул: {{ product.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>
              Доставка: <b>{{ deliveryPrice }} ₽</b>
            </p>
            <p>
              Итого: <b>{{ orderInfoMsg }}</b> на сумму
              <b>{{ numberToPrice(orderTotal) }} ₽</b>
            </p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
