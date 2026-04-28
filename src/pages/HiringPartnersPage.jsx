import PageHero from "../components/PageHero";
import { partnerCompanies } from "../data/siteData";

function HiringPartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hiring Partners"
        title="Show employers that learners are being prepared for real work"
        description="Connect prepared learners with employer demo days, role-based readiness, and trusted hiring networks."
        stats={[
          { value: `${partnerCompanies.length}`, label: "featured brands" },
          { value: "Demo days", label: "company exposure" },
          { value: "Role-based", label: "candidate preparation" }
        ]}
      />

      <section className="section">
        <div className="shell logo-cloud">
          {partnerCompanies.map((company) => (
            <div className="logo-pill" key={company}>
              {company}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HiringPartnersPage;
