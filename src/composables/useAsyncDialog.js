import { ref } from "vue";

export default () => {
  let confirmResolve = () => {};

  const isOpen = ref(false);

  const openDialog = () => {
    isOpen.value = true;

    return new Promise((resolve) => (confirmResolve = resolve));
  };

  const confirmDialog = () => {
    confirmResolve(true);
    isOpen.value = false;
  };

  const closeDialog = () => {
    confirmResolve(false);
    isOpen.value = false;
  };

  return {
    isOpen,
    openDialog,
    confirmDialog,
    closeDialog,
  };
};
