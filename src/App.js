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
      className="App lg:top-0 bg-slate-900 text-slate-400 max-h-screen font-thin"
    >
      <a
        href="#top"
        className="z-10 h-10 w-10 border bg-slate-900 border-sky-400 fixed bottom-4 right-4 flex justify-center justify-items-center rounded-md"
      >
        <img src={up} alt="Go to top of page" className="max-h-8 " />
      </a>

      <div className="fixed top-10 -left-8 w-72 h-72 bg-pink-400 rounded-full filter blur-2xl translate(0px 0px) opacity-5 animate-blob "></div>
      <div className="fixed top-12 right-8 w-72 h-72 bg-sky-400 rounded-full filter blur-2xl translate(0px 0px)  opacity-5 animate-blob1"></div>
      <div className="fixed bottom-8 left-36 w-96 h-96 bg-green-400 rounded-full filter blur-2xl translate(0px 0px)  opacity-5 animate-blob2"></div>
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
            <p className="pt-20">
              <Technologies />
            </p>
          </header>
          <main className="pt-20 lg:w-1/2 lg:py-24">
            <div className="mb-10">
              <About id="about" />
            </div>
            <div id="experience" className="mb-20">
              <h4 className="text-4xl font-extrabold text-slate-800">
                Experience
              </h4>
              <Experience />
            </div>
            <div id="projects" className="mb-20">
              <h4 className="text-4xl font-extrabold text-slate-800">
                Projects
              </h4>
              <Projects />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
