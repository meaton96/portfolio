import { Box, Container, Typography, Divider, Grid, Link, Stack } from "@mui/material";

const VizGallerySection = ({ vizItems, loading }) => {
  if (!loading && vizItems.length === 0) return null;

  return (
    <Box id="figures" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 2 }}>
          Figures
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {loading ? (
          <Typography color="text.secondary">Loading figures…</Typography>
        ) : (
          <Grid container spacing={4}>
            {vizItems.map((viz, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={viz.id || viz.title}>
                {viz.thumb && (
                  <Box
                    component="img"
                    src={`/${viz.thumb}`}
                    alt={viz.title}
                    sx={{
                      width: "100%",
                      aspectRatio: "16/10",
                      objectFit: "cover",
                      border: "1px solid",
                      borderColor: "divider",
                      mb: 1.5,
                    }}
                  />
                )}
                <Typography
                  sx={{ fontFamily: '"Source Serif 4", Georgia, serif', fontStyle: "italic" }}
                >
                  Fig. {i + 1} — {viz.title}
                </Typography>
                {viz.desc && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {viz.desc}
                  </Typography>
                )}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                  {viz.meta && (
                    <Typography variant="caption" color="text.secondary">
                      {viz.meta}
                    </Typography>
                  )}
                  {viz.nb && (
                    <Link href={viz.nb} target="_blank" rel="noreferrer" variant="caption" color="primary">
                      notebook
                    </Link>
                  )}
                  {viz.live && (
                    <Link href={viz.live} target="_blank" rel="noreferrer" variant="caption" color="primary">
                      live
                    </Link>
                  )}
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default VizGallerySection;
