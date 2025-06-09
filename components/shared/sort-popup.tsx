import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gray-100/70 rounded-md inline-flex items-center gap-1 px-5 h-[44px] cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16}/>
      <span>Sort:</span>
      <span className="text-primary">Rate</span>
    </div>
  );
};

export default SortPopup;
