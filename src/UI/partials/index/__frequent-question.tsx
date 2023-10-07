import React from "react";
import {
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  Wave,
} from "./__frequent-question.styled";

const FrequestQuestion = () => {
  return (
    <SectionContainer>
      <Wave src={"/img/home/waves.svg"} />
      <SectionTitle>Ainda está com dúvida</SectionTitle>
      <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>
    </SectionContainer>
  );
};

export default FrequestQuestion;
