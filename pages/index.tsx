import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="uday's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Ⓒ by Uday Vunnam</span>

        <span className={styles.logo}>
          <a
            href="https://www.linkedin.com/in/udayvunnam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin Logo"
              width={100}
              height={30}
            />
          </a>
          <a
            href="https://github.com/udayvunnam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="github Logo"
              width={100}
              height={35}
            />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=uday4vunnam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/gmail.svg" alt="gmail Logo" width={100} height={35} />
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
