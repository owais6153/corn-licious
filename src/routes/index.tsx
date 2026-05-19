import { createFileRoute } from "@tanstack/react-router";
import { CornNav } from "@/components/CornNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Flavors } from "@/components/Flavors";
import { Menu } from "@/components/Menu";
import { Chef } from "@/components/Chef";
import { Dessert } from "@/components/Dessert";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <CornNav />
      <Hero />
      <Marquee />
      <Flavors />
      <Menu />
      <Chef />
      <Dessert />
      <Story />
      <Testimonials />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  );
}
