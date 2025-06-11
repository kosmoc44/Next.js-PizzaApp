import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Logo from "../../public/pepperoni-pizza-svgrepo-com (1).svg";
import { Button } from "../ui";
import Container from "./container";
import { ArrowRight, ShoppingBasket, User } from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="logo" width={50} height={50} />
            <div>
              <h1 className="text-2xl uppercase font-black">Pizza</h1>
              <h1 className="text-sm text-gray-400 leading-3">
                This is as delicious as it gets!
              </h1>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="oven">
            <span>
              <User />
            </span>{" "}
            Log in
          </Button>
          <div>
            <Button className="group relative">
              <b>520$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-2 group-hover:opacity-0 transition duration-300 group-hover:translate-x-2 -translate-x-2">
                <ShoppingBasket className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="absolute right-5 opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:translate-x-0 -translate-x-2" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
