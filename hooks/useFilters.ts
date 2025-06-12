import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

export interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(
      new Set<string>(searchParams.get("ingredients")?.split(","))
    )
  );

  const initialPrices: PriceProps = {
    priceFrom: searchParams.get("priceFrom")
      ? Number(searchParams.get("priceFrom"))
      : undefined,
    priceTo: searchParams.get("priceTo")
      ? Number(searchParams.get("priceTo"))
      : undefined,
  };

  const initialSizes = searchParams.get("sizes")
    ? new Set<string>(searchParams.get("sizes")!.split(","))
    : new Set<string>();

  const initialPizzaTypes = searchParams.get("pizzaTypes")
    ? new Set<string>(searchParams.get("pizzaTypes")!.split(","))
    : new Set<string>();

  const [prices, setPrices] = useState<PriceProps>(initialPrices);
  const [sizes, { toggle: toggleSizes }] = useSet(initialSizes);
  const [pizzaTypes, { toggle: togglePizzaType }] = useSet(initialPizzaTypes);

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaType,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
