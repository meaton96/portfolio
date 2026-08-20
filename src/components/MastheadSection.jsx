import { Box, Container, Typography, Stack, Link, Divider } from "@mui/material";

const metaSx = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "0.72rem",
  letterSpacing: "0.06em",
  color: "text.secondary",
};

const MastheadSection = () => (
  <Box id="top" component="header" sx={{ pt: { xs: 4, md: 6 }, pb: 5 }}>
    <Container maxWidth="md">
      <Stack direction="row" justifyContent="space-between" sx={metaSx}>
        <span>ROCHESTER, NY</span>
        <span>M.S. DATA SCIENCE — RIT</span>
      </Stack>
      <Divider sx={{ borderBottomWidth: 2, borderColor: "text.primary", mt: 1.5, mb: 4 }} />

      <Typography variant="h1" gutterBottom>
        Michael Eaton
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontStyle: "italic",
          fontSize: "1.15rem",
          color: "primary.main",
          mb: 3,
        }}
      >
        Data science &amp; software engineering
      </Typography>

      <Typography sx={{ maxWidth: "62ch", mb: 4 }}>
        I'm a data science master's student at RIT with a background in game design
        and software engineering. My focus is on data engineering, machine learning,
        and logistics optimization — building tools that blend technical depth with
        real-world impact. This page is a working record of that research and the
        software built alongside it.
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ rowGap: 1 }}>
        <Link href="#work" underline="always" color="primary">
          Selected work ↓
        </Link>
        <Link
          href="/eaton-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="primary"
        >
          Résumé ↗
        </Link>
        <Link
          href="https://github.com/meaton96"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="primary"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mike-eaton-ds"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="primary"
        >
          LinkedIn
        </Link>
      </Stack>
    </Container>
  </Box>
);

export default MastheadSection;
