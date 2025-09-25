import {
  Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Button
} from "@mui/material";

const ProjectsSection = ({ projects, loading, error }) => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
      Projects
    </Typography>

    {error && <Typography align="center" color="error.main">{error}</Typography>}
    {loading ? (
      <Typography align="center" color="text.secondary">Loading projects…</Typography>
    ) : (
      <Grid
        container
        spacing={3}
        sx={{ mt: 2 }}
        alignItems="stretch"
      >
        {projects.map((proj) => (
          <Grid
            
            key={proj.id || proj.title}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ display: "flex" }}   // let the Card fill the grid cell
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              {proj.img && (
                <CardMedia
                  component="img"
                  image={`/${proj.img}`}
                  alt={proj.title}
                  sx={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
              )}

              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {proj.title}
                </Typography>

                {proj.subtitle && (
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
                    {proj.subtitle}
                  </Typography>
                )}

                {proj.content && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {proj.content}
                  </Typography>
                )}

                <Stack direction="row" spacing={1} sx={{ mt: "auto" }}>
                  {(proj.showRepoLink && proj.repoLink) && (
                    <Button size="small" component="a" href={proj.repoLink} target="_blank" rel="noreferrer">
                      Repo
                    </Button>
                  )}
                  {(proj.showBuildLink && proj.buildLink) && (
                    <Button
                      size="small"
                      variant="outlined"
                      component="a"
                      href={proj.buildLink.startsWith("http") ? proj.buildLink : `/${proj.buildLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  </Container>
);

export default ProjectsSection;
