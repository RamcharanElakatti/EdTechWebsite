import PageHero from "../components/PageHero";

function ScholarshipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Scholarships"
        title="Scholarship and financing pathways for committed learners"
        description="Find merit awards, need-based support, and EMI options that make career-focused learning more accessible."
        stats={[
          { value: "Merit", label: "portfolio-based awards" },
          { value: "Need", label: "support options" },
          { value: "EMI", label: "friendly financing" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          <article className="card">
            <h3>Women in Tech scholarship</h3>
            <p>Designed for learners building momentum into frontend, data, and AI tracks.</p>
          </article>
          <article className="card">
            <h3>Career switcher grant</h3>
            <p>Best for professionals making structured transitions into product and tech roles.</p>
          </article>
          <article className="card">
            <h3>Student acceleration award</h3>
            <p>Supports students building internship-ready projects before graduation.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ScholarshipsPage;
