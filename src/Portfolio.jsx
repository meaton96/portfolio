import * as React from "react";
import { Card, 
    CardContent, 
    Button, 
    IconButton, 
    Box, 
    Container, 
    Typography,
    Stack,
    Grid,
    CardMedia
} from "@mui/material";

import { LinkedIn, GitHub, Mail } from "@mui/icons-material";

export default function Portfolio() {
  const [skills, setSkills] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [vizItems, setVizItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function load() {
      try {
        const [skillsRes, projectsRes, vizRes] = await Promise.all([
          fetch('/skills.json'),
          fetch('/projects.json'),
          fetch('/visualizations.json').catch(() => ({ ok: false }))
        ]);

        if (skillsRes?.ok) {
          const s = await skillsRes.json();
          setSkills(Array.isArray(s?.skills) ? s.skills : s || []);
        }
        if (projectsRes?.ok) {
          const p = await projectsRes.json();
          const list = Array.isArray(p?.projects) ? p.projects : [];
          setProjects(list.filter(x => x.render !== false).sort((a,b) => (a.order ?? 0) - (b.order ?? 0)));
        }
        if (vizRes?.ok) {
          const v = await vizRes.json();
          setVizItems(Array.isArray(v?.visualizations) ? v.visualizations : []);
        }
      } catch (e) {
        setError('Failed to load content.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'common.white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>Michael Eaton</Typography>
          <Typography variant="h6" gutterBottom>Data Science & Software Engineering</Typography>
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

      {/* About Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>About Me</Typography>
        <Typography>
          I’m a data science master’s student at RIT with a background in game
          design and software engineering. My focus is on data engineering,
          machine learning, and logistics optimization. I enjoy building tools
          that blend technical depth with real-world impact.
        </Typography>
      </Container>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h5" align="center" fontWeight={600} gutterBottom>Projects</Typography>
        {error && <Typography align="center" color="error.main">{error}</Typography>}
        {loading ? (
          <Typography align="center" color="text.secondary">Loading projects…</Typography>
        ) : (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {projects.map((proj) => (
              <Grid item xs={12} md={4} key={proj.id || proj.title}>
                <Card sx={{ height: '100%' }} variant="outlined">
                  {proj.img && (
                    <CardMedia component="img" height="160" image={`/${proj.img}`} alt={proj.title} />
                  )}
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>{proj.title}</Typography>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>{proj.subtitle}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{proj.content}</Typography>
                    <Stack direction="row" spacing={1}>
                      {proj.repoLink && (
                        <Button size="small" component="a" href={proj.repoLink} target="_blank" rel="noreferrer">Repo</Button>
                      )}
                      {proj.buildLink && (
                        <Button size="small" variant="outlined" component="a" href={proj.buildLink.startsWith('http') ? proj.buildLink : `/${proj.buildLink}`} target="_blank" rel="noreferrer">Demo</Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Data Visualization Gallery */}
      <Box sx={{ py: 8, bgcolor: 'common.white' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" fontWeight={600} gutterBottom>Data Visualization Gallery</Typography>
          {loading ? (
            <Typography align="center" color="text.secondary">Loading visualizations…</Typography>
          ) : (
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {(vizItems.length ? vizItems : [
                { title: 'Feature Importance: Random Forest', desc: 'Top features for global up/down model.', meta: 'scikit-learn • matplotlib' },
                { title: 'Permutation Importance vs. Impurity', desc: 'Side-by-side comparison across folds.', meta: 'sklearn • validation' },
                { title: 'Partial Dependence: Price Momentum', desc: 'Marginal effect of momentum on P(up).', meta: 'PDP • inference' }
              ]).map((viz) => (
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

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'common.white', py: 3, mt: 6 }}>
        <Container maxWidth="md">
          <Typography align="center">© {new Date().getFullYear()} Michael Eaton</Typography>
        </Container>
      </Box>
    </>
  );
}
