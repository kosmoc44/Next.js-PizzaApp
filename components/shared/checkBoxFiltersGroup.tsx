"use client";

import React, { useState } from "react";

import { FilterCheckboxProps, FilterCheckbox } from "./filterCheckbox";
import { Button, Input, Skeleton } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
  loading?: boolean;
  selected?: Set<string>;
  name?: string;
}

export const CheckBoxFiltersGroup: React.FC<Props> = ({
  items,
  title,
  className,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-medium mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
          ))}
        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit) || [];
  return (
    <div className={className}>
      <p className="font-medium mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div
        className={
          showAll
            ? "flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar"
            : "flex flex-col gap-4 max-h-96 pr-2"
        }
      >
        {list.length > 0 ? (
          list.map((item, index) => (
            <FilterCheckbox
              key={index}
              {...item}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={selected?.has(item.value)}
              onCheckedChange={() => onClickCheckbox?.(item.value)}
              name={name}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">
            No matching products found
          </p>
        )}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-200 mt-4" : ""}>
          <Button
            className=" flex items-baseline gap-2 p-0 mt-2"
            onClick={() => setShowAll(!showAll)}
            variant="link"
          >
            {showAll ? "Show less" : "+ Show more"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CheckBoxFiltersGroup;
