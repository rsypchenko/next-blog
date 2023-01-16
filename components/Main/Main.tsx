import SocialMedia from "../SocialMedia";
import { Avatar } from './Avatar';

export const Main = () => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:flex-row pt-20 sm:p-2">
      <Avatar />

      <div className="w-full sm:w-1/2 pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
          Hello, I am Frontend Developer
        </h1>
        <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
          <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
            <p className="font-body text-lg uppercase text-white">
              Let&apos;s connect
            </p>
            <div className="hidden sm:block">
              <i className="bx bx-chevron-right text-3xl text-yellow"></i>
            </div>
          </div>
          <SocialMedia primary={true} />
        </div>
      </div>
    </div>
  );
};
