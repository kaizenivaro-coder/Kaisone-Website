import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Initiatives } from "./components/Initiatives";
import { Privacy } from "./components/Privacy";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/privacy") {
    return <><Privacy /><SiteFooter /></>;
  }

  return <><SiteHeader /><main><Hero /><Services /><Initiatives /><Process /><About /><Contact /></main><SiteFooter /></>;
}
