import React, { Fragment } from "react";
import Layout from "../components/Layout.js";
import CardCategoryPanel from "../components/CardCategoryPanel.js";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const Index = props => (
  <Layout>
    <CardCategoryPanel library={props.library} />
  </Layout>
);
Index.getInitialProps = async function() {
  //console.log("did into this initial props, but too late");
  const tmpPath = "https://api.myjson.com/bins/srb38";
  const dataPath = "http://127.0.0.1:2801/api/cardData";
  const res = await fetch(dataPath);
  const data = await res.json();
  return {
    library: data.library
  };
};

export default Index;
