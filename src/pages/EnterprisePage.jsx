import PageHero from "../components/PageHero";

function EnterprisePage() {
  return (
    <main>
      <PageHero
        eyebrow="Enterprise"
        title="Upskill teams with cohort-style learning experiences"
        description="Create role-based academies for teams that need structured training, mentor support, and measurable progress."
        stats={[
          { value: "B2B", label: "team training mode" },
          { value: "Custom", label: "learning tracks" },
          { value: "Reports", label: "manager visibility" }
        ]}
      />

      <section className="section">
        <div className="shell compare-grid">
          <article className="compare-item">
            <strong>For startups</strong>
            <p>Fast product, design, and engineering upskilling for lean teams.</p>
          </article>
          <article className="compare-item">
            <strong>For enterprises</strong>
            <p>Role-based academies, progress tracking, and cohort reporting for managers.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default EnterprisePage;
