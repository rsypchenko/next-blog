import React, { useEffect } from "react";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
interface Props {
  title: string;
  description: string;
  icon: any;
}

export const SkillsItem = ({ title, description, icon }: Props) => {
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
      className="group rounded px-8 py-12 shadow-lg hover:shadow-xl hover:scale-110"
    >
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div>
          <Image src={icon} alt="icon" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
          {title}
        </h3>
        <p className="text-grey pt-4">{description}</p>
      </div>
    </motion.div>
  );
};
