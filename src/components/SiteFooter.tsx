import { Brand } from "./Brand";
import { sitePath } from "../lib/sitePath";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Brand homeHref={sitePath()} /><p>© {new Date().getFullYear()} Kaisone. Practical systems, built responsibly.</p><nav className="footer-links" aria-label="Footer navigation"><a href={sitePath("privacy")}>Privacy</a><a href="#top">Back to top ↑</a></nav></div></footer>;
}
