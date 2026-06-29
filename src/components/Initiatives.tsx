import { initiatives } from "../content/site";

export function Initiatives() {
  return (
    <section className="section section--ink initiatives" id="initiatives" aria-labelledby="initiatives-title">
      <div className="container initiatives-grid">
        <div><p className="section-label">Current initiatives</p><h2 id="initiatives-title">Work in progress, clearly labeled.</h2></div>
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
