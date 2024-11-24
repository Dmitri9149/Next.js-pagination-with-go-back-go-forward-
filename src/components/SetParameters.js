'use client'
import styles from "../../styles/Home.module.css";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import { useSearchParams , usePathname, useRouter } from 'next/navigation';

export default function SetParameters({dataLength, pageSize, currentPage}) {
//  const [currentPage, setCurrentPage] = useState(1);


  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = Number(searchParams.get('page'))

  const onPageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set('page', `${page}`);
    } else {
      params.delete('page');
    }
    console.log("The params ", params.get('page'));
    replace(`${pathname}?${params.toString()}`);
  };


  return (
    <div className={styles.container}>
      <Pagination
        items={dataLength} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  );
}