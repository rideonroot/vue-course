import { reactive, toRefs } from "vue";
import api from "@/api";

export default () => {
  const state = reactive({
    isLoading: false,
    product: null,
    category: null,
    error: null,
  });

  const getProduct = async (productId) => {
    try {
      state.isLoading = true;
      state.error = null;

      const { category, ...product } = await api.getProductById(productId);

      state.product = product;
      state.category = category;
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return {
    ...toRefs(state),
    getProduct,
  };
};
