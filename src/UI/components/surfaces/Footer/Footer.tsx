import { Box, List, Typography } from "@mui/material";
import {
  AppList,
  FooterContainer,
  FooterGrid,
  FooterListItem,
  FooterSocialList,
  FooterTitle,
  SocialButton,
  SocialContainer,
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
        <SocialContainer>
          <div>
            <FooterTitle>Baixa nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a href="" target="_blank" rel={"noopener noreferrer"}>
                  <img src="/img/logos/app-store.png" alt="AppStore" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel={"noopener noreferrer"}>
                  <img src="/img/logos/google-play.png" alt="Google Play" />
                </a>
              </li>
            </AppList>
          </div>
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterTitle>
              <FooterSocialList>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-facebook-f" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-instagram" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-youtube" />
                  </SocialButton>
                </FooterListItem>
              </FooterSocialList>
            </FooterTitle>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
