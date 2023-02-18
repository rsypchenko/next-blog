import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Props {
  skill: string;
  percentage: string;
  delay: number;
}

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const SkillsItem = ({ skill, percentage, delay }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const width = parseInt(percentage);
      setWidth(width);
    }
  }, [controls, inView, percentage]);

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
        <motion.div
          className="h-3 rounded-full bg-indigo-500"
          animate={{ width: `${width}%` }}
          transition={{ type: "spring", duration: 2, delay: 1 + delay }}
        />
      </div>
    </motion.div>
  );
};
