export const MenuItem = ({ text }: any) => {
  return (
    <li className="group pl-6">
      <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
        {text}
      </span>

      <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
    </li>
  );
};