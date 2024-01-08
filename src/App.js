import "./App.css";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Navigation from "./components/Nav";
import Technologies from "./sections/Technologies";
import Projects from "./sections/projects/Projects";
import up from "./assets/icons8-up-48.png";
import ProgressBar from "./components/ScrollProgressBar";
import Contact from "./sections/ContactForm";
import ContactDetails from "./sections/ContactDetails";
import OrbitalColors from "./components/Backgrouds/OrbitalColors";

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
            <header
              id="header"
              className="md:h-auto 
              lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24
              "
            >
              <div className="flex flex-col justify-gap gap-4">
                <h1
                  className=" text-4xl font-bold leading-6 text-white/10 sm:text-5xl
                            bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text"
                >
                  Craig Davison
                </h1>
                <h2 className="text-2xl font-medium text-sky-200">
                  Full Stack Web Developer
                </h2>
                <p>Building solutions to manage your business!</p>
                <p className="z-10">
                  <Navigation />
                </p>
              </div>
              <p>
                <ContactDetails />
              </p>
              <p className="pt-20">
                <Technologies />
              </p>
            </header>
            <main className="pt-20 lg:w-1/2 lg:py-24">
              <div className="mb-10">
                <About id="about" />
              </div>

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
