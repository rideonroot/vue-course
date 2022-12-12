import axios from "@/api/axios";
import { ORDERS } from "@/api/constants";

export const createOrder = async (payload, userAccessKey) => {
  const requestUrl = `${ORDERS}?userAccessKey=${userAccessKey}`;
  return await axios.post(requestUrl, payload);
};

export const getOrder = async (orderId, userAccessKey) => {
  const requestUrl = `${ORDERS}/${orderId}?userAccessKey=${userAccessKey}`;
  return await axios.get(requestUrl);
};
