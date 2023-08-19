import { Skills } from "./Skills";
import { WhoAmI } from "./WhoAmI";

export const About = () => {
  return (
    <div id="about" className="bg-grey-50">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-0 py-16 md:py-10 lg:flex-row lg:py-20 lg:mb-20">
        <WhoAmI />
        <Skills />
      </div>
    </div>
  );
};
