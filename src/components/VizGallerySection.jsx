import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Button } from "@mui/material";

const DEFAULT_VISUALIZATIONS = [
  { title: 'Feature Importance: Random Forest', desc: 'Top features for global up/down model.', meta: 'scikit-learn • matplotlib' },
  { title: 'Permutation Importance vs. Impurity', desc: 'Side-by-side comparison across folds.', meta: 'sklearn • validation' },
  { title: 'Partial Dependence: Price Momentum', desc: 'Marginal effect of momentum on P(up).', meta: 'PDP • inference' }
];

const VizGallerySection = ({ vizItems, loading }) => {
  const visualizations = vizItems.length ? vizItems : DEFAULT_VISUALIZATIONS;

  return (
    <Box sx={{ py: 8, bgcolor: 'common.white' }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" fontWeight={600} gutterBottom>Data Visualization Gallery</Typography>
        {loading ? (
          <Typography align="center" color="text.secondary">Loading visualizations…</Typography>
        ) : (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {visualizations.map((viz) => (
              <Grid item xs={12} md={4} key={viz.id || viz.title}>
                <Card variant="outlined">
                  {viz.thumb ? (
                    <CardMedia component="img" height="176" image={`/${viz.thumb}`} alt={viz.title} />
                  ) : (
                    <Box sx={{ height: 176, bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="caption" color="text.secondary">Chart thumbnail</Typography>
                    </Box>
                  )}
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={600}>{viz.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{viz.desc}</Typography>
                    <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 2 }}>{viz.meta}</Typography>
                    <Stack direction="row" spacing={1}>
                      {viz.nb && (
                        <Button size="small" component="a" href={viz.nb} target="_blank" rel="noreferrer">Notebook</Button>
                      )}
                      {viz.live && (
                        <Button size="small" variant="outlined" component="a" href={viz.live} target="_blank" rel="noreferrer">Live</Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default VizGallerySection;
