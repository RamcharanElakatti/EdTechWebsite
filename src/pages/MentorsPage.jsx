import PageHero from "../components/PageHero";
import { mentorProfiles } from "../data/siteData";

function MentorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mentors"
        title="Industry mentors who make abstract learning feel concrete"
        description="Learn from working professionals who connect classroom concepts with practical projects, critique, and career context."
        stats={[
          { value: `${mentorProfiles.length}`, label: "featured mentors" },
          { value: "Weekly", label: "office hours" },
          { value: "1:many", label: "cohort-based feedback" }
        ]}
      />

      <section className="section">
        <div className="shell mentor-grid">
          {mentorProfiles.map((mentor) => (
            <article className="card" key={mentor.name}>
              <span className="card-label">{mentor.company}</span>
              <h3>{mentor.name}</h3>
              <p>{mentor.role}</p>
              <p>{mentor.specialty}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MentorsPage;
