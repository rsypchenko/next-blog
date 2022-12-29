import { SkillsItem } from "./SkillsItem";

import react from "../../public/react-logo.svg";
import next from "../../public/next-icon.svg";
import ts from "../../public/ts-logo.svg";
import js from "../../public/js-logo.svg";
import nodejs from '../../public/node-logo.svg';
import css from '../../public/css-icon.jpeg';

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
        <SkillsItem title="JavaScript" description="Including TypeScript, ES6 and modern stack including building tools like Webpack, Vite, Parcel" icon={js} />
        <SkillsItem title="React.js" description="Including modern React 18 with Hooks including libraries like Redux, Redux Toolkit, React Router, React Hook Form" icon={react} />
        <SkillsItem title="Next.js" description="Solid knowledge including latest version" icon={next} />
        <SkillsItem title="Node.js" description="Basic understanding of Node.js principles" icon={nodejs} />
        <SkillsItem title="TypeScript" description="Solid understanding using with React.js and Vanila JavaScript" icon={ts} />
        <SkillsItem title="HTML &amp; CSS" description="Including css frameworks like Tailwind CSS, Bootstrap, Material UI" icon={css} />
      </div>
    </div>
  );
};
