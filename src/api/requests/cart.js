import axios from "@/api/axios";
import { CART } from "@/api/constants";

export const getCartProducts = async (userAccessKey) => {
  const { items } = await axios.get(CART, { params: { userAccessKey } });
  return items;
};

export const addCartProduct = async ({
  productId,
  quantity,
  userAccessKey,
}) => {
  const requestUrl = `${CART}/products?userAccessKey=${userAccessKey}`;
  const { items } = await axios.post(requestUrl, { productId, quantity });

  return items;
};

export const updateCartProduct = async ({
  productId,
  quantity,
  userAccessKey,
}) => {
  const requestUrl = `${CART}/products?userAccessKey=${userAccessKey}`;
  const { items } = await axios.put(requestUrl, { productId, quantity });

  return items;
};

export const deleteCartProduct = async ({ productId, userAccessKey }) => {
  const requestUrl = `${CART}/products?userAccessKey=${userAccessKey}`;
  const { items } = await axios.delete(requestUrl, {
    data: { productId },
  });

  return items;
};
