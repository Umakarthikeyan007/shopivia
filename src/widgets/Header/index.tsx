import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconMenu2 } from '@tabler/icons-react';
import useIsMobile from "../../hooks/useIsMobile.ts";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-5 md:py-6 flex justify-center">
      <div className="md:w-[85%] w-full px-4 md:px-0 flex justify-between items-center">
        <div className="flex gap-4 items-center">
        {isMobile && <IconMenu2 stroke={2} />}
        <p className="font-anton text-[18px] lg:text-[32px] leading-[100%] font-medium">
          Shopivia
        </p>
        </div>
        {!isMobile && (
          <div className="font-poppins flex gap-6">
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
          </div>
        )}
        {!isMobile && (
          <div className="bg-[#F0F0F0] p-3 w-[40%] rounded-full flex gap-3 items-center">
            <IconSearch stroke={2} color="black" className="opacity-40" />
            <input
              type="text"
              className="bg-transparent font-poppins text-sm outline-none w-full placeholder:text-black/40"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </div>
        )}
        <div className="flex gap-3 md:gap-4 lg:gap-4">
          {isMobile &&  <IconSearch stroke={2} />}
          <IconShoppingCart stroke={2} />
          <IconUserCircle stroke={2} />
        </div>
      </div>
    </div>
  );
};

export default Header;
