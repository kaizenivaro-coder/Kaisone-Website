import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const inquiry = {
  name: "Kaizen",
  organization: "Kaisone",
  contact: "test@example.com",
  problem: "Repetitive reporting",
  currentProcess: "The team copies figures between spreadsheets every week.",
  outcome: "A reliable internal reporting workflow",
  budget: "TZS 1.2M–3M",
  timeframe: "Within 2 months",
};

function fillInquiry() {
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: inquiry.name } });
  fireEvent.change(screen.getByLabelText("Organization"), { target: { value: inquiry.organization } });
  fireEvent.change(screen.getByLabelText("Contact"), { target: { value: inquiry.contact } });
  fireEvent.change(screen.getByLabelText("Problem"), { target: { value: inquiry.problem } });
  fireEvent.change(screen.getByLabelText("Current process"), { target: { value: inquiry.currentProcess } });
  fireEvent.change(screen.getByLabelText("Desired outcome"), { target: { value: inquiry.outcome } });
  fireEvent.change(screen.getByLabelText("Budget"), { target: { value: inquiry.budget } });
  fireEvent.change(screen.getByLabelText("Timeframe"), { target: { value: inquiry.timeframe } });
  fireEvent.click(screen.getByLabelText(/I consent to Kaisone using these details/i));
}

describe("Kaisone website", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
    localStorage.clear();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("renders the approved offer, selected work, and no education section", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Kaisone" })).toBeInTheDocument();
    expect(screen.getByText("Custom software built around how your business actually works.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Kaisone builds practical internal tools, automation systems, AI-powered workflows, and prototypes that replace inefficient manual processes.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Two colleagues reviewing work on a laptop" })).toHaveAttribute(
      "src",
      "/media/kaisone-hero-business.jpg",
    );
    expect(screen.getAllByText("Selected work")).toHaveLength(2);
    expect(screen.getByText("FK School Platform")).toBeInTheDocument();
    expect(screen.getByText("Prototype")).toBeInTheDocument();
    expect(screen.queryByText("Education")).not.toBeInTheDocument();
  });

  it("uses the approved CTA label across primary actions", () => {
    render(<App />);
    expect(screen.getAllByText("Discuss your project").length).toBeGreaterThanOrEqual(3);
  });

  it("expands an approved service with its price and inclusions", () => {
    render(<App />);
    const service = screen.getByRole("button", { name: /Workflow Fix/i });
    expect(service).toHaveTextContent("TZS 900K");
    fireEvent.click(service);
    expect(service).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Process mapping")).toBeInTheDocument();
  });

  it("preserves and copies a structured inquiry when no endpoint is configured", async () => {
    render(<App />);
    fillInquiry();
    fireEvent.click(screen.getByRole("button", { name: "Discuss your project" }));

    await waitFor(() =>
      expect(screen.getByText("Inquiry copied. Direct delivery is not connected yet.")).toBeInTheDocument(),
    );
    expect(localStorage.getItem("kaisone-contact-draft")).toContain(inquiry.currentProcess);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining(`Current process: ${inquiry.currentProcess}`),
    );
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("Consent: Yes"),
    );
  });

  it("only reports sent after a successful endpoint response", async () => {
    vi.stubEnv("VITE_CONTACT_ENDPOINT", "https://forms.example.test/inquiry");
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 503 }));
    render(<App />);
    fillInquiry();
    fireEvent.click(screen.getByRole("button", { name: "Discuss your project" }));

    await waitFor(() =>
      expect(screen.getByText("Delivery failed. Your inquiry is saved on this device.")).toBeInTheDocument(),
    );
    expect(screen.queryByText("Inquiry sent.")).not.toBeInTheDocument();
    expect(localStorage.getItem("kaisone-contact-draft")).toContain(inquiry.problem);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://forms.example.test/inquiry",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("reports sent and clears the draft after a successful endpoint response", async () => {
    vi.stubEnv("VITE_CONTACT_ENDPOINT", "https://forms.example.test/inquiry");
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 204 }));
    render(<App />);
    fillInquiry();
    fireEvent.click(screen.getByRole("button", { name: "Discuss your project" }));

    await waitFor(() => expect(screen.getByText("Inquiry sent.")).toBeInTheDocument());
    expect(localStorage.getItem("kaisone-contact-draft")).toBeNull();
  });

  it("only shows WhatsApp click-to-chat when a number is configured", () => {
    const { unmount } = render(<App />);
    expect(screen.queryByRole("link", { name: "Discuss your project on WhatsApp" })).not.toBeInTheDocument();
    unmount();

    vi.stubEnv("VITE_WHATSAPP_NUMBER", "+255 712 345 678");
    render(<App />);
    const whatsapp = screen.getByRole("link", { name: "Discuss your project on WhatsApp" });
    expect(whatsapp).toHaveTextContent("Discuss your project");
    expect(whatsapp).toHaveAttribute("href", expect.stringContaining("https://wa.me/255712345678?text="));
    expect(decodeURIComponent(whatsapp.getAttribute("href") ?? "")).toContain(
      "Hello Kaisone. I’d like to discuss a business process that may need custom software or automation. My organization is: ____. The process I want to improve is: ____.",
    );
  });

  it("renders a standalone privacy view and links to it from the footer", () => {
    const { unmount } = render(<App />);
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    unmount();

    window.history.replaceState({}, "", "/privacy");
    render(<App />);
    expect(screen.getByRole("heading", { name: "Privacy" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Why information is collected" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Storage and access" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Processors" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Retention" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Deletion requests" })).toBeInTheDocument();
    expect(screen.queryByText("Custom software built around how your business actually works.")).not.toBeInTheDocument();
  });
});
