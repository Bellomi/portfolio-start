import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
import MyProjects from "./components/main/Projects";
import Skills from "./components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <MyProjects />
        <Footer />
      </div>
    </main>
  );
}
