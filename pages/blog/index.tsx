import Head from "next/head";
import { Dosis } from "@next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

import Footer from "../../components/Footer";
import Blog from "../../components/Blog";
import Menu from "../../components/Menu";

interface Props {
  posts: Array<any>;
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>RS - Frontend</title>
        <meta name="description" content="RS - Frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={dosis.style} className="pt-12">
        <Menu secondary />

        <Blog title={'Blog'} posts={posts} />

        <Footer secondary />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@r.sipchenko"
  );
  const json = await res.json();
  const posts = json?.items ?? null;
  return { props: { posts } };
}