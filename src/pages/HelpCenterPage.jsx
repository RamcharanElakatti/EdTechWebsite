import PageHero from "../components/PageHero";
import { helpTopics } from "../data/siteData";

function HelpCenterPage() {
  return (
    <main>
      <PageHero
        eyebrow="Help Center"
        title="Answers for learners before and after enrollment"
        description="Get quick help with access, payments, mentor sessions, portfolio reviews, certificates, and job support."
        stats={[
          { value: `${helpTopics.length}`, label: "help categories" },
          { value: "24/7", label: "self-serve access" },
          { value: "Fast", label: "resolution framing" }
        ]}
      />

      <section className="section">
        <div className="shell faq-list">
          {helpTopics.map((topic) => (
            <article className="faq-item" key={topic}>
              <h3>{topic}</h3>
              <p>Find practical answers, next steps, and support options related to {topic.toLowerCase()}.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HelpCenterPage;
