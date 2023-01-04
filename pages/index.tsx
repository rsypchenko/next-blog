import Head from "next/head";
import Image from "next/image";
import { Dosis } from "@next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

import logo from "../public/avatar.jpg";

import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
// import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";
import Blog from "../components/Blog/Blog";

import styles from '../styles/main.module.css';

export default function Home({ posts }: any) {
  console.log(posts)
  return (
    <>
      <Head>
        <title>RS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={dosis.style}>
        <Menu />
        <div className={"relative z-0 bg-cover bg-center bg-no-repeat py-8 " + styles.bg}>
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-indigo-600 to-violet-500 bg-cover bg-center bg-no-repeat opacity-50"></div>

          <div className="mx-auto container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <Image
                src={logo}
                className="h-56 w-56 border-8 object-cover rounded-full z-10 shadow-2xl"
                alt="author"
              />
              <div className="w-full sm:w-1/2 pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                  Hello, I am Frontend Developer
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">
                      Let&apos;s connect
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                    </div>
                  </div>
                  <SocialMedia primary={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <About />

        <Skills/>

        {/* <Contacts /> */}

        <Blog posts={posts} />

        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps () {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@r.sipchenko')
  const json = await res.json()
  return { props: { posts: json.items } }
}
