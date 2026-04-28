import PageHero from "../components/PageHero";

const paths = [
  {
    title: "Career switcher path",
    points: ["Foundation sprint", "Cohort classes", "Portfolio proof", "Interview prep"]
  },
  {
    title: "College student path",
    points: ["Skill base", "Project labs", "Internship prep", "Resume polish"]
  },
  {
    title: "Working professional path",
    points: ["Weekend learning", "Applied capstones", "Mentor reviews", "Targeted transition"]
  },
  {
    title: "Manager-to-specialist path",
    points: ["Focused specialization", "Executive pace", "Portfolio refresh", "Strategic branding"]
  }
];

function LearningPathsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Learning Paths"
        title="See the route before you enter the course"
        description="Choose a roadmap by goal, pace, and current experience before committing to a full program."
        stats={[
          { value: "4", label: "learner archetypes" },
          { value: "1", label: "clear roadmap view" },
          { value: "0", label: "confusing dead ends" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {paths.map((path) => (
            <article className="card" key={path.title}>
              <h3>{path.title}</h3>
              <ul className="check-list">
                {path.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default LearningPathsPage;
