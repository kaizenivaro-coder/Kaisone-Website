import { sitePath } from "../lib/sitePath";

interface BrandProps {
  compact?: boolean;
  dark?: boolean;
  homeHref?: string;
}

export function Brand({ compact = false, dark = true, homeHref = "#top" }: BrandProps) {
  return (
    <a className={`brand ${dark ? "brand--dark" : "brand--light"}`} href={homeHref} aria-label="Kaisone home">
      <img src={sitePath(dark ? "brand/kaisone-mark-white.png" : "brand/kaisone-mark-ink.png")} alt="" />
      {!compact && <span>Kaisone</span>}
    </a>
  );
}
