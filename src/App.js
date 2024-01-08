import "./App.css";
import ProgressBar from "./components/ScrollProgressBar";
import OrbitalColors from "./components/Backgrouds/OrbitalColors";
import About from "./sections/About";
import Hero from "./components/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <>
      <ProgressBar />
      <div
        id="top"
        className="relative App lg:top-0 bg-slate-900 text-slate-400 max-h-screen font-thin"
      >
        <OrbitalColors />
        <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div id="wrapper" className="lg:flex lg:justify-between lg:gap-4">
            <Hero />
            <main className="pt-20 lg:w-1/2 lg:py-24">
              <About id="about" />
              <Experience />
              <Projects />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
