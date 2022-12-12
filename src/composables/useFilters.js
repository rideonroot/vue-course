import api from "@/api";
import { reactive, toRefs } from "vue";

export default () => {
  const state = reactive({
    isLoading: false,
    error: null,
    categories: [],
    colors: [],
  });

  const getProductFilters = async () => {
    try {
      state.isLoading = true;
      const { categories, colors } = await api.getFilters();

      state.categories = categories;
      state.colors = colors;
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return {
    ...toRefs(state),
    getFilters: getProductFilters,
  };
};
