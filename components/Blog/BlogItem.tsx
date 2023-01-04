export const BlogItem = ({ post }: any) => {
  return (
    <a href={post.link} className="shadow" target={"_blank"}>
      <div className="group relative">
        <img src={post.thumbnail} alt="image" />
        <span className="absolute inset-0 block bg-gradient-to-b from-indigo-800 to-indigo-500 bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
        <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
          Read More
        </span>
      </div>
      <div className="flex flex-col justify-between h-44 bg-white py-6 px-5 xl:py-2">
        <span className="block font-body text-lg font-semibold text-black">
          {post.title}
        </span>
        <div className="block pt-2 font-body text-grey-20">
          {post.categories.map((category: any) => (
            <span className="inline-block bg-grey-50 rounded-full border-2 px-3 py-1 text-sm font-semibold text-grey-20 mr-2 mb-2">
              {category}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
