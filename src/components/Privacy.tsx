import { Brand } from "./Brand";

export function Privacy() {
  return (
    <main className="privacy" id="top">
      <header className="privacy-header"><div className="container"><Brand homeHref="/" /><a href="/">Back to home</a></div></header>
      <section className="section section--paper privacy-content" aria-labelledby="privacy-title">
        <div className="container privacy-grid">
          <div><p className="section-label">Privacy notice</p><h1 id="privacy-title">Privacy</h1><p className="lead">How project inquiry information is handled on this website.</p></div>
          <div className="privacy-sections">
            <section><h2>Why information is collected</h2><p>The inquiry form collects the details you provide so Kaisone can understand your process, assess whether the work is a fit, and respond to you.</p></section>
            <section><h2>Storage and access</h2><p>A draft is stored in your browser before delivery. Kaisone cannot access that local draft. Kaisone can access the inquiry only after you send it through a configured delivery endpoint or another contact channel.</p></section>
            <section><h2>Processors</h2><p>If direct form delivery is configured, the endpoint provider processes the submitted inquiry. If you choose WhatsApp, WhatsApp processes the message under its own terms. Without direct delivery, the website copies the inquiry to your clipboard and does not send it.</p></section>
            <section><h2>Retention</h2><p>The local draft remains in your browser until you clear it or a direct submission succeeds. Delivered inquiries are kept only as long as needed to respond and manage the potential project. Kaisone does not currently claim a fixed automated deletion schedule.</p></section>
            <section><h2>Deletion requests</h2><p>Use the website contact form or the same contact channel you used for your inquiry and ask for deletion. No separate public privacy email is currently configured.</p></section>
          </div>
        </div>
      </section>
    </main>
  );
}
