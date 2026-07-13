import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { OneLiner } from "@/components/sections/OneLiner";
import { PainBlock } from "@/components/sections/PainBlock";
import { Services } from "@/components/sections/Services";
import { CompoundLoop } from "@/components/sections/CompoundLoop";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { Reviews } from "@/components/sections/Reviews";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Results />
        <OneLiner />
        <PainBlock />
        <Services />
        <CompoundLoop />
        <Process />
        <Testimonials />
        <Comparison />
        <Reviews />
        <Guarantee />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
