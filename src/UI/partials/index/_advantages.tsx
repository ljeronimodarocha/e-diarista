import { Container, ListItem, ListItemAvatar } from "@mui/material";
import {
  AvatarStyled,
  GradientBackground,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
} from "./_advantages.style";

const Advantages = () => {
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-diarista?</SectionTitle>
        <ListStyle>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate" />
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 proffisinais esperando por você!"}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate" />
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 proffisinais esperando por você!"}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate" />
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 proffisinais esperando por você!"}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate" />
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 proffisinais esperando por você!"}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate" />
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 proffisinais esperando por você!"}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled>
                <i className="twf-certificate" />
              </AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 proffisinais esperando por você!"}
            />
          </ListItem>
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};
export default Advantages;
