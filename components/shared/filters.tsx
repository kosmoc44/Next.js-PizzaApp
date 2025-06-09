import React from "react";

import FilterCheckbox from "./filterCheckbox";

import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./rangeSlider";
import CheckBoxFiltersGroup from "./checkBoxFiltersGroup";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-medium" />

      <div className="flex flex-col gap-3">
        <FilterCheckbox text={"This pizza can be customized"} value="1" />
        <FilterCheckbox text={"News"} value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-200 py-6 pb-7">
        <p className="font-medium mb-3">Price range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={1000}
          />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckBoxFiltersGroup
        title="Category"
        className="mt-5"
        limit={5}
        defaultItems={[
          {
            text: "Chesse souse",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Olives",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Chesse souse",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Olives",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Olives",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Olives",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Olives",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
      />
    </div>
  );
};

export default Filters;
