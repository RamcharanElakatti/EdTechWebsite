import SiteLink from "../components/SiteLink";

function NotFoundPage() {
  return (
    <main className="section">
      <div className="shell panel" style={{ textAlign: "center" }}>
        <span className="card-label">404</span>
        <h1 className="section-title">We could not find that academy resource.</h1>
        <p className="section-copy" style={{ margin: "0 auto 20px" }}>
          Use the navigation to return to courses, admissions, pricing, or learner resources.
        </p>
        <div className="action-row" style={{ justifyContent: "center" }}>
          <SiteLink href="/" currentPath="" className="button button-primary">
            Go Home
          </SiteLink>
          <SiteLink href="/courses" currentPath="" className="button button-secondary">
            View Courses
          </SiteLink>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
