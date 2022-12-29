import SocialMedia from "../SocialMedia";

export const Footer = () => {
  return (
    <div className="bg-indigo-500">
      <div className="container mx-auto flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center text-white md:text-left">
          © Copyright {new Date().getFullYear()}. All right reserved.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <SocialMedia primary={true} />
        </div>
      </div>
    </div>
  );
};
