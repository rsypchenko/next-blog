import logo from "../../public/logo.png";
import Image from "next/image";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <div className="w-full z-50 top-0 py-3 px-5 sm:py-5 absolute">
      <div className="flex container mx-auto items-center justify-between">
        <Image src={logo} alt="logo" className="w-24" />
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <MenuItem text="About" />
            <MenuItem text="Tech Skills" />
            <MenuItem text="blog" />
            <MenuItem text="Contact" />
          </ul>
        </div>

        <div className="flex">
          <button className="text-white b-2 shadow-xl px-4 py-2 border-2 uppercase">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
