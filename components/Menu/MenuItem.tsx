import Link from "next/link";

export const MenuItem = ({ text, linkTo }: any) => {
  return (
    <li className="group pl-6">
      <Link href={linkTo}>
        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
          {text}
        </span>
      </Link>

      <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
    </li>
  );
};
