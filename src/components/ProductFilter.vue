<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import useFilters from "@/composables/useFilters";
import { removeEmptyFilterFields } from "@/libs/utils";
</script>

<script setup>
const INITIAL_FILTERS = {
  minPrice: 0,
  maxPrice: 0,
  categoryId: "",
  colorId: "",
};

const emit = defineEmits(["filterProducts"]);
const props = defineProps({ initialFilters: Object });

const { categories, colors, getFilters } = useFilters();

const { initialFilters } = toRefs(props);
const filters = reactive({ ...INITIAL_FILTERS, ...initialFilters.value });
const preparedFilters = computed(() => removeEmptyFilterFields(filters));

const submitFilters = () => {
  emit("filterProducts", { ...preparedFilters.value });
};

const resetFilters = () => {
  emit("filterProducts", {});

  Object.assign(filters, INITIAL_FILTERS);
};

onMounted(getFilters);
</script>

<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form @submit.prevent="submitFilters" class="filter__form form">
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>

        <label class="form__label form__label--price">
          <input
            v-model.number="filters.minPrice"
            type="text"
            name="min-price"
            class="form__input"
          />
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input
            v-model.number="filters.maxPrice"
            type="text"
            name="max-price"
            class="form__input"
          />
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>

        <label class="form__label form__label--select">
          <select
            v-model="filters.categoryId"
            class="form__select"
            name="category"
          >
            <option value="">Все категории</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.title }}
            </option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li v-for="color in colors" :key="color.id" class="colors__item">
            <label class="colors__label">
              <input
                v-model="filters.colorId"
                :value="color.id"
                class="colors__radio sr-only"
                type="radio"
                name="color"
              />
              <span
                class="colors__value"
                :style="`background-color:${color.code}`"
              />
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button
        @click="resetFilters"
        class="filter__reset button button--second"
        type="button"
      >
        Сбросить
      </button>
    </form>
  </aside>
</template>
