import { computed } from "vue";
import { getMessagesFromInputRules } from "@/libs/utils";

export default (rules, form) => {
  const errors = computed(() => {
    return Object.entries(form).reduce((acc, [key, value]) => {
      const msg = getMessagesFromInputRules(rules[key], value)?.[0];
      return typeof msg === "string" ? { ...acc, [key]: msg } : acc;
    }, {});
  });

  const isInvalid = computed(() => Object.values(errors.value).some(Boolean));

  return {
    errors,
    isInvalid,
  };
};
