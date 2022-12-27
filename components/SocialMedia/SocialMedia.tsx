import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

interface Props {
  primary: boolean;
}

export const SocialMedia = ({ primary }: Props) => {
  const textColor = primary ? "text-white" : "text-indigo-500";
  const hoverColor = primary ? "hover:text-slate-300" : "hover:text-indigo-800";

  return (
    <div className="flex items-center justify-center pt-5 sm:ml-4 sm:justify-start sm:pl-0 sm:pt-0">
      <div className="flex">
        <BsLinkedin className={`text-2xl ${textColor} ${hoverColor}`} />

        <BsGithub className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />

        <BsTwitter className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />
      </div>
    </div>
  );
};
