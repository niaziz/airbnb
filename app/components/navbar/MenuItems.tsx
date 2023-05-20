"use client";
import React from "react";

interface MenuItemsProps {
  onClick: () => void;
  lebal: string;
}

type Props = {};

const MenuItems: React.FC<MenuItemsProps> = ({ onClick, lebal }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {lebal}
    </div>
  );
};

export default MenuItems;
