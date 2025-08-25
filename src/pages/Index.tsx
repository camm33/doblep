import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyInfo from "@/components/CompanyInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header cartItemCount={2} />
      <Hero />
      <CompanyInfo />
      <Footer />
    </div>
  );
};

export default Index;
