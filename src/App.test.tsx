import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Kaisone website", () => {
  it("renders the approved offer and honest initiatives", () => {
    render(<App />);
    expect(screen.getByRole("heading", {name: "Kaisone"})).toBeInTheDocument();
    expect(screen.getByText("Practical AI for schools and growing organizations.")).toBeInTheDocument();
    expect(screen.getByText("FK School Platform")).toBeInTheDocument();
    expect(screen.getByText("Prototype")).toBeInTheDocument();
  });

  it("expands a service without leaving the page", () => {
    render(<App />);
    const service = screen.getByRole("button", {name: /AI Training/i});
    fireEvent.click(service);
    expect(service).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Staff and leadership workshops")).toBeInTheDocument();
  });

  it("preserves and copies a contact brief when no endpoint is configured", async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "Kaizen"}});
    fireEvent.change(screen.getByLabelText("Organization"), {target: {value: "Kaisone"}});
    fireEvent.change(screen.getByLabelText("Email"), {target: {value: "test@example.com"}});
    fireEvent.change(screen.getByLabelText("What are you trying to improve?"), {target: {value: "AI training"}});
    fireEvent.click(screen.getByRole("button", {name: "Request an AI readiness session"}));
    await waitFor(() => expect(screen.getByText(/Inquiry copied/)).toBeInTheDocument());
    expect(localStorage.getItem("kaisone-contact-draft")).toContain("AI training");
  });
});
