import { Box, Container, Typography } from "@mui/material";

const FooterSection = () => (
  <Box sx={{ bgcolor: 'grey.900', color: 'common.white', py: 3, mt: 6 }}>
    <Container maxWidth="md">
      <Typography align="center">© {new Date().getFullYear()} Michael Eaton</Typography>
    </Container>
  </Box>
);

export default FooterSection;
