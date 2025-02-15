"use client";
import { Random } from "@/modules/random";
import Head from "next/head";

export default function RandomPage() {
  return (
    <>
      <Head>
        <title>Món ngẫu nhiênÏ</title>
      </Head>
      <Random />
    </>
  );
}
