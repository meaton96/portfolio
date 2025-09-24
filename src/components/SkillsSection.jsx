import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const SkillsSection = ({ skills, loading }) => (
  <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h5" align="center" fontWeight={600} gutterBottom>Skills</Typography>
      {loading ? (
        <Typography align="center" color="text.secondary">Loading skills…</Typography>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {skills.map((skill) => (
            <Grid item xs={6} md={3} key={skill?.id || skill}>
              <Card variant="outlined">
                <CardContent sx={{ textAlign: 'center', fontWeight: 500 }}>
                  {skill?.name || skill}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  </Box>
);

export default SkillsSection;
