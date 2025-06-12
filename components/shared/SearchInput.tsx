"use client";

import React, { useState } from "react";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/services/apiClient";
import { Product } from "@prisma/client";
import { useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuary, setSearchQuary] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleFocus = {
    open: () => setIsFocused(true),
    close: () => {
      setIsFocused(false);
      setSearchQuary("");
    },
  };
  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuary);
        setProducts(response);
      } catch (e) {
        console.log(e);
      }
    },
    250,
    [searchQuary]
  );

  const onCLickItem = () => {
    setIsFocused(false);
    setSearchQuary("");
    setProducts([]);
  };

  return (
    <>
      {isFocused && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={handleFocus.close}
        />
      )}
      <div className={cn("relative z-40", className)}>
        <Search className="text-gray-500 absolute left-2 top-2" size={18} />
        <Input
          className="pl-8"
          placeholder="Search Pizza..."
          type="text"
          onFocus={handleFocus.open}
          value={searchQuary}
          onChange={(e) => setSearchQuary(e.target.value)}
        />
        {isFocused && (
          <X
            size={20}
            className="text-gray-500 absolute right-2 top-2 cursor-pointer"
            onClick={handleFocus.close}
          />
        )}
        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-md py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              isFocused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                onClick={onCLickItem}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-500 transition-colors duration-200"
                href={`/product/${product.id}`}
                key={product.id}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={50}
                  height={50}
                />
                <div>{product.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
