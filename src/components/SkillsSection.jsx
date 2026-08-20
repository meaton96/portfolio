import { Box, Container, Typography, Divider } from "@mui/material";

const SkillsSection = ({ skills, loading }) => (
  <Box id="skills" sx={{ py: { xs: 5, md: 6 } }}>
    <Container maxWidth="md">
      <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 2 }}>
        Keywords
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {loading ? (
        <Typography color="text.secondary">Loading skills…</Typography>
      ) : (
        <Typography sx={{ maxWidth: "70ch" }}>
          {skills.map((skill) => (skill?.name || skill)).join(", ")}
        </Typography>
      )}
    </Container>
  </Box>
);

export default SkillsSection;
