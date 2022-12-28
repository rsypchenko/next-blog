import { SkillsItem } from "./SkillsItem";

import react from "../../public/react-logo.svg";
import next from "../../public/next-icon.svg";
import ts from "../../public/ts-logo.svg";
import js from "../../public/js-logo.svg";
import nodejs from '../../public/node-logo.svg';
import git from '../../public/git.svg';

export const Skills = () => {
  return (
    <div id="skills" className="container mx-auto py-16 md:py-20">
      <h2 className="text-center font-header text-3xl font-semibold uppercase text-indigo-500 sm:text-5xl lg:text-6xl">
        Here&apos;s what I&apos;m good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the tech skills list
      </h3>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <SkillsItem title="JavaScript" description="Extensive experience including ES6 and modern stack" icon={js} />
        <SkillsItem title="React.js" description="Extensive experience including libraries like Redux.js, Redux Toolkit" icon={react} />
        <SkillsItem title="Next.js" description="Solid knowledge and more than 1 year experience" icon={next} />
        <SkillsItem title="Node.js" description="Basic understanding of Node.js principles" icon={nodejs} />
        <SkillsItem title="TypeScript" description="Solid knowledge and more than 2 years experience" icon={ts} />
        <SkillsItem title="Git" description="Extensive experienve and more than 5 years" icon={git} />
      </div>
    </div>
  );
};
