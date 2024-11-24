import Home from "../../components/Home";

export default async function Page(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const params_result = await params;
  console.log("Page params ", params_result);
//
//  const query = searchParams?.query || '';
//  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <Home data={data}></Home>
    </main>
  )
}