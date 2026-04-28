import SiteLink from "./SiteLink";

function SiteHeader({ currentPath, mainNavLinks, secondaryNavLinks }) {
  return (
    <header className="site-header">
      <div className="shell header-top">
        <a className="brand-lockup" href="#/">
          <span className="brand-mark">SF</span>
          <span className="brand-copy">
            <strong>SkillForge Academy</strong>
          </span>
        </a>

        <div className="header-actions">
          <SiteLink href="/dashboard-preview" currentPath={currentPath} className="ghost-link">
            Dashboard
          </SiteLink>
          <SiteLink href="/contact" currentPath={currentPath} className="button button-primary">
            Talk to an Advisor
          </SiteLink>
        </div>
      </div>

      <div className="header-primary">
        <div className="shell header-primary-shell">
          <nav className="header-nav" aria-label="Main">
            {mainNavLinks.map((link) => (
              <SiteLink
                key={link.href}
                href={link.href}
                currentPath={currentPath}
                className="site-link"
              >
                {link.label}
              </SiteLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="header-secondary">
        <div className="shell chip-row">
          {secondaryNavLinks.map((link) => (
            <SiteLink
              key={link.href}
              href={link.href}
              currentPath={currentPath}
              className="chip-link"
            >
              {link.label}
            </SiteLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
