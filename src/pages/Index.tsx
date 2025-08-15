import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header cartItemCount={2} />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
