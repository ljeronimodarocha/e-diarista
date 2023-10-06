import { useEffect, useState } from "react";
import {
  BottomButton,
  ContainerStyled,
  SectionButton,
  SectionContainer,
  SectionPictureContainer,
  SectionSubtitle,
  SectionTitle,
} from "./_presentaion.styled";

const Presentation: React.FC = () => {
  const [cleanerPicture, setCleanerPicture] = useState("");
  useEffect(() => {
    const newCleanerPicture =
      Math.random() < 0.5
        ? "/img/home/housekeeper.png"
        : "/img/home/janitor.png";
    setCleanerPicture(newCleanerPicture);
  }, []);
  return (
    <SectionContainer>
      <ContainerStyled>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>
        <SectionSubtitle>
          São mais de 5.000profissionais esperando por você!
        </SectionSubtitle>
        <SectionButton href="/" mui={{ variant: "contained" }}>
          Encontrar um(a) diarista
        </SectionButton>
        <SectionPictureContainer>
          <img src={cleanerPicture} alt="" />
        </SectionPictureContainer>
      </ContainerStyled>
      <BottomButton>
        <i className="twf-caret-down" />
      </BottomButton>
    </SectionContainer>
  );
};

export default Presentation;
