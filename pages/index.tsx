import Head from "next/head";
import { Dosis } from "@next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

import Main from "../components/Main";
import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

import Layout from "../components/Layout";

import styles from "../styles/main.module.css";

import flow from '../components/ui/flow.svg';

import Image from  "next/image";

interface Props {
  posts: Array<any>;
}

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <Head>
        <title>FrontendStackLab</title>
        <meta name="description" content="Welcome to FrontendStackLab your ultimate destination for mastering front-end development. Explore the latest trends, best practices, and innovative tools in the world of front-end technology. Start your journey to front-end excellence with us today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={dosis.style}>
        <Menu />
        <div className={styles.background}>
          {/* <div className="absolute inset-0 z-20 bg-gradient-to-r from-indigo-600 to-violet-500 bg-cover bg-center bg-no-repeat opacity-50"></div> */}
          <div className="mx-auto container relative z-20 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <Main />
          </div>
          {/* <Image src={flow} /> */}
        </div>

        <About />

        <Skills />

        {/* <Blog posts={posts} main /> */}

        <Footer />
      </main>
    </Layout>
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
