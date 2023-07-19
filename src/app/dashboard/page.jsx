"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from 'swr'

function DashBoard() {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts`,
  //       {
  //         cache: "no-store",
  //       }
  //     );

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);
  // console.log(data)

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  console.log(data)

  return <div className={styles.container}>DashBoard</div>;
}

export default DashBoard;
 