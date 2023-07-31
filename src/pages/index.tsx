import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Login from "./Login";

const index = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>AuthGuard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex m-auto items-center justify-center min-h-screen">
        <Login />
      </main>
    </div>
  );
};

export default index;
