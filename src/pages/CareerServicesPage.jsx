import PageHero from "../components/PageHero";

const services = [
  "Resume rebuild and role alignment",
  "LinkedIn and portfolio story polish",
  "Mock interviews with actionable notes",
  "Hiring week, recruiter rooms, and referral prep"
];

function CareerServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Career Services"
        title="Career support designed like a product flow"
        description="Move from learning to opportunity with resume support, mock interviews, portfolio polish, and recruiter preparation."
        stats={[
          { value: "4", label: "support pillars" },
          { value: "8+", label: "mock rounds per learner" },
          { value: "1:1", label: "coaching checkpoints" }
        ]}
      />

      <section className="section">
        <div className="shell timeline">
          {services.map((service, index) => (
            <article className="timeline-item" key={service}>
              <strong>Step {index + 1}</strong>
              <p>{service}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CareerServicesPage;
