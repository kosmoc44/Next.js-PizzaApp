import qs from "qs";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Filters } from "./useFilters";

import { useDebounce } from "use-debounce";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  const [debouncedPrices] = useDebounce(filters.prices, 100);
  const [debouncedSizes] = useDebounce(filters.sizes, 100);
  const [debouncedPizzaTypes] = useDebounce(filters.pizzaTypes, 100);
  const [debouncedIngredients] = useDebounce(filters.selectedIngredients, 100);

  useEffect(() => {
    const params = {
      ...debouncedPrices,
      pizzaTypes: Array.from(debouncedPizzaTypes),
      sizes: Array.from(debouncedSizes),
      ingredients: Array.from(debouncedIngredients),
    };

    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, { scroll: false });
  }, [
    debouncedPrices,
    debouncedSizes,
    debouncedPizzaTypes,
    debouncedIngredients,
    router,
  ]);
};
