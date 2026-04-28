import PageHero from "../components/PageHero";
import { pricingPlans } from "../data/siteData";

function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Transparent plans for different learning styles"
        description="Compare self-paced, cohort-based, and career-focused plans with clear pricing, financing, and support options."
        stats={[
          { value: `${pricingPlans.length}`, label: "core plans" },
          { value: "EMI", label: "friendly payment options" },
          { value: "0%", label: "surprise fees" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {pricingPlans.map((plan) => (
            <article className="card" key={plan.name}>
              <span className="card-label">{plan.audience}</span>
              <h3>{plan.name}</h3>
              <p className="highlight-number">{plan.price}</p>
              <ul className="check-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PricingPage;
