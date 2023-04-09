import SocialMedia from "../SocialMedia";
interface Props {
  secondary?: boolean;
}

export const Footer = ({ secondary }: Props) => {
  const color = secondary ? "bg-cyan-500" : "bg-indigo-500";

  return (
    <div className={color}>
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
