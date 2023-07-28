import { useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navb, setNavb] = useState(false);

  const handleNav = () => {
    setNavb(!navb);
  };

  return (
    <div className=" flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
      <Link to={"/"}>
        <img src={logo} alt="logo" width="110" />
      </Link>
      <ul className="hidden md:flex">
        <Link to={"/product"}>
          <li className="p-4">Product</li>
        </Link>
        <Link to={"/contact"}>
          <li className="p-4">Contact</li>
        </Link>
        <Link to={"/about"}>
          <li className="p-4">About</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {navb ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={navb ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-40 " : "fixed left-[-100%]"}>
        <Link to={"/"}>
          <img src={logo} alt="logo" width="110" />
        </Link>
        <ul className=" uppercase p-2">
          <Link to={"/product"}>
            <li className="p-3 border-b border-b-gray-900">Product</li>
          </Link>
          <Link to={"/contact"}>
            <li className="p-3 border-b border-b-gray-900">Contact</li>
          </Link>
          <Link to={"/about"}>
            <li className="p-3">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
