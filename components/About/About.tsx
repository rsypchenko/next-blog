import SocialMedia from '../SocialMedia';
import { Skills } from "./Skills";

export const About = () => {
  return (
    <div className="bg-grey-50">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-0 py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-indigo-600 sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I&apos;m Roman Sypchenko, a Frontend Developer
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            As a senior frontend developer with over 8 years of experience, I am
            skilled in building responsive and intuitive user interfaces for web
            and mobile applications. I have a strong understanding of modern
            frontend technologies, including HTML, CSS, JavaScript, and various
            frameworks such as React and Angular. I am also experienced in
            working with designers and back-end developers to ensure seamless
            integration and delivery of high-quality products.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <SocialMedia primary={false}/>
          </div>
        </div>
       <Skills/>
      </div>
    </div>
  );
};
