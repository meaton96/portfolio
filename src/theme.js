import { createTheme } from "@mui/material";

const paper = "#EEEFE9";
const surface = "#F7F7F3";
const ink = "#23261F";
const muted = "#6B6E62";
const rule = "#C7C9BC";
const accent = "#33507A";
const accent2 = "#8A7B4E";

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: paper, paper: surface },
    text: { primary: ink, secondary: muted },
    divider: rule,
    primary: { main: accent },
    secondary: { main: accent2 },
  },
  shape: { borderRadius: 3 },
  typography: {
    fontFamily: '"Work Sans", system-ui, sans-serif',
    h1: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
      lineHeight: 1.08,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontWeight: 600,
      fontSize: "1.15rem",
    },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9rem", lineHeight: 1.6 },
    overline: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: "0.72rem",
      letterSpacing: "0.1em",
      lineHeight: 1,
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: "0.72rem",
      letterSpacing: "0.02em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        "::selection": { background: accent, color: surface },
      },
    },
    MuiLink: {
      defaultProps: { underline: "always" },
      styleOverrides: {
        root: { textUnderlineOffset: "3px", fontWeight: 500 },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          boxShadow: "none",
        },
        text: {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          padding: "4px 2px",
          "&:hover": { background: "transparent", textDecorationThickness: "2px" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "none" },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: rule } },
    },
  },
});

export default theme;
