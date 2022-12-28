import logo from "../../public/logo.png";
import Image from "next/image";
import { MenuItem } from "./MenuItem";
import { DownloadButton } from "./DownloadButton";

export const Menu = () => {
  return (
    <div className="w-full z-50 top-0 py-3 px-5 sm:py-5 absolute">
      <div className="flex container mx-auto items-center justify-between">
        <Image src={logo} alt="logo" className="w-24" />
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <MenuItem linkTo={'#about'} text="About" />
            <MenuItem linkTo={'#skills'} text="Tech Skills" />
            <MenuItem linkTo={'#skills'} text="blog" />
            <MenuItem linkTo={'#skills'} text="Contact" />
          </ul>
        </div>

        <DownloadButton />
      </div>
    </div>
  );
};
