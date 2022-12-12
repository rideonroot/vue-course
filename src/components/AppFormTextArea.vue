<script>
import AppFormField from "./AppFormField.vue";
</script>

<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  label: String,
  msg: String,
  placeholder: String,
  modelValue: [Number, String],
});
</script>

<template>
  <app-form-field :msg="msg" :label="label">
    <textarea
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      :placeholder="placeholder"
      class="form__input form__input--area"
    />
  </app-form-field>
</template>
