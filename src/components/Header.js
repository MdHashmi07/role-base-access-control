import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleShowMenu } from "../utils/slices/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleEffect = () => {
    dispatch(toggleShowMenu());
  }
  return (
    <div className="flex justify-between px-4 py-3 shadow-lg">
      <div className="flex gap-3 items-center">
        <RxHamburgerMenu className="size-5 cursor-pointer" onClick={handleToggleEffect}/>
        <span className="font-bold text-lg">Admin Dashboard</span>
      </div>

      <div className="flex gap-1 items-center">
        <p className="font-semibold text-md">User Profile</p>
        <TiArrowSortedDown className="size-5 mt-1" />
      </div>
    </div>
  );
};

export default Header;
