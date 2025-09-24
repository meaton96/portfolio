import { Container, Typography } from "@mui/material";

const AboutSection = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h5" fontWeight={600} gutterBottom>About Me</Typography>
    <Typography>
      I’m a data science master’s student at RIT with a background in game
      design and software engineering. My focus is on data engineering,
      machine learning, and logistics optimization. I enjoy building tools
      that blend technical depth with real-world impact.
    </Typography>
  </Container>
);

export default AboutSection;
