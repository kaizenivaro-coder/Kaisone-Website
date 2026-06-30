import { Brand } from "./Brand";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Brand homeHref="/" /><p>© {new Date().getFullYear()} Kaisone. Practical systems, built responsibly.</p><nav className="footer-links" aria-label="Footer navigation"><a href="/privacy">Privacy</a><a href="#top">Back to top ↑</a></nav></div></footer>;
}
