import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Pagination from "../src/components/Pagination";
import { useState, useEffect } from "react";
import { paginate } from "../src/helpers/paginate";

export default function Home({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <strong>NextJS x Pagination</strong>
      </p>
      <p>
        Page: <span style={{ color: "red" }}>{currentPage}</span>
      </p>

      {paginatedPosts.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}

      <Pagination
        items={data.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data },
  };
};