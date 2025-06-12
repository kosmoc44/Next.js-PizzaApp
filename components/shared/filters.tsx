"use client";

import React from "react";
import CheckBoxFiltersGroup from "./checkBoxFiltersGroup";
import qs from "qs";

import { useQueryFilters, useFilters, useIngredients } from "@/hooks";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./rangeSlider";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const filters = useFilters();
  useQueryFilters(filters);
  const { ingredients, loading } = useIngredients();

  const updatePrice = (price: number[]) => {
    filters.setPrices("priceFrom", price[0]);
    filters.setPrices("priceTo", price[1]);
  };

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, { scroll: false });
  }, [
    filters.prices,
    filters.pizzaTypes,
    filters.sizes,
    filters.selectedIngredients,
    router,
  ]);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-medium" />

      <CheckBoxFiltersGroup
        title="Pizza types"
        className="mb-5"
        name="pizzaTypes"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Thing", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckBoxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-200 py-6 pb-7">
        <p className="font-medium mb-3">Price range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom ?? "")}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo ?? "")}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrice}
        />
      </div>

      <CheckBoxFiltersGroup
        title="Category"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export default Filters;
