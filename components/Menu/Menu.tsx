import logo from "../../public/logo.png";
import Image from "next/image";
import { MenuItem } from "./MenuItem";
import { DownloadButton } from "./DownloadButton";
import Link from "next/link";

import { useScrollspy } from "./useScrollspy";
import { useEffect } from "react";

interface Props {
  secondary?: boolean;
}

export const Menu = ({ secondary }: Props) => {
  const activeMenu = useScrollspy(["about", "skills", "blog"], 20);
  const bg = secondary
    ? "inset-0 z-20 bg-gradient-to-r from-indigo-600 to-violet-500 opacity-100"
    : "bg-transparent";

  useEffect(() => {
    // location.hash = `#${activeMenu}`;
  }, [activeMenu]);

  return (
    <div className={`w-full z-50 top-0 py-3 px-5 sm:py-5 absolute ${bg} h-32`}>
      <div className="flex container mx-auto items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-24" />
        </Link>

        <div className="hidden sm:block">
          <ul className="flex items-center">
            <MenuItem linkTo={"#about"} text="About" />
            <MenuItem linkTo={"#skills"} text="Tech Skills" />
            {/* <MenuItem linkTo={"#blog"} text="Blog" /> */}
            {/* <MenuItem linkTo={"#contacts"} text="Contact" /> */}
          </ul>
        </div>

        <DownloadButton />
      </div>
    </div>
  );
};
