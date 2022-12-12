export const removeEmptyFilterFields = (filterFields) => {
  return Object.entries(filterFields).reduce((acc, [key, value]) => {
    if (typeof value === "string" && value === "") return acc;
    if (typeof value === "number" && !value) return acc;
    if (!value) return acc;

    return { ...acc, [key]: value };
  }, {});
};

export const numberToPrice = (number) => Intl.NumberFormat().format(number);

export const declensionNumber = (number, words) => {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
  ];
};

export const getMessagesFromInputRules = (rules, value) => {
  return rules
    ?.map((validation) => {
      const result = validation(value);
      return typeof result === "string" ? result : "";
    })
    .filter((message) => message !== "");
};
