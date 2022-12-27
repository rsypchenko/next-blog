import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

export const About = () => {
  return (
    <div className="bg-grey-50">
      <div className="container mx-auto flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-indigo-600 sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Roman Sypchenko, a Frontend Developer
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
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="/">
                <BsLinkedin className="text-2xl text-indigo-500 hover:text-indigo-800 ml-2" />
              </a>
              <a href="/">
                <BsGithub className="text-2xl text-indigo-500 hover:text-indigo-800 ml-2" />
              </a>
              <a href="/">
                <BsTwitter className="text-2xl text-indigo-500 hover:text-indigo-800 ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML &amp; CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-indigo-500"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                JavaScript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full">
              <div
                className="h-3 rounded-full  bg-indigo-500"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                NodeJS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full">
              <div
                className="h-3 rounded-full bg-indigo-500"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Figma
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full">
              <div
                className="h-3 rounded-full bg-indigo-500"
                style={{ width: "91%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
