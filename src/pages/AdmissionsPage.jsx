import PageHero from "../components/PageHero";

const steps = [
  "Choose a program and schedule a counseling call",
  "Complete a short fit check or readiness assessment",
  "Review plan, financing, and start date",
  "Receive onboarding pack and dashboard access"
];

function AdmissionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Admissions"
        title="Turn interest into a guided enrollment journey"
        description="Get clear guidance on program fit, financing, cohort dates, and the next step toward enrollment."
        stats={[
          { value: "4", label: "simple steps" },
          { value: "Fit check", label: "admissions signal" },
          { value: "Onboarding", label: "clear handoff" }
        ]}
      />

      <section className="section">
        <div className="shell timeline">
          {steps.map((step, index) => (
            <article className="timeline-item" key={step}>
              <strong>Step {index + 1}</strong>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AdmissionsPage;
