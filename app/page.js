import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mt-20">
          <Header />
          <Contacts />
          <About />
          <Skills />
        </div>
      </main>
    </div>
  );
}
