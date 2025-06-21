import Link from "next/link";
import { motion } from "framer-motion";

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: "FFFFFF",
    transition: { duration: 1, ease: "easeOut" },
  },
  initial: {
    strokeWidth: 2,
    pathLength: 1,
    stroke: "#FFFFFF",
    transition: { duration: 1, ease: "easeOut", delay: 1 },
  },
};

const buttonVariants = {
  default: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

export const DownloadButton = () => {
  return (
    <motion.div
      whileHover="hover"
      initial="default"
      animate="initial"
      className="text-white uppercase relative w-44"
      variants={buttonVariants}
    >
      <Link href="/cv.pdf" legacyBehavior>
        <a
          target={"_blank"}
          className="absolute top-1.5 inset-0 z-10 w-full h-full text-center select-none"
        >
          Download CV
        </a>
      </Link>
      <motion.svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={outlineVariants}
          strokeWidth="1"
          fill="none"
          stroke="gray"
          d="M 0, 0 H 100 V 20 H 0 Z"
        />
      </motion.svg>
    </motion.div>
  );
};
