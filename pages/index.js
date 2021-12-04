import Head from "next/head";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
import { dummyData } from "../lib/dummyData";

const Home = ({ data }) => {
  return (
    <div className="">
      <Head>
        <title>ITunes Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex space-x-2 overflow-hidden">
        <Sidebar />
        <Body playlistData={data} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const dummyDataUSE = true;
  const numberOfResults = 10;

  let data;

  if (!dummyDataUSE) {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=${numberOfResults}&part=snippet&playlistId=PLRBp0Fe2GpgmgoscNFLxNyBVSFVdYmFkq&key=${process.env.API_KEY}`
    );
    data = await res.json();
  }

  return {
    props: {
      data: !dummyDataUSE ? data : dummyData
    }
  };
}
