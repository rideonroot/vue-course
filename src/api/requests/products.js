import axios from "@/api/axios";
import { PRODUCTS, COLORS, CATEGORIES } from "@/api/constants";

export const getProducts = async (params) => {
  const { items, pagination } = await axios.get(PRODUCTS, { params });

  return {
    products: items.map((item) => ({ ...item, image: item.image.file.url })),
    total: pagination.total,
  };
};

export const getProductById = async (id) => {
  const { image, ...product } = await axios.get(`${PRODUCTS}/${id}`);

  return {
    ...product,
    image: image.file.url,
  };
};

export const getFilters = async () => {
  const colors = await axios.get(COLORS);
  const categories = await axios.get(CATEGORIES);

  return {
    categories: categories.items,
    colors: colors.items,
  };
};
