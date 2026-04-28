import SiteLink from "./SiteLink";

function PageHero({ eyebrow, title, description, stats = [], actions = [] }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-layout">
        <div>
          <span className="section-kicker">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="page-lead">{description}</p>

          {actions.length > 0 && (
            <div className="action-row">
              {actions.map((action) => (
                <SiteLink
                  key={action.href}
                  href={action.href}
                  currentPath=""
                  className={`button ${action.kind === "secondary" ? "button-secondary" : "button-primary"}`}
                >
                  {action.label}
                </SiteLink>
              ))}
            </div>
          )}
        </div>

        <div className="hero-side-card">
          <span className="card-label">Program highlights</span>
          <div className="stat-grid compact-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
