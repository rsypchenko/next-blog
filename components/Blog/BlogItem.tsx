import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

interface Props {
  post: {
    link: string;
    thumbnail: string;
    title: string;
    categories: string[];
  };
}

export const BlogItem = ({ post }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.a
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      href={post.link}
      className="shadow hover:shadow-2xl duration-300 easy-in-out"
      target={"_blank"}
      rel="noreferrer"
    >
      <div className="group relative h-72">
        <div className="relative overflow-hidden">
          <img
            src={post.thumbnail}
            alt="image"
            className="h-72 w-full object-cover hover:scale-110 ease-in-out duration-300"
          />
        </div>

        {/* <span className="absolute inset-0 block bg-gradient-to-b from-indigo-800 to-indigo-500 bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span> */}
        {/* <span className="absolute hover:scale-110 hover:bg-white hover:text-indigo-500 ease-in duration-300 right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
          Read More
        </span> */}
      </div>
      <div className="flex flex-col justify-between h-44 bg-white py-6 px-5 xl:py-2">
        <span className="block font-body text-lg font-semibold text-black">
          {post.title}
        </span>
        <div className="block pt-2 font-body text-grey-20">
          {post.categories.map((category: string) => (
            <span
              key={category}
              className="inline-block bg-grey-50 rounded-full border-2 px-3 py-1 text-sm font-semibold text-grey-20 mr-2 mb-2"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};
