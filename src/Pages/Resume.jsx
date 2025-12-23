import Footer from "../Components/Footer";
import Projects from "../Components/Projects";

const Resume = () => {
  return (
    <div className="overflow-hidden">
      <section className=" text-white min-h-screen justify-between bg-black">
        <div className="flex justify-between px-4 pt-30 sm:px-20 pb-20 w-full sm:text-6xl text-5xl font-black font-secondary">
          <h1>Projects</h1>
          <h1 className="text-white/40">
            6<span className="text-xl">cast</span>
          </h1>
        </div>
        <Projects />
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
