import PageHero from "../components/PageHero";

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A learning academy built around student progress"
        description="SkillForge Academy blends structured teaching, mentor support, and practical outcomes for learners preparing for real career moves."
        stats={[
          { value: "Mission", label: "job-ready education" },
          { value: "Blend", label: "cohort + self-paced" },
          { value: "Focus", label: "career outcomes" }
        ]}
      />

      <section className="section">
        <div className="shell split-layout">
          <article className="panel">
            <h3>What the brand stands for</h3>
            <p>
              SkillForge is positioned as a modern academy that balances structured teaching,
              community accountability, and portfolio-ready outcomes.
            </p>
          </article>
          <article className="panel accent-panel">
            <h3>Why learners choose SkillForge</h3>
            <p>
              Students get clear roadmaps, hands-on practice, mentor feedback, and career
              preparation in one focused learning experience.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
