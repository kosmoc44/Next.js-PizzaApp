import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  // id,
  name,
  price,
  className,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-md h-[260px]">
          <Image src={imageUrl} alt={name} width={215} height={215} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-medium" />

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          omnis debitis necessitatibus fuga pariatur enim. Laboriosam itaque
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="text-[20px] flex items-center gap-2">
            <span>Starting</span>
            <b>{price} <span className="font-medium">$</span></b>
          </div>
          <Button className="text-base font-medium text-primary" variant="secondary">
            <Plus />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
