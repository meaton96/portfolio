import { Box, Container, Stack, Typography, Divider, Link } from "@mui/material";

const metaSx = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "0.72rem",
  letterSpacing: "0.04em",
  color: "text.secondary",
};

const FooterSection = () => (
  <Box component="footer" sx={{ py: 4 }}>
    <Container maxWidth="md">
      <Divider sx={{ mb: 2.5 }} />
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={1.5}>
        <Typography sx={metaSx}>
          Michael Eaton — Rochester, NY — {new Date().getFullYear()}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="https://github.com/meaton96"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={metaSx}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/mike-eaton-ds"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={metaSx}
          >
            LinkedIn
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default FooterSection;
