import * as React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import VizGallerySection from "./components/VizGallerySection";
import FooterSection from "./components/FooterSection";

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
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} loading={loading} />
      <ProjectsSection projects={projects} loading={loading} error={error} />
      <VizGallerySection vizItems={vizItems} loading={loading} />
      <FooterSection />
    </>
  );
}
