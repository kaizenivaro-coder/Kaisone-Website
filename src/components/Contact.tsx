import { FormEvent, useState } from "react";

type ContactStatus = "idle" | "sending" | "sent" | "copied" | "error";

interface InquiryPayload {
  name: string;
  organization: string;
  contact: string;
  problem: string;
  currentProcess: string;
  outcome: string;
  budget: string;
  timeframe: string;
  consent: string;
}

const draftKey = "kaisone-contact-draft";
const whatsappMessage =
  "Hello Kaisone. I’d like to discuss a business process that may need custom software or automation. My organization is: ____. The process I want to improve is: ____.";

function getInquiry(form: HTMLFormElement): InquiryPayload {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    organization: String(data.get("organization") ?? ""),
    contact: String(data.get("contact") ?? ""),
    problem: String(data.get("problem") ?? ""),
    currentProcess: String(data.get("currentProcess") ?? ""),
    outcome: String(data.get("outcome") ?? ""),
    budget: String(data.get("budget") ?? ""),
    timeframe: String(data.get("timeframe") ?? ""),
    consent: data.get("consent") === "yes" ? "Yes" : "No",
  };
}

function formatInquiry(payload: InquiryPayload) {
  return [
    "Kaisone project inquiry",
    `Name: ${payload.name}`,
    `Organization: ${payload.organization}`,
    `Contact: ${payload.contact}`,
    `Problem: ${payload.problem}`,
    `Current process: ${payload.currentProcess}`,
    `Desired outcome: ${payload.outcome}`,
    `Budget: ${payload.budget}`,
    `Timeframe: ${payload.timeframe}`,
    `Consent: ${payload.consent}`,
  ].join("\n");
}

export function Contact() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
  const whatsappNumber = String(import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const payload = getInquiry(form);
    localStorage.setItem(draftKey, JSON.stringify(payload));
    setStatus("sending");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
        localStorage.removeItem(draftKey);
        return;
      }

      await navigator.clipboard.writeText(formatInquiry(payload));
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "sending"
      ? "Preparing your inquiry..."
      : status === "sent"
        ? "Inquiry sent."
        : status === "copied"
          ? "Inquiry copied. Direct delivery is not connected yet."
          : status === "error"
            ? "Delivery failed. Your inquiry is saved on this device."
            : "";

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div><p className="section-label">Contact</p><h2 id="contact-title">Discuss the process you want to improve.</h2><p>Share how the work happens now and what a useful outcome would look like.</p><p className="location">Dar es Salaam · East Africa Time</p>{whatsappHref ? <a className="button button--outline whatsapp-cta" href={whatsappHref} aria-label="Discuss your project on WhatsApp">Discuss your project</a> : null}</div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>Organization<input name="organization" autoComplete="organization" required /></label></div>
          <label>Contact<input name="contact" autoComplete="email" required /></label>
          <label>Problem<textarea name="problem" rows={3} required /></label>
          <label>Current process<textarea name="currentProcess" rows={4} required /></label>
          <label>Desired outcome<textarea name="outcome" rows={3} required /></label>
          <div className="form-row"><label>Budget<input name="budget" required /></label><label>Timeframe<input name="timeframe" required /></label></div>
          <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>I consent to Kaisone using these details to assess and respond to my inquiry. See the <a href="/privacy">privacy notice</a>.</span></label>
          <button className="button button--primary" type="submit" disabled={status === "sending"}>Discuss your project</button>
          <p className="form-status" aria-live="polite">{message}</p>
        </form>
      </div>
    </section>
  );
}
