import Head from "next/head";
import { Dosis } from "@next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

import Main from "../components/Main";
import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

import styles from "../styles/main.module.css";

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
      <main style={dosis.style}>
        <Menu />
        <div
          className={
            "relative h-screen sm:h-auto z-0 bg-cover bg-center bg-no-repeat py-8 " + styles.bg
          }
        >
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-indigo-600 to-violet-500 bg-cover bg-center bg-no-repeat opacity-50"></div>
          <div className="mx-auto container relative z-20 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <Main />
          </div>
        </div>

        <About />

        <Skills />

        <Blog posts={posts} />

        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@r.sipchenko"
  );
  const json = await res.json();
  const posts = json?.items?.slice(0, 6) ?? null;
  return { props: { posts } };
}
