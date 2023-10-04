import { Box, List, Typography } from "@mui/material";
import {
  FooterContainer,
  FooterGrid,
  FooterListItem,
  FooterTitle,
} from "./Footer.style";
import Link from "UI/components/navigation/link/Link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Encontre um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Seja um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Por que usar o E-Diarista?
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Principais Dúvidas
              </Link>
            </FooterListItem>
          </List>
        </div>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>
        <FooterTitle>Baixa nossos aplicativos</FooterTitle>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
