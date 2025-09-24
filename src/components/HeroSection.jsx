import { Box, Container, Typography, Stack, Button, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Mail } from "@mui/icons-material";

const HeroSection = () => (
  <Box sx={{ bgcolor: 'grey.900', color: 'common.white', py: 8 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>Michael Eaton</Typography>
      <Typography variant="h6" gutterBottom>Data Science &amp; Software Engineering</Typography>
      <Typography sx={{ maxWidth: 720, mx: 'auto', mb: 3 }}>
        Turning messy data into clean insights, and insights into decisions.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined">Resume</Button>
        <Button variant="outlined">Projects</Button>
        <Button variant="outlined">About</Button>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <IconButton color="inherit" aria-label="LinkedIn"><LinkedIn /></IconButton>
        <IconButton color="inherit" aria-label="GitHub"><GitHub /></IconButton>
        <IconButton color="inherit" aria-label="Email"><Mail /></IconButton>
      </Stack>
    </Container>
  </Box>
);

export default HeroSection;
