import Head from "next/head";
import { useRouter } from "next/router";
import Button from "@/components/button/button";
import styles from "@/styles/Index.module.css";
import { ReactNode } from "react";
import { NextPage } from "next";

interface IndexProps {
  title: string;
  children: ReactNode;
}

const Index: NextPage<IndexProps> = ({ title, children }) => {
  const router = useRouter();

  const navigateToSignup = () => {
    router.push("/signup");
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="コーディング試験アプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/heart.png" />
      </Head>
      <main className={styles.main}>
        {children}
        <div className={styles.buttonContainer}>
          <Button
            text="サインアップ"
            onClick={navigateToSignup}
          />
          <Button
            text="サインイン"
            onClick={navigateToLogin}
          />
        </div>
      </main>
    </>
  );
};

export default Index;
