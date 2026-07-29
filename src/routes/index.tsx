import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { TrustedBy } from "../components/landing/TrustedBy";
import { Features } from "../components/landing/Features";
import { ProductPreview } from "../components/landing/ProductPreview";
import { Integrations } from "../components/landing/Integrations";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Pricing } from "../components/landing/Pricing";
import { Testimonials } from "../components/landing/Testimonials";
import { FAQ } from "../components/landing/FAQ";
import { CTA } from "../components/landing/CTA";
import { Footer } from "../components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <ProductPreview />
      <Integrations />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
