import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Pricing from "@/app/components/Pricing";
import DemoGallery from "@/app/components/DemoGallery";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <DemoGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
