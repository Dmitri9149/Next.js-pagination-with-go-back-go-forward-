import styles from "../../styles/Home.module.css";
import Link from 'next/link';
import { forwardRef } from 'react';
import { useSearchParams , usePathname, useRouter } from 'next/navigation';

const Pagination = ( {items, pageSize, currentPage, onPageChange}) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

//  const searchParams = useSearchParams();
//  const pathname = usePathname();
//  const params = new URLSearchParams(searchParams);
//  const href = `${pathname}?${params.toString()}`

  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          > 
             <a 
                className={styles.pageLink} 
                onClick={() => onPageChange(page)}
                >
                {page}
              </a> 
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Pagination;