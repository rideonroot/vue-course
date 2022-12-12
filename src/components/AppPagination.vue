<script>
import { computed, toRefs } from "vue";
import usePagination from "@/composables/usePagination";
</script>

<script setup>
const emit = defineEmits(["update:page"]);
const props = defineProps({
  page: Number,
  pagesCount: Number,
  totalVisible: { type: Number, default: 7 },
});

const { page, pagesCount, totalVisible } = toRefs(props);
const isMultiPage = computed(() => pagesCount.value > 1);

const pageItems = usePagination({
  page: page.value,
  length: pagesCount.value,
  totalVisible: totalVisible.value,
});

const changePage = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > pagesCount.value) return;

  emit("update:page", pageNumber);
};
</script>

<template>
  <ul v-if="isMultiPage" class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        @click.prevent="changePage(page - 1)"
        :class="{ 'pagination__link--disabled': page === 1 }"
        class="pagination__link pagination__link--arrow"
        aria-label="Предыдущая страница"
        href="#"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>

    <li
      v-for="pageNumber in pageItems"
      :key="pageNumber"
      class="pagination__item"
    >
      <span v-if="isNaN(pageNumber)" class="pagination__link">
        {{ pageNumber }}
      </span>
      <a
        v-else
        @click.prevent="changePage(pageNumber)"
        :class="{ 'pagination__link--current': page === pageNumber }"
        class="pagination__link"
        href="#"
      >
        {{ pageNumber }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        @click.prevent="changePage(page + 1)"
        :class="{ 'pagination__link--disabled': page === pagesCount }"
        href="#"
        aria-label="Следующая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>
