import "./App.css";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Navigation from "./sections/Navigation";
import Technologies from "./sections/Technologies";
import Projects from "./sections/projects/Projects";
import up from "./assets/icons8-up-48.png";

function App() {
  return (
    <div
      id="top"
      className="App lg:top-0  bg-slate-900 text-slate-400 max-h-screen font-thin"
    >
      <a
        href="#top"
        className="h-10 w-10 border border-sky-400 fixed bottom-4 right-4 flex justify-center justify-items-center rounded-md"
      >
        <img src={up} alt="Go to top of page" className="max-h-8 " />
      </a>
      <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div id="wrapper" className="lg:flex lg:justify-between lg:gap-4">
          <header
            id="header"
            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
          >
            <div className="flex flex-col justify-gap gap-4">
              <h1 className="text-4xl font-bold tracking-tight text-sky-400 sm:text-5xl">
                Craig Davison
              </h1>
              <h2 className="text-2xl font-medium  text-sky-200">
                Full Stack Web Developer
              </h2>
              <p>Building solutions to manage your business!</p>
              <p>
                <Navigation />
              </p>
            </div>
            <p className="pt-20">
              <Technologies />
            </p>
          </header>
          <main className="pt-20 lg:w-1/2 lg:py-24">
            <div className="mb-20">
              <About id="about" />
            </div>
            <div id="experience" className="mb-20">
              <Experience />
            </div>
            <div id="projects" className="mb-20">
              <h4>Projects</h4>
              <Projects />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
