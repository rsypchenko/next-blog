import { SkillsItem } from "./SkillsItem";

export const Skills = () => {
  return (
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <SkillsItem delay={0} skill="JavaScript" percentage="95%" />
      <SkillsItem delay={0.2} skill="React" percentage="90%" />
      <SkillsItem delay={0.4} skill="NodeJs" percentage="50%" />
      <SkillsItem delay={0.6} skill="TypeScript" percentage="75%" />
    </div>
  );
};
