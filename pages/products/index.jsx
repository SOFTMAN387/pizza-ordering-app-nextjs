
import Head from "next/head";
import axios from "axios";

import PizzaList from "../../components/PizzaList";
import { useState } from "react";
import AddButton from "../../components/AddButton";
import Add from "../../components/Add";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <>
      <Head>
        <title>SoftMan&#39;s Domino&#39;s</title>
        <meta name="description" content="Best Pizza shop in patna" />
        <meta
          name="softman"
          content="web-developer app-developer software-engineer"
        />
      </Head>
      {/* <Featured /> */}
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
