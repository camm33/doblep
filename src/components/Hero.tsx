import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="hero-section" className="relative overflow-hidden">
      <div id="hero-overlay" className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container">
          <div className="max-w-2xl text-primary-foreground">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5" />
              <span id="hero-badge" className="text-sm font-medium">Moda Sostenible</span>
            </div>
            
            <h1 id="hero-title" className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span id="hero-accent-text" className="text-accent">DOUBLE π</span>
            </h1>
            
            <p id="hero-description" className="text-xl mb-8 text-primary-foreground/90 max-w-lg">
              Sin límites, sin barreras:<br />
              más tallas, más opciones,<br />
              más de tí.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                id="hero-shop-button"
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={() => navigate('/shop')}
              >
                Comprar Ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button id="hero-sell-button" size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Comenzar a Vender
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;