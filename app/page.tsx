import Search from "../components/Search";
import Content from "../components/Content";

export default function Home() {
  return (
    <>
      <Search />
      <Content query={"Test"} />
    </>
  );
}
