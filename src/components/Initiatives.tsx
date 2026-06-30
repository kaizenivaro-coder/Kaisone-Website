import { initiatives } from "../content/site";

export function Initiatives() {
  return (
    <section className="section section--ink initiatives" id="initiatives" aria-labelledby="initiatives-title">
      <div className="container initiatives-grid">
        <div><p className="section-label">Selected work</p><h2 id="initiatives-title">Kaisone-led work, clearly labeled.</h2><p className="initiative-note">These are internal products and initiatives at their current stage, not a list of client engagements.</p></div>
        <div className="initiative-list">
          {initiatives.map((initiative, index) => (
            <article className="initiative-row" key={initiative.id}>
              <span className="initiative-number">0{index + 1}</span>
              <div><div className="initiative-heading"><h3>{initiative.name}</h3><span>{initiative.status}</span></div><p>{initiative.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
