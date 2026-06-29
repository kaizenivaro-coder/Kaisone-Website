import { processSteps } from "../content/site";

export function Process() {
  return (
    <section className="section section--paper process" id="process" aria-labelledby="process-title">
      <div className="container">
        <p className="section-label">Process</p>
        <h2 id="process-title">From need to capability</h2>
        <ol className="process-list">
          {processSteps.map((step, index) => <li key={step.id}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
