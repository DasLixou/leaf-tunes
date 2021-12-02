import Head from "next/head";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>ITunes Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex">
        <Sidebar />
        <Body />
      </main>
    </div>
  );
};

export default Home;
