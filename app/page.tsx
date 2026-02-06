import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroSplit from "../components/IntroSplit";
import Specialties from "../components/Specialties";
import SupportSplit from "../components/SupportSplit";
import FAQ from "../components/FAQ";
import Office from "../components/Office";
import Background from "../components/Background"
import ProfessionalBg from "../components/ProfessionalBg";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <IntroSplit />
      <Specialties />
      <SupportSplit />
      <Background />
      <FAQ />
      <Office />
      <ProfessionalBg />
      <CTA />
      <Footer />
    </>
  );
}
