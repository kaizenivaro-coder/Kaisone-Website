import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Initiatives } from "./components/Initiatives";
import { Privacy } from "./components/Privacy";
import { Process } from "./components/Process";
import { PrototypeNotice } from "./components/PrototypeNotice";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { sitePath } from "./lib/sitePath";

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const privacyPath = sitePath("privacy").replace(/\/+$/, "");

  if (currentPath === privacyPath) {
    return <><PrototypeNotice /><Privacy /><SiteFooter /></>;
  }

  return <><PrototypeNotice /><SiteHeader /><main><Hero /><Services /><Initiatives /><Process /><About /><Contact /></main><SiteFooter /></>;
}
