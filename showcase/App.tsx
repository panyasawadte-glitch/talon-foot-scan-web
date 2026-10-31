import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <HeroSection onStart={() => document.getElementById("showcase-note")?.scrollIntoView({ behavior: "smooth" })} />
      <section id="showcase-note" className="px-6 py-12 text-center bg-primary/5">
        <h2 className="text-2xl font-bold mb-3">Public Product Showcase</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          This edition demonstrates the public landing-page experience. The production assessment,
          medical questionnaire, AI analysis, customer data, and administrative tools remain private.
        </p>
      </section>
      <Footer />
    </main>
  );
}
