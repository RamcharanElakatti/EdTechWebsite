import PageHero from "../components/PageHero";
import { events } from "../data/siteData";

function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Live events that feed the learning flywheel"
        description="Webinars, portfolio reviews, and mentor rooms make the platform feel current and active."
        stats={[
          { value: `${events.length}`, label: "featured events" },
          { value: "Live", label: "event-led acquisition" },
          { value: "Replay", label: "recording potential" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {events.map((event) => (
            <article className="card" key={event.title}>
              <span className="card-label">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.format}</p>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
