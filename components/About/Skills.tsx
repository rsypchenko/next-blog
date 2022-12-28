import { SkillsItem } from "./SkillsItem";

export const Skills = () => {
  return (
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <SkillsItem skill="JavaScript" percentage="95%"/>
      <SkillsItem skill="React" percentage="80%"/>
      <SkillsItem skill="NodeJs" percentage="50%"/>
      <SkillsItem skill="TypeScript" percentage="75%"/>
    </div>
  );
};
