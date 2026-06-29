import { education } from "../content/site";

export function Education() {
  return (
    <section className="section section--paper education" id="education" aria-labelledby="education-title">
      <div className="education-image-wrap">
        <img src="/media/kaisone-education.webp" alt="Students collaborating with a facilitator during a digital skills workshop" />
        <img className="education-mark" src="/brand/kaisone-mark-white.png" alt="" aria-hidden="true" />
      </div>
      <div className="education-content">
        <p className="section-label">Education</p>
        <h2 id="education-title">Practical AI education</h2>
        <p className="lead">We help schools build the skills and systems to use AI confidently, safely, and effectively.</p>
        <div className="education-list">
          {education.map((topic) => (
            <article key={topic.id}><h3>{topic.title}</h3><p>{topic.description}</p></article>
          ))}
        </div>
        <a className="button button--ink" href="#contact">Discuss a school program <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
