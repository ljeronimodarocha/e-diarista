import Advantages from "@patials/index/_advantages";
import Presentation from "@patials/index/_presentaion";
import type { GetStaticProps, NextPage } from "next";
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
      <Advantages />
    </div>
  );
};

export default Index;
