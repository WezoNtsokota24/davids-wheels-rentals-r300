import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetAudiences from "@/components/TargetAudiences";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TargetAudiences />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
