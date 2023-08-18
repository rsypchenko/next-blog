import Link from "next/link";
import styles from "./menu.module.css";

export const MenuItem = ({ text, linkTo }: any) => {
  return (
    <li
      className={`group ml-10 font-header font-semibold uppercase text-white ${styles.link} pt-0.5`}
    >
      <Link href={linkTo} scroll={false}>
        {text}
      </Link>
    </li>
  );
};
