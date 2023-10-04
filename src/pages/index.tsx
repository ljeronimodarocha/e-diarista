import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../UI/styles/Home.module.css";
import Presentation from "@patials/index/_presentaion";
//parei modulo 9 aula 12, começar a 13

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "",
    },
  };
};

const Index: NextPage<{ title: string }> = (props) => {
  return (
    <div>
      <Presentation />
    </div>
  );
};

export default Index;
