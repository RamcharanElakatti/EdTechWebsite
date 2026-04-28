import PageHero from "../components/PageHero";

const communities = [
  "Frontend critique club",
  "SQL practice circle",
  "Design case study room",
  "AI builders group",
  "Weekend accountability pod",
  "Interview warm-up room"
];

function CommunityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Community"
        title="Peer energy keeps learners moving"
        description="Join study circles, critique rooms, and accountability spaces that keep learning active beyond the course syllabus."
        stats={[
          { value: "6", label: "community rituals" },
          { value: "Daily", label: "active channels" },
          { value: "Peer", label: "feedback loops" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {communities.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Designed to keep momentum high with discussion, critique, and social accountability.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CommunityPage;
