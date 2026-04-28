import SiteLink from "./SiteLink";

function SiteFooter({ currentPath, footerGroups, totalPages, currentLabel }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="section-kicker">Skill-first education</span>
          <h2>SkillForge Academy</h2>
          <p>
            A complete learning academy with courses, cohorts, mentors, admissions,
            career support, and learner resources.
          </p>
          <div className="status-pill">
            <span className="status-dot" />
            <span>Current page: {currentLabel || "Not found"}</span>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <div className="footer-links">
              {group.links.map((link) => (
                <SiteLink
                  key={link.href}
                  href={link.href}
                  currentPath={currentPath}
                  className="footer-link"
                >
                  {link.label}
                </SiteLink>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="shell footer-note">
        <span>Built for practical, career-focused education.</span>
        <span>Responsive learning journeys for students, mentors, and teams.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
