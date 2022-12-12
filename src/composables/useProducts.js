import { reactive, toRefs } from "vue";
import api from "@/api";

export default () => {
  const state = reactive({
    products: [],
    pagesCount: 0,
    isLoading: false,
    error: null,
  });

  const getProductsData = async (params) => {
    const limit = params?.limit || 9;

    try {
      state.isLoading = true;
      state.error = null;

      const { products, total } = await api.getProducts({
        ...params,
        limit,
        page: params.page,
      });

      state.products = products;
      state.pagesCount = Math.ceil(total / limit);
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return {
    ...toRefs(state),
    getProducts: getProductsData,
  };
};
