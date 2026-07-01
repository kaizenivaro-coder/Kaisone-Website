import { useState } from "react";
import { services } from "../content/site";

export function Services() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="section section--ink" id="services" aria-labelledby="services-title">
      <div className="container">
        <p className="section-label">Services</p>
        <h2 className="sr-only" id="services-title">Services</h2>
        <div className="service-list">
          {services.map((service) => {
            const expanded = active === service.id;
            return (
              <article className={`service-row ${expanded ? "service-row--open" : ""}`} key={service.id}>
                <button type="button" aria-expanded={expanded} onClick={() => setActive(expanded ? null : service.id)}>
                  <span className="service-name"><span>{service.title}</span><span className="service-price">Starting from {service.price}</span></span><span className="service-summary">{service.summary}</span><span className="row-arrow" aria-hidden="true">↗</span>
                </button>
                <div className="service-details" aria-hidden={!expanded}>
                  {service.details.map((detail) => <span key={detail}>{detail}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
