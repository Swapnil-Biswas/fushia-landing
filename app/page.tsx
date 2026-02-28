import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollReveal from "../components/ScrollReveal";
import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";
import IntroLoader from "../components/IntroLoader";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen pb-6">
      <IntroLoader />
      <div className="relative z-10">
        <ScrollToTopOnLoad />
        <ScrollReveal />
        <Navbar />
        <Hero />
        <Features />
        <ScrollTopButton />
      </div>
    </main>
  );
}
