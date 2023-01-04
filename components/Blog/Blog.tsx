import { BlogItem } from "./BlogItem";

const Blog = ({ posts }: any) => {
  if (!posts) return null;
  
  return (
    <div className="bg-grey-50" id="blog">
      <div className="container mx-auto py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-indigo-500 sm:text-5xl lg:text-6xl">
          I also like to write
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Check out my latest posts!
        </h4>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          {posts.map((post: any) => (
            <BlogItem post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
