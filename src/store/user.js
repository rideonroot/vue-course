import { defineStore } from "pinia";
import { ref } from "vue";
import persistanceStorage from "@/libs/persistanceStorage";
import api from "@/api";

export const useUserStore = defineStore("user", () => {
  const accessKey = ref("");

  const setAccessKey = (key) => {
    accessKey.value = key;

    persistanceStorage.setItem("access-key", key);
  };

  const deleteAccessKey = () => {
    accessKey.value = "";

    persistanceStorage.removeItem("access-key");
  };

  const getAccessKey = async () => {
    const localKey = persistanceStorage.getItem("access-key");

    if (localKey) {
      setAccessKey(localKey);
      return;
    }

    const { accessKey } = await api.getUserKey();
    setAccessKey(accessKey);
  };

  return {
    accessKey,
    getAccessKey,
    setAccessKey,
    deleteAccessKey,
  };
});
