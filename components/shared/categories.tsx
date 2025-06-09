"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";
import { Button } from "../ui";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const setActiveCategory = useCategoryStore((state) => state.setActiveId);

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-100/70 p-1 rounded-md",
        className
      )}
    >
      {categories.map((category) => (
        <Button
          className={cn(
            "px-4 py-2 rounded-md cursor-pointer",
            categoryActiveId === category.id
              ? "bg-white text-black shadow-amber-600 hover:text-black hover:bg-white"
              : "text-black bg-transparent shadow-none hover:bg-transparent hover:text-black"
          )}
          key={category.id}
          onClick={() => {
            setActiveCategory(category.id);
            const section = document.getElementById(`category-${category.id}`);
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
