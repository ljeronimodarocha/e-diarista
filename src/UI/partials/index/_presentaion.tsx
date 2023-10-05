import {
  ContainerStyled,
  SectionButton,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "./_presentaion.styled";

const Presentation: React.FC = () => {
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
          Teste
        </SectionButton>
      </ContainerStyled>
    </SectionContainer>
  );
};

export default Presentation;
