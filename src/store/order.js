import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";
import api from "@/api";
import { useUserStore } from "./user";
import { useCartStore } from "./cart";

export const useOrderStore = defineStore("order", () => {
  const user = useUserStore();
  const { clearCart } = useCartStore();
  const order = ref({});
  const errors = reactive({ inputs: {}, message: "" });
  const isLoading = ref(false);
  const isError = ref(false);

  const itemsCount = computed(() => order.value?.basket?.items?.length ?? 0);
  const totalPrice = computed(() => {
    return (
      order?.value?.basket?.items.reduce((acc, value) => {
        return acc + value.price * value.quantity;
      }, 0) ?? 0
    );
  });

  const isOrderExist = computed(() => Boolean(order.value?.id));

  const createOrder = async (payload) => {
    try {
      errors.message = "";
      errors.inputs = {};
      isError.value = false;
      isLoading.value = true;

      order.value = await api.createOrder(payload, user.accessKey);

      clearCart();
    } catch ({ error }) {
      errors.message = error?.message ?? "";
      errors.inputs = error?.request ?? {};
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const getOrder = async (orderId) => {
    if (isOrderExist.value) return;

    try {
      isLoading.value = true;
      isError.value = false;

      order.value = await api.getOrder(orderId, user.accessKey);
    } catch {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    isError,
    order,
    itemsCount,
    totalPrice,
    errors,
    createOrder,
    getOrder,
  };
});
