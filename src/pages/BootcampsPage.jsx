import PageHero from "../components/PageHero";
import { bootcamps } from "../data/siteData";

function BootcampsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Bootcamps"
        title="Choose the intensity that matches your life"
        description="Compare immersive cohorts, weekend programs, and fast-track residencies designed for different learning schedules."
        stats={[
          { value: `${bootcamps.length}`, label: "bootcamp models" },
          { value: "12-28 weeks", label: "duration range" },
          { value: "Live", label: "mentor-first delivery" }
        ]}
      />

      <section className="section">
        <div className="shell">
          <table className="page-table">
            <thead>
              <tr>
                <th>Bootcamp</th>
                <th>Pace</th>
                <th>Duration</th>
                <th>Format</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              {bootcamps.map((camp) => (
                <tr key={camp.title}>
                  <td>{camp.title}</td>
                  <td>{camp.pace}</td>
                  <td>{camp.duration}</td>
                  <td>{camp.format}</td>
                  <td>{camp.promise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default BootcampsPage;
