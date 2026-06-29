import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { Initiatives } from "./components/Initiatives";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function App() {
  return <><SiteHeader /><main><Hero /><Services /><Education /><Initiatives /><Process /><About /><Contact /></main><SiteFooter /></>;
}
