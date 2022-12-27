import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

interface Props {
  primary: boolean;
}

export const SocialMedia = ({ primary }: Props) => {
  const textColor = primary ? "text-white" : "text-indigo-500";
  const hoverColor = primary ? "hover:text-slate-300" : "hover:text-indigo-800";

  return (
    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
      <BsLinkedin className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />

      <BsGithub className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />

      <BsTwitter className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />
    </div>
  );
};
