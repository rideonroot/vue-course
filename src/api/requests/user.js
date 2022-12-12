import axios from "@/api/axios";
import { USER_ACCESS_KEY } from "@/api/constants";

export const getUserKey = () => axios.get(USER_ACCESS_KEY);
