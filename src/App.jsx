import { useEffect, useState } from "react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  footerGroups,
  mainNavLinks,
  programs,
  secondaryNavLinks,
  siteRoutes
} from "./data/siteData";
import AdmissionsPage from "./pages/AdmissionsPage";
import BlogPage from "./pages/BlogPage";
import BootcampsPage from "./pages/BootcampsPage";
import CareerServicesPage from "./pages/CareerServicesPage";
import CatalogPage from "./pages/CatalogPage";
import CommunityPage from "./pages/CommunityPage";
import ContactPage from "./pages/ContactPage";
import DashboardPreviewPage from "./pages/DashboardPreviewPage";
import EnterprisePage from "./pages/EnterprisePage";
import EventsPage from "./pages/EventsPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import HiringPartnersPage from "./pages/HiringPartnersPage";
import HomePage from "./pages/HomePage";
import LearningPathsPage from "./pages/LearningPathsPage";
import MentorsPage from "./pages/MentorsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PricingPage from "./pages/PricingPage";
import ProgramPage from "./pages/ProgramPage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";

function normalizeHash() {
  const hash = window.location.hash.replace(/^#/, "");

  if (!hash) {
    return "/";
  }

  return hash.startsWith("/") ? hash : `/${hash}`;
}

function App() {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : normalizeHash()
  );

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    const handleRouteChange = () => {
      setPath(normalizeHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  const program = programs.find((item) => item.href === path);
  const routeMeta = siteRoutes.find((item) => item.href === path);

  let page = <NotFoundPage />;

  if (path === "/") {
    page = <HomePage />;
  } else if (path === "/courses") {
    page = <CatalogPage />;
  } else if (path === "/bootcamps") {
    page = <BootcampsPage />;
  } else if (path === "/learning-paths") {
    page = <LearningPathsPage />;
  } else if (path === "/pricing") {
    page = <PricingPage />;
  } else if (path === "/mentors") {
    page = <MentorsPage />;
  } else if (path === "/success-stories") {
    page = <SuccessStoriesPage />;
  } else if (path === "/career-services") {
    page = <CareerServicesPage />;
  } else if (path === "/hiring-partners") {
    page = <HiringPartnersPage />;
  } else if (path === "/community") {
    page = <CommunityPage />;
  } else if (path === "/events") {
    page = <EventsPage />;
  } else if (path === "/blog") {
    page = <BlogPage />;
  } else if (path === "/help-center") {
    page = <HelpCenterPage />;
  } else if (path === "/contact") {
    page = <ContactPage />;
  } else if (path === "/admissions") {
    page = <AdmissionsPage />;
  } else if (path === "/enterprise") {
    page = <EnterprisePage />;
  } else if (path === "/scholarships") {
    page = <ScholarshipsPage />;
  } else if (path === "/dashboard-preview") {
    page = <DashboardPreviewPage />;
  } else if (program) {
    page = <ProgramPage program={program} />;
  }

  return (
    <div className="site-shell">
      <SiteHeader
        currentPath={path}
        mainNavLinks={mainNavLinks}
        secondaryNavLinks={secondaryNavLinks}
      />
      {page}
      <SiteFooter
        currentPath={path}
        footerGroups={footerGroups}
        totalPages={siteRoutes.length}
        currentLabel={routeMeta?.label}
      />
    </div>
  );
}

export default App;
