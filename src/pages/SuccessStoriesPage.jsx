import PageHero from "../components/PageHero";
import { successStories } from "../data/siteData";

function SuccessStoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Success Stories"
        title="Outcomes that feel specific, not vague"
        description="Read learner transitions shaped by role changes, confidence gains, mentor feedback, and portfolio evidence."
        stats={[
          { value: `${successStories.length}`, label: "featured transitions" },
          { value: "Career", label: "switch-ready framing" },
          { value: "Portfolio", label: "proof-first storytelling" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {successStories.map((story) => (
            <article className="card" key={story.name}>
              <span className="card-label">{story.role}</span>
              <h3>{story.name}</h3>
              <p>{story.outcome}</p>
              <p>{story.highlight}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SuccessStoriesPage;
