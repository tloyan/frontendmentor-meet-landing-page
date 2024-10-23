import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";
import { Footer } from "@/app/components/Footer"

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
