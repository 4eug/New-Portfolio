import Head from "next/head";
import Nav from "../components/NavBar/Nav";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CustomCursor } from "../components/CustomCursor";
import SideBar from "../components/NavBar/sideBar";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <CustomCursor />
      <Head>
        <title>4eug Portfolio</title>
        <meta name="description" content="Developed by Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <SideBar sideBar={sideBar} />
    </>
  );
}
