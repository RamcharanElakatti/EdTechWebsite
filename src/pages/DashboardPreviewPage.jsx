import PageHero from "../components/PageHero";

const dashboardModules = [
  "Upcoming live classes",
  "Assignment board",
  "Mentor review queue",
  "Interview prep tracker",
  "Certificates and completion",
  "Community challenges"
];

function DashboardPreviewPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dashboard Preview"
        title="Preview the learner dashboard experience"
        description="See how classes, assignments, mentor feedback, interviews, certificates, and community tasks stay organized after enrollment."
        stats={[
          { value: "6", label: "dashboard modules" },
          { value: "Daily", label: "engagement surface" },
          { value: "Post-purchase", label: "experience preview" }
        ]}
      />

      <section className="section">
        <div className="shell dashboard-layout">
          <div className="panel">
            <h3>Student workspace snapshot</h3>
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {dashboardModules.map((module) => (
                <article className="dashboard-card" key={module}>
                  <strong>{module}</strong>
                  <p>Clear learner controls for tracking work, feedback, and next actions.</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel accent-panel">
            <h3>Built for daily learning</h3>
            <p>
              The dashboard keeps every cohort touchpoint visible so students always know what
              to attend, submit, review, and improve next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashboardPreviewPage;
