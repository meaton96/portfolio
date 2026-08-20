import { useState } from "react";
import { Box, Container, Typography, Stack, Divider, Link } from "@mui/material";

const VISIBLE_COUNT = 5;

const ProjectsSection = ({ projects, loading, error }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  const remaining = projects.length - VISIBLE_COUNT;

  return (
  <Box id="work" sx={{ py: { xs: 6, md: 8 } }}>
    <Container maxWidth="md">
      <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 2 }}>
        Selected Work
      </Typography>
      <Divider sx={{ mb: 1 }} />

      {error && (
        <Typography color="error.main" sx={{ py: 3 }}>
          {error}
        </Typography>
      )}
      {loading ? (
        <Typography color="text.secondary" sx={{ py: 3 }}>
          Loading projects…
        </Typography>
      ) : (
        visibleProjects.map((proj) => (
          <Stack
            key={proj.id || proj.title}
            direction="row"
            spacing={3}
            sx={{
              py: 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              alignItems: "flex-start",
            }}
          >
            {proj.img && (
              <Box
                component="img"
                src={`/${proj.img}`}
                alt={proj.title}
                sx={{
                  width: 56,
                  height: 56,
                  flex: "none",
                  objectFit: "cover",
                  border: "1px solid",
                  borderColor: "divider",
                  filter: "grayscale(1) contrast(1.05)",
                  transition: "filter .2s",
                  "&:hover": { filter: "none" },
                  display: { xs: "none", sm: "block" },
                }}
              />
            )}

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ sm: "baseline" }}
                spacing={1}
              >
                <Typography variant="h3">{proj.title}</Typography>
                {proj.subtitle && (
                  <Typography
                    variant="caption"
                    color="secondary.main"
                    sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                  >
                    {proj.subtitle}
                  </Typography>
                )}
              </Stack>

              {proj.content && (
                <Typography color="text.primary" sx={{ mt: 1, mb: 1.5, maxWidth: "66ch" }}>
                  {proj.content}
                </Typography>
              )}

              <Stack direction="row" spacing={3}>
                {proj.showRepoLink && proj.repoLink && (
                  <Link href={proj.repoLink} target="_blank" rel="noreferrer" variant="body2" color="primary">
                    repo
                  </Link>
                )}
                {proj.showBuildLink && proj.buildLink && (
                  <Link
                    href={proj.buildLink.startsWith("http") ? proj.buildLink : `/${proj.buildLink}`}
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="primary"
                  >
                    demo
                  </Link>
                )}
              </Stack>
            </Box>
          </Stack>
        ))
      )}

      {!loading && !showAll && remaining > 0 && (
        <Box sx={{ textAlign: "center", pt: 4 }}>
          <Link
            component="button"
            type="button"
            onClick={() => setShowAll(true)}
            underline="hover"
            color="text.secondary"
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Show {remaining} more ↓
          </Link>
        </Box>
      )}
    </Container>
  </Box>
  );
};

export default ProjectsSection;
