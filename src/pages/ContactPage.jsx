import { useState } from "react";
import PageHero from "../components/PageHero";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  interest: "Course selection",
  message: ""
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(initialForm);
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to admissions, support, or enterprise partnerships"
        description="Reach the right team for course selection, learner support, team training, events, or partnerships."
        stats={[
          { value: "3", label: "contact intents" },
          { value: "Sales", label: "admissions support" },
          { value: "Ops", label: "learner help" }
        ]}
      />

      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-card-grid">
            <article className="contact-card">
              <h3>Admissions team</h3>
              <p>Best for course selection, batch timing, and financing questions.</p>
            </article>
            <article className="contact-card">
              <h3>Student support</h3>
              <p>Best for platform access, recordings, mentorship, and assignments.</p>
            </article>
            <article className="contact-card">
              <h3>Enterprise desk</h3>
              <p>Best for team upskilling, hiring partnerships, and custom academies.</p>
            </article>
            <article className="contact-card">
              <h3>Community desk</h3>
              <p>Best for events, collaborations, ambassador programs, and clubs.</p>
            </article>
          </div>

          <div className="panel">
            <span className="card-label">Callback request</span>
            <h3>Request a callback</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </label>

              <label>
                What are you interested in?
                <select name="interest" value={formData.interest} onChange={handleChange}>
                  <option>Course selection</option>
                  <option>Student support</option>
                  <option>Enterprise training</option>
                  <option>Events or community</option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help"
                  rows="4"
                />
              </label>

              <button className="button button-primary" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
