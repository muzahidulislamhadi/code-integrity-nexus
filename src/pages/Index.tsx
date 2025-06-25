
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <BentoGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
