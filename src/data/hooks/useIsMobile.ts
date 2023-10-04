/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme, useMediaQuery } from "@mui/material";

export default function usIsMobile(): boolean {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile;
}
