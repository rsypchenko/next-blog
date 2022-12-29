import Image from "next/image";

interface Props {
    title: string;
    description: string;
    icon: any;
}

export const SkillsItem = ({ title, description, icon }: Props) => {
  return (
    <div className="group rounded px-8 py-12 shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:shadow-indigo-200">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div>
          <Image src={icon} alt="icon" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
          { title }
        </h3>
        <p className="text-grey pt-4">
          { description }
        </p>
      </div>
    </div>
  );
};
