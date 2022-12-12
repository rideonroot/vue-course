<template>
  <div>
    <slot />

    <button v-on="$attrs" class="filter__submit button">
      Попробовать еще раз
    </button>
  </div>
</template>
