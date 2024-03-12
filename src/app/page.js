import About from "./Components/About/page";
import CertificationsPage from "./Components/Certifications/page";
import EducationPage from "./Components/Education/page";
import Intrests from "./Components/Intrests/page";
import Projects from "./Components/Projects/page";
import Skills from "./Components/Skills/page";

export default function Home() {
  return (
    <div>
      <About/>
      <Projects/>
      <Skills/>
      <EducationPage/>
      <CertificationsPage/>
      <Intrests/>
    </div>
  )
}
