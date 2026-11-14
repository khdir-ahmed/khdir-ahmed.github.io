import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { About, Contact, CV, Experience, Footer, Projects, Skills } from "./components/Sections";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="bg-grid pointer-events-none fixed inset-0 -z-0" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
