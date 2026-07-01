export function PrototypeNotice() {
  if (import.meta.env.VITE_PROTOTYPE_PREVIEW !== "true") return null;

  return (
    <div className="prototype-notice" role="status">
      Prototype preview. This temporary test site is not accepting inquiries.
    </div>
  );
}
