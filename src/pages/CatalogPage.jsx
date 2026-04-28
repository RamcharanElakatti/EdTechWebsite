import PageHero from "../components/PageHero";
import SiteLink from "../components/SiteLink";
import { programs } from "../data/siteData";

function CatalogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Courses"
        title="Browse the full course catalog"
        description="Explore clear categories, format details, and direct program paths for every learning goal."
        stats={[
          { value: `${programs.length}`, label: "flagship programs" },
          { value: "3", label: "learning formats" },
          { value: "100%", label: "career oriented" }
        ]}
        actions={[
          { label: "Compare Pricing", href: "/pricing" },
          { label: "See Learning Paths", href: "/learning-paths", kind: "secondary" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {programs.map((program) => (
            <article className="card" key={program.href}>
              <span className="card-label">{program.badge}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="chip-wrap">
                <span className="chip">{program.duration}</span>
                <span className="chip">{program.level}</span>
              </div>
              <div className="action-row">
                <SiteLink href={program.href} currentPath="" className="button button-secondary">
                  View Program
                </SiteLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CatalogPage;
