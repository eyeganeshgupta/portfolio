import Contacts from "@/components/Contacts";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mt-20">
          <Header />
          <Contacts />
        </div>
      </main>
    </div>
  );
}
