import { cn } from "@/lib/utils";
import React from "react";
import Container from "./container";
import Categories from "./categories";
import SortPopup from "./sort-popup";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white/50 py-2 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
