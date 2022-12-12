<script>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { ROUTE_MAIN, ROUTE_CART, ROUTE_ORDER_INFO } from "@/router/routeNames";
import { useCartStore } from "@/store/cart";
import { useOrderStore } from "@/store/order";
import { declensionNumber, numberToPrice } from "@/libs/utils";
import userValidateForm from "@/composables/useValidateForm";
import AppFormInput from "@/components/AppFormInput.vue";
import AppFormTextArea from "@/components/AppFormTextArea.vue";
import AppLoader from "@/components/AppLoader.vue";
</script>

<script setup>
const cartStore = useCartStore();
const orderStore = useOrderStore();
const router = useRouter();

const cartInfoMsg = computed(() => {
  const count = cartStore.itemsCount;
  const declension = declensionNumber(count, ["товар", "товара", "товаров"]);

  return `${count} ${declension}`;
});

const deliveryPrice = 500;

const order = reactive({
  name: "",
  address: "",
  phone: "",
  email: "",
  comment: "",
});

const rules = {
  name: [
    (v) => !!v || "Заполните ФИО",
    (v) => /^[a-zа-яё ]+$/i.test(v) || "Недопустимые символы",
  ],
  address: [(v) => !!v || "Заполните адрес"],
  phone: [
    (v) => !!v || "Заполните телефон",
    (v) => /^[+\d]+$/.test(v) || "Недопустимые символы",
  ],
  email: [
    (v) => !!v || "Заполните E-mail",
    (v) => /.+@.+\..+/.test(v) || "Неккоректно введен E-mail",
  ],
};

const { isInvalid } = userValidateForm(rules, order);

const createOrder = async () => {
  if (isInvalid.value) return;

  await orderStore.createOrder(order);

  if (!orderStore.isError)
    router.push({
      name: ROUTE_ORDER_INFO,
      params: { id: orderStore.order.id },
    });
};
</script>

<template>
  <app-loader v-if="orderStore.isLoading" app />

  <main class="content container">
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
          <a class="breadcrumbs__link"> Оформление заказа </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info"> {{ cartInfoMsg }} </span>
    </div>

    <section class="cart">
      <form @submit.prevent="createOrder" ref="form" class="cart__form form">
        <div class="cart__field">
          <div class="cart__data">
            <app-form-input
              v-model="order.name"
              type="text"
              placeholder="Введите ваше полное имя"
              label="ФИО*"
              :rules="rules.name"
              :error="orderStore.errors.inputs.name"
            />

            <app-form-input
              v-model="order.address"
              type="text"
              placeholder="Введите ваш адрес"
              label="Адрес доставки*"
              :rules="rules.address"
              :error="orderStore.errors.inputs.address"
            />

            <app-form-input
              v-model="order.phone"
              type="tel"
              placeholder="Введите ваш телефон"
              label="Телефон*"
              :rules="rules.phone"
              :error="orderStore.errors.inputs.phone"
            />

            <app-form-input
              v-model="order.email"
              type="email"
              placeholder="Введи ваш Email"
              label="Email*"
              :rules="rules.email"
              :error="orderStore.errors.inputs.email"
            />

            <app-form-text-area
              v-model="order.comment"
              placeholder="Ваши пожелания"
              label="Комментарий к заказу"
            />
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li
              v-for="{ product, quantity } in cartStore.items"
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
              Итого: <b>{{ cartInfoMsg }}</b> на сумму
              <b>{{ numberToPrice(cartStore.cartTotal + deliveryPrice) }} ₽</b>
            </p>
          </div>

          <button
            :disabled="isInvalid"
            class="cart__button button button--primery"
            type="submit"
          >
            Оформить заказ
          </button>
        </div>

        <div v-if="orderStore.isError" class="cart__error form__error-block">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{
              orderStore.errors.message
                ? orderStore.errors.message
                : "Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу."
            }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>
