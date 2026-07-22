import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { OneLiner } from "@/components/sections/OneLiner";
import { BrandWork } from "@/components/sections/BrandWork";
import { PainBlock } from "@/components/sections/PainBlock";
import { Services } from "@/components/sections/Services";
// TABLED: "Why it works" section. Component preserved at
// sections/CompoundLoop.tsx. Uncomment this import + the <CompoundLoop /> below
// to bring it back.
// import { CompoundLoop } from "@/components/sections/CompoundLoop";
import { Process } from "@/components/sections/Process";
import { WhoFor } from "@/components/sections/WhoFor";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
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
        <BrandWork />
        <PainBlock />
        <Services />
        <Process />
        {/* <CompoundLoop /> tabled for now — see import note above to restore. */}
        <WhoFor />
        <Testimonials />
        <Comparison />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
