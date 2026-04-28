import PageHero from "../components/PageHero";
import SiteLink from "../components/SiteLink";
import { mentorProfiles, programs as programCatalog } from "../data/siteData";

function ProgramPage({ program }) {
  const mentor = mentorProfiles[programCatalog.findIndex((item) => item.href === program.href)];

  return (
    <main>
      <PageHero
        eyebrow={program.category}
        title={program.title}
        description={program.description}
        stats={program.heroStats}
        actions={[
          { label: "Apply Now", href: "/admissions" },
          { label: "Check Scholarships", href: "/scholarships", kind: "secondary" }
        ]}
      />

      <section className="section">
        <div className="shell split-layout">
          <div className="panel">
            <span className="card-label">Program snapshot</span>
            <h3>{program.badge}</h3>
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <article className="mini-item">
                <strong>{program.duration}</strong>
                <p>Program duration</p>
              </article>
              <article className="mini-item">
                <strong>{program.tuition}</strong>
                <p>Tuition estimate</p>
              </article>
              <article className="mini-item">
                <strong>{program.rating}</strong>
                <p>Learner rating</p>
              </article>
              <article className="mini-item">
                <strong>{program.startDate}</strong>
                <p>Next cohort date</p>
              </article>
            </div>
          </div>

          <div className="panel accent-panel">
            <span className="card-label">Mentor spotlight</span>
            <h3>{mentor.name}</h3>
            <p>{mentor.role}, {mentor.company}</p>
            <p>{mentor.specialty}</p>
            <div className="action-row">
              <SiteLink href="/mentors" currentPath="" className="button button-secondary">
                Meet All Mentors
              </SiteLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="shell">
          <div className="section-intro">
            <h2 className="section-title">What you will study</h2>
          </div>
          <div className="timeline">
            {program.syllabus.map((item) => (
              <article className="timeline-item" key={item}>
                <strong>{item.split(",")[0]}</strong>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell card-grid">
          {program.projects.map((project) => (
            <article className="card" key={project}>
              <span className="card-label">Project</span>
              <h3>{project}</h3>
              <p>Each build is framed as portfolio evidence with mentor reviews and presentation support.</p>
            </article>
          ))}
          {program.outcomes.map((outcome) => (
            <article className="card" key={outcome}>
              <span className="card-label">Outcome</span>
              <h3>{outcome}</h3>
              <p>Learners leave with clearer skills, stronger portfolio evidence, and a practical next step.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProgramPage;
