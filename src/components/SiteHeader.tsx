import { useEffect, useState } from "react";
import { navigation } from "../content/site";
import { Brand } from "./Brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">Toggle navigation</span>
          <span /><span />
        </button>
        <nav id="site-nav" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button--primary header-cta" href="#contact">Discuss your project</a>
      </div>
    </header>
  );
}
