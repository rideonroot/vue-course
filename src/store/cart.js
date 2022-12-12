import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/api";
import { useUserStore } from "./user";

export const useCartStore = defineStore("cart", () => {
  const user = useUserStore();
  const items = ref([]);
  const isLoading = ref(false);
  const isError = ref(false);

  const itemsCount = computed(() => items.value.length);

  const cartTotal = computed(() => {
    return items.value.reduce((acc, value) => {
      return acc + value.price * value.quantity;
    }, 0);
  });

  const getCartProducts = async () => {
    try {
      isError.value = false;
      isLoading.value = true;

      items.value = await api.getCartProducts(user.accessKey);
    } catch {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const addToCard = async ({ productId, quantity }) => {
    try {
      isError.value = false;
      isLoading.value = true;

      const payload = { productId, quantity, userAccessKey: user.accessKey };
      items.value = await api.addCartProduct(payload);
    } catch {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const updateQuantity = async ({ productId, quantity }) => {
    const product = items.value.find(({ product }) => product.id === productId);
    const lastQuantity = product.quantity;

    try {
      product.quantity = quantity;

      await api.updateCartProduct({
        productId,
        quantity,
        userAccessKey: user.accessKey,
      });
    } catch {
      product.quantity = lastQuantity;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      isError.value = false;
      isLoading.value = true;

      const payload = { productId, userAccessKey: user.accessKey };
      items.value = await api.deleteCartProduct(payload);
    } catch {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const checkIsInCart = (id) => {
    return items.value.some(({ product }) => product.id === id);
  };

  const clearCart = () => (items.value = []);

  return {
    items,
    itemsCount,
    cartTotal,
    isError,
    isLoading,
    getCartProducts,
    addToCard,
    updateQuantity,
    removeFromCart,
    checkIsInCart,
    clearCart,
  };
});
