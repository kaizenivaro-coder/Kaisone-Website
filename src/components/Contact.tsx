import { FormEvent, useState } from "react";

type ContactStatus = "idle" | "sending" | "sent" | "copied" | "error";

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export function Contact() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    localStorage.setItem("kaisone-contact-draft", JSON.stringify(payload));
    setStatus("sending");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload)});
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
        localStorage.removeItem("kaisone-contact-draft");
        return;
      }

      const brief = `Kaisone readiness request\nName: ${payload.name}\nOrganization: ${payload.organization}\nEmail: ${payload.email}\nGoal: ${payload.goal}`;
      await navigator.clipboard.writeText(brief);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const message = status === "sending" ? "Preparing your request…" : status === "sent" ? "Request sent." : status === "copied" ? "Inquiry copied. Contact delivery is being connected." : status === "error" ? "The request could not be prepared. Your draft is saved on this device." : "";

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div><p className="section-label">Contact</p><h2 id="contact-title">Start with a clear assessment.</h2><p>Tell us what you are trying to improve. We will identify the simplest useful starting point.</p><p className="location">Dar es Salaam · East Africa Time</p></div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>Organization<input name="organization" autoComplete="organization" required /></label></div>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>What are you trying to improve?<textarea name="goal" rows={4} required /></label>
          <button className="button button--primary" type="submit" disabled={status === "sending"}>Request an AI readiness session</button>
          <p className="form-status" aria-live="polite">{message}</p>
        </form>
      </div>
    </section>
  );
}
