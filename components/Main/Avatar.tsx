import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/avatar.jpg";

export const Avatar = () => {
  return (
    <div className="svg-container w-56 h-56 rounded-full overflow-hidden relative">
      <Image
        src={logo}
        className="absolute h-56 object-cover z-10"
        alt="author"
      />
      <svg
        className="absolute z-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <motion.g>
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
            }}
            cx="100"
            cy="100"
            r="50%"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.circle>
        </motion.g>
      </svg>
    </div>
  );
};
