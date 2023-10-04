import { Container, ListItem, Typography, styled } from "@mui/material";
import { PropsWithChildren } from "react";
//${({ theme }) => theme}
export const FooterContainer = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

export const FooterGrid = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const FooterTitle = styled((props: PropsWithChildren) => (
  <Typography variant="body2" component="h2" {...props} />
))`
  font-weight: bold;
`;

export const FooterListItem = styled((props: PropsWithChildren) => (
  <ListItem disableGutters {...props} />
))``;
