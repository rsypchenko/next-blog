import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Props {
  skill: string;
  percentage: string;
}

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

export const SkillsItem = ({ skill, percentage }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className="flex items-end justify-between pt-6">
        <h4 className="font-body font-semibold uppercase text-black">
          {skill}
        </h4>
        <h3 className="font-body text-3xl font-bold text-primary">
          {percentage}
        </h3>
      </div>
      <div className="mt-2 h-3 w-full rounded-full bg-slate-300">
        <div
          className="h-3 rounded-full bg-indigo-500"
          style={{ width: percentage }}
        ></div>
      </div>
    </motion.div>
  );
};
