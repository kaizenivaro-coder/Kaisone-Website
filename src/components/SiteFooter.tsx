import { Brand } from "./Brand";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Brand /><p>© {new Date().getFullYear()} Kaisone. Practical systems, built responsibly.</p><a href="#top">Back to top ↑</a></div></footer>;
}
