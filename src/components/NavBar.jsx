import { Box, Container, Stack, Link } from "@mui/material";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Figures", href: "#figures" },
  { label: "Résumé", href: "/eaton-resume.pdf" },
];

const NavBar = () => (
  <Box
    component="nav"
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      bgcolor: "background.default",
      borderBottom: "1px solid",
      borderColor: "divider",
    }}
  >
    <Container maxWidth="md">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 1.5 }}
      >
        <Link
          href="#top"
          underline="none"
          color="text.primary"
          sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em" }}
        >
          M. EATON
        </Link>
        <Stack direction="row" spacing={3}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="hover"
              color="text.secondary"
              target={link.href.startsWith("/") ? "_blank" : undefined}
              rel={link.href.startsWith("/") ? "noopener noreferrer" : undefined}
              sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default NavBar;
