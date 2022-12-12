<script setup>
defineProps({
  label: String,
  msg: String,
});
</script>

<template>
  <label class="form__label">
    <slot />

    <span class="form__value">{{ label }}</span>
    <span v-if="msg" class="form__error"> {{ msg }} </span>
  </label>
</template>
