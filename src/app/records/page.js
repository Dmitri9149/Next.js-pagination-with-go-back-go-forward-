import Home from "../../components/Content";
import SetParameters from "../../components/SetParameters"

export default async function Page( {searchParams} ) {

  const params_result = await searchParams;
  console.log("Page params ", params_result);
  const page = params_result.page || '';
  const currentPage = Number(page) || 1;
  console.log("Current page ", currentPage);
  const pageSize = 10;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <main>
      <Home data={data} currentPage={currentPage} pageSize={pageSize}></Home>
      <SetParameters dataLength={data.length} pageSize={pageSize} currentPage={currentPage}></SetParameters>
    </main>
  )
}