import { computed } from "vue";

const getRange = (from, to) => {
  const range = [];
  const start = from > 0 ? from : 1;

  for (let i = start; i <= to; i++) range.push(i);

  return range;
};

export default ({ page, totalVisible, length }) => {
  return computed(() => {
    const maxLength = Math.min(Math.max(0, totalVisible) || length, length);

    if (length <= maxLength) return getRange(1, length);

    const even = maxLength % 2 === 0 ? 1 : 0;
    const left = Math.floor(maxLength / 2);
    const right = length - left + 1 + even;

    if (page > left && page < right) {
      const firstItem = 1;
      const lastItem = length;
      const start = page - left + 2;
      const end = page + left - 2 - even;
      const secondItem = start - 1 === firstItem + 1 ? 2 : "...";
      const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : "...";

      return [
        firstItem,
        secondItem,
        ...getRange(start, end),
        beforeLastItem,
        length,
      ];
    } else if (page === left) {
      const end = page + left - 1 - even;

      return [...getRange(1, end), "...", length];
    } else if (page === right) {
      const start = page - left + 1;

      return [1, "...", ...getRange(start, length)];
    } else {
      return [...getRange(1, left), "...", ...getRange(right, length)];
    }
  });
};
