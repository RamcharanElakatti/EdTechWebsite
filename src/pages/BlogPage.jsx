import PageHero from "../components/PageHero";
import { blogPosts } from "../data/siteData";

function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical guidance for choosing and completing the right program"
        description="Read career advice, learning strategies, and portfolio guidance from the SkillForge Academy team."
        stats={[
          { value: `${blogPosts.length}`, label: "starter articles" },
          { value: "SEO", label: "awareness support" },
          { value: "Advice", label: "career education" }
        ]}
      />

      <section className="section">
        <div className="shell card-grid">
          {blogPosts.map((post) => (
            <article className="card" key={post.title}>
              <span className="card-label">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
