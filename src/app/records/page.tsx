import Home from "../../components/Home";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <main>
      <Home data={data}></Home>
    </main>
  )
}