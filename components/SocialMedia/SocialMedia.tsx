import { Linkedin, Github, Twitter } from "./";

interface Props {
  primary: boolean;
}

export const SocialMedia = ({ primary }: Props) => {
  return (
    <div className="flex items-center justify-center pt-5 sm:justify-start sm:pl-0 sm:pt-0">
      <div className="flex">
        <Linkedin
          href="https://www.linkedin.com/in/sypchenko/"
          primary={primary}
        />
        <Github href="https://github.com/rsypchenko" primary={primary} />

        <Twitter href="https://twitter.com/rsypchenko" primary={primary} />
      </div>
    </div>
  );
};
