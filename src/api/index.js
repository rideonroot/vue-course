import * as user from "@/api/requests/user";
import * as products from "@/api/requests/products";
import * as cart from "@/api/requests/cart";
import * as order from "@/api/requests/order";

const api = { ...user, ...products, ...cart, ...order };

export default api;
