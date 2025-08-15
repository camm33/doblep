import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container">
          <div className="max-w-2xl text-primary-foreground">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Sustainable Fashion</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Style,
              <br />
              <span className="text-accent">Reimagined</span>
            </h1>
            
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-lg">
              Discover unique pieces, sell what you love, and join the sustainable fashion revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;