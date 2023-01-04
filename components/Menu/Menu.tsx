import logo from "../../public/logo.png";
import Image from "next/image";
import { MenuItem } from "./MenuItem";
import { DownloadButton } from "./DownloadButton";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="w-full z-50 top-0 py-3 px-5 sm:py-5 absolute">
      <div className="flex container mx-auto items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-24" />
        </Link>

        <div className="hidden sm:block">
          <ul className="flex items-center">
            <MenuItem linkTo={"#about"} text="About" />
            <MenuItem linkTo={"#skills"} text="Tech Skills" />
            <MenuItem linkTo={"#blog"} text="blog" />
            {/* <MenuItem linkTo={"#contacts"} text="Contact" /> */}
          </ul>
        </div>

        <DownloadButton />
      </div>
    </div>
  );
};
