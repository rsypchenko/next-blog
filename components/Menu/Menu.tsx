import logo from '../../public/logo.png';
import Image from "next/image";
import { MenuItem } from './MenuItem';

export const Menu = ({ font }: any) => {
  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container mx-auto flex items-center justify-between">
        <div style={font}>
          <Image src={logo} alt="logo" className='w-24' />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <MenuItem text="About" />
            <MenuItem text="Tech Skills" />
            <MenuItem text="Experience" />
            <MenuItem text="Contact" />
          </ul>
        </div>

        <div className="flex">
            <button className='text-white b-2 shadow-xl px-4 py-2 border-2 uppercase'>Download CV</button>
        </div>
        <div className="block lg:hidden">
          <button>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
