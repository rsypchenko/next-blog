import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";

interface Props {
  href: string;
  primary: boolean;
}

export const Twitter = ({ href, primary }: Props) => {
  const textColor = primary ? "text-white" : "text-indigo-500";
  const hoverColor = primary ? "hover:text-white" : "hover:text-indigo-800";
  return (
    <Link href={href} legacyBehavior>
      <motion.div whileHover={{ scale: 1.3 }} variants={{}}>
        <a target={"_blank"}>
          <BsTwitter className={`text-3xl ml-4 ${textColor} ${hoverColor}`} />
        </a>
      </motion.div>
    </Link>
  );
};
