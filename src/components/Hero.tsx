import { hero } from "../content/site";
import { sitePath } from "../lib/sitePath";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-image" src={sitePath("media/kaisone-hero-business.jpg")} alt="Two colleagues reviewing work on a laptop" />
      <div className="hero-shade" />
      <div className="hero-mark" aria-hidden="true"><img src={sitePath("brand/kaisone-mark-white.png")} alt="" /></div>
      <div className="container hero-content">
        <h1 id="hero-title">Kaisone</h1>
        <p className="hero-headline">{hero.headline}</p>
        <p className="hero-copy">{hero.subheading}</p>
        <div className="hero-actions">
          <a className="button button--primary" href={hero.primaryAction.href}>{hero.primaryAction.label}</a>
        </div>
      </div>
    </section>
  );
}
