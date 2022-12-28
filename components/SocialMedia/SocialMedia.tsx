import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

interface Props {
  primary: boolean;
}

export const SocialMedia = ({ primary }: Props) => {
  const textColor = primary ? "text-white" : "text-indigo-500";
  const hoverColor = primary ? "hover:text-slate-300" : "hover:text-indigo-800";

  return (
    <div className="flex items-center justify-center pt-5 sm:ml-4 sm:justify-start sm:pl-0 sm:pt-0">
      <div className="flex">
        <Link href="https://www.linkedin.com/in/sypchenko/" legacyBehavior>
          <a target={"_blank"}>
            <BsLinkedin className={`text-2xl ${textColor} ${hoverColor}`} />
          </a>
        </Link>

        <Link href="https://github.com/rsypchenko" legacyBehavior>
          <a target={"_blank"}>
            <BsGithub className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />
          </a>
        </Link>

        <Link href="https://twitter.com/RSypchenko" legacyBehavior>
          <a target={"_blank"}>
            <BsTwitter className={`text-2xl ml-4 ${textColor} ${hoverColor}`} />
          </a>
        </Link>
      </div>
    </div>
  );
};
