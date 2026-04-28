import SiteLink from "../components/SiteLink";
import {
  blogPosts,
  events,
  partnerCompanies,
  pricingPlans,
  programs,
  successStories
} from "../data/siteData";

function HomePage() {
  const featuredPrograms = programs.slice(0, 4);

  return (
    <main>
      <section className="hero-home">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <span className="section-kicker">Modern learning academy</span>
            <h1>Build career-ready skills through guided courses, mentors, and projects.</h1>
            <p>
              SkillForge Academy helps learners choose focused programs, join live cohorts,
              practice with real assignments, and prepare for product and technology roles.
            </p>
            <div className="action-row">
              <SiteLink href="/courses" currentPath="" className="button button-primary">
                Explore All Courses
              </SiteLink>
              <SiteLink href="/admissions" currentPath="" className="button button-secondary">
                See Admissions
              </SiteLink>
            </div>

            <div className="stat-grid">
              <article className="stat-card">
                <strong>24</strong>
                <span>learning and support touchpoints</span>
              </article>
              <article className="stat-card">
                <strong>6</strong>
                <span>deep-dive programs</span>
              </article>
              <article className="stat-card">
                <strong>1</strong>
                <span>academy built around student progress</span>
              </article>
            </div>
          </div>

          <aside className="hero-card">
            <span className="card-label">Upcoming cohort snapshot</span>
            <h3>What learners see on day one</h3>
            <div className="hero-mini-list">
              <div className="mini-item">
                <strong>Week 1</strong>
                <p>Orientation, mentor matching, and roadmap planning.</p>
              </div>
              <div className="mini-item">
                <strong>Week 2</strong>
                <p>Core concepts, labs, and first build shipped live.</p>
              </div>
              <div className="mini-item">
                <strong>Week 3+</strong>
                <p>Reviews, mock interviews, and portfolio feedback loops.</p>
              </div>
            </div>
            <p className="route-count">Designed around the complete learner journey from discovery to career support.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <span className="section-kicker" style={{ color: "var(--brand-dark)", background: "rgba(24, 92, 255, 0.08)" }}>
              Trusted by learners aiming for product and tech roles
            </span>
            <h2 className="section-title">Career-focused design with recognizable edtech patterns</h2>
            <p className="section-copy">
              SkillForge combines cohort urgency, self-paced flexibility, social proof,
              program discovery, pricing, and learning outcomes in a journey learners
              can understand quickly.
            </p>
          </div>

          <div className="logo-cloud">
            {partnerCompanies.map((company) => (
              <div className="logo-pill" key={company}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="shell">
          <div className="section-intro">
            <h2 className="section-title">Featured programs</h2>
            <p className="section-copy">
              Each program includes syllabus depth, applied projects, clear outcomes,
              and mentor-led structure.
            </p>
          </div>

          <div className="card-grid">
            {featuredPrograms.map((program) => (
              <article className="card" key={program.href}>
                <span className="card-label">{program.category}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="chip-wrap">
                  <span className="chip">{program.duration}</span>
                  <span className="chip">{program.format}</span>
                </div>
                <div className="action-row">
                  <SiteLink href={program.href} currentPath="" className="button button-secondary">
                    View Program
                  </SiteLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-layout">
          <div className="panel accent-panel">
            <span className="card-label">Why this structure works</span>
            <h3>Blend live cohorts, self-paced libraries, and career support.</h3>
            <ul className="check-list">
              <li>Program discovery page for broad browsing</li>
              <li>Dedicated course details with rich outcome framing</li>
              <li>Mentor, pricing, blog, community, and admissions journeys</li>
              <li>Footer and navigation that make key learning resources easy to find</li>
            </ul>
          </div>

          <div className="panel">
            <span className="card-label">Common edtech conversion moments</span>
            <div className="timeline">
              <div className="timeline-item">
                <strong>Discover</strong>
                <p>Learners compare formats, durations, and skills.</p>
              </div>
              <div className="timeline-item">
                <strong>Validate</strong>
                <p>They inspect mentors, outcomes, and social proof.</p>
              </div>
              <div className="timeline-item">
                <strong>Decide</strong>
                <p>Pricing, scholarships, and admissions clarify fit.</p>
              </div>
              <div className="timeline-item">
                <strong>Commit</strong>
                <p>Dashboard preview and support resources reduce friction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="shell">
          <div className="section-intro">
            <h2 className="section-title">Pricing and proof in one scroll</h2>
            <p className="section-copy">
              Modern course websites often mix transparent pricing with quick proof points.
            </p>
          </div>
          <div className="card-grid">
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
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <h2 className="section-title">Stories and content that extend trust</h2>
          </div>
          <div className="card-grid">
            {successStories.slice(0, 3).map((story) => (
              <article className="card" key={story.name}>
                <span className="card-label">{story.role}</span>
                <h3>{story.name}</h3>
                <p>{story.outcome}</p>
                <p>{story.highlight}</p>
              </article>
            ))}
          </div>
          <div className="cta-banner">
            <div>
              <h3>Keep exploring the academy experience</h3>
              <p>
                Find live events, practical guides, help resources, hiring partners,
                enterprise training, scholarships, and more.
              </p>
            </div>
            <div className="action-row">
              <SiteLink href="/events" currentPath="" className="button button-secondary">
                Events
              </SiteLink>
              <SiteLink href="/blog" currentPath="" className="button button-primary">
                Blog
              </SiteLink>
            </div>
          </div>

          <div className="card-grid" style={{ marginTop: "28px" }}>
            {events.map((event) => (
              <article className="card" key={event.title}>
                <span className="card-label">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            ))}
            {blogPosts.map((post) => (
              <article className="card" key={post.title}>
                <span className="card-label">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
