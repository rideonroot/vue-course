<script>
import { computed, onMounted, ref, toRefs } from "vue";
import { getMessagesFromInputRules } from "@/libs/utils";
import AppFormField from "./AppFormField.vue";
</script>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: [Number, String],
  label: String,
  placeholder: String,
  type: String,
  rules: Array,
  error: String,
});
const { rules, modelValue, error } = toRefs(props);
const validateError = ref("");
const errorMsg = computed(() => validateError.value || error.value || "");

const validate = (value) => {
  validateError.value = "";
  const isRequired = !!rules.value?.length;
  const res = () => getMessagesFromInputRules(rules.value, value)[0] ?? "";

  validateError.value = isRequired ? res() : "";
};

const input = (value) => {
  validate(value);
  emit("update:modelValue", value);
};

onMounted(() => modelValue.value && validate(modelValue.value));
</script>

<template>
  <app-form-field :msg="errorMsg" :label="label">
    <input
      @input="input($event.target.value.trim())"
      @blur="validate($event.target.value.trim())"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="form__input"
    />
  </app-form-field>
</template>
