import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from "react";

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu= ()=>{
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className=" mx-auto mt-3 w-full h-[70px] px-2 fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 mt-1 bg-red">
      <div className="flex justify-between w-full mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen?"sm:block":"sm:hidden"} lg:block`}>
            <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden bg-black item-center justify-center align-center rounded-full border-[0.5px] border-orange">
  
        <button className="text-2xl border border-orange rounded-full flex justify-center align-center p-5 text-white" onClick={toggleMenu}>
            <GiHamburgerMenu/>
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;