import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import jacket1 from "@/assets/jacket-1.jpg";
import sweater1 from "@/assets/sweater-1.jpg";
import boots1 from "@/assets/boots-1.jpg";
import tshirt1 from "@/assets/tshirt-1.jpg";
import jeans1 from "@/assets/jeans-1.jpg";
import dress1 from "@/assets/dress-1.jpg";
import bag1 from "@/assets/bag-1.jpg";
import stripedShirt1 from "@/assets/striped-shirt-1.jpg";
import blazer1 from "@/assets/blazer-1.jpg";

const featuredProducts = [
  {
    id: "1",
    image: jacket1,
    title: "Chaqueta de Mezclilla Vintage",
    price: 180000,
    originalPrice: 356000,
    size: "M",
    condition: "Excelente",
    brand: "Levi's",
  },
  {
    id: "2",
    image: sweater1,
    title: "Suéter Tejido Acogedora",
    price: 128000,
    originalPrice: 260000,
    size: "L",
    condition: "Bueno",
    brand: "Zara",
  },
  {
    id: "3", 
    image: boots1,
    title: "Botas de Cuero Hasta el Tobillo",
    price: 300000,
    originalPrice: 600000,
    size: "38",
    condition: "Como Nuevo",
    brand: "Dr. Martens",
  },
  {
    id: "4",
    image: tshirt1,
    title: "Camiseta Básica de Algodón",
    price: 45000,
    originalPrice: 80000,
    size: "S",
    condition: "Excelente",
    brand: "H&M",
  },
  {
    id: "5",
    image: jeans1,
    title: "Jeans Skinny Azul Oscuro",
    price: 95000,
    originalPrice: 180000,
    size: "30",
    condition: "Bueno",
    brand: "Pull & Bear",
  },
  {
    id: "6",
    image: dress1,
    title: "Vestido Floral Midi",
    price: 150000,
    originalPrice: 280000,
    size: "M",
    condition: "Excelente",
    brand: "Mango",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured-section" className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 id="featured-title" className="text-3xl font-bold mb-2">Artículos Destacados</h2>
            <p id="featured-description" className="text-muted-foreground">Piezas seleccionadas especialmente para ti</p>
          </div>
          <Button id="featured-view-all-button" variant="outline" className="group">
            Ver Todos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={(id) => console.log('Navigate to product:', id)}
              onLike={(id) => console.log('Like product:', id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;