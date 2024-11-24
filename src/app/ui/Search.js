'use client'
import { useSearchParams , usePathname, useRouter } from 'next/navigation';
export default function Search( placeholder ) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    console.log(term);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
      replace(`${pathname}?${params.toString()}`);
    }
  }
 
  return (
    <div>
      <label>
        Search
      </label>
    </div>
  );
}