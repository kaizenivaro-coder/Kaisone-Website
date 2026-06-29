import { hero } from "../content/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-image" src="/media/kaisone-hero.webp" alt="Students and a facilitator working together on a laptop in a classroom" />
      <div className="hero-shade" />
      <div className="hero-mark" aria-hidden="true"><img src="/brand/kaisone-mark-white.png" alt="" /></div>
      <div className="container hero-content">
        <h1 id="hero-title">Kaisone</h1>
        <p className="hero-headline">{hero.headline}</p>
        <p className="hero-copy">Training, useful automation, and focused software built around real operational needs.</p>
        <div className="hero-actions">
          <a className="button button--primary" href={hero.primaryAction.href}>{hero.primaryAction.label}</a>
          <a className="button button--outline" href="#initiatives">See our work</a>
        </div>
      </div>
    </section>
  );
}
