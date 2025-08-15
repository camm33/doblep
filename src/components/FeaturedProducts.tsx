import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import jacket1 from "@/assets/jacket-1.jpg";
import sweater1 from "@/assets/sweater-1.jpg";
import boots1 from "@/assets/boots-1.jpg";

const featuredProducts = [
  {
    id: "1",
    image: jacket1,
    title: "Vintage Denim Jacket",
    price: 45,
    originalPrice: 89,
    size: "M",
    condition: "Excellent",
    brand: "Levi's",
  },
  {
    id: "2",
    image: sweater1,
    title: "Cozy Knit Sweater",
    price: 32,
    originalPrice: 65,
    size: "L",
    condition: "Good",
    brand: "Zara",
  },
  {
    id: "3", 
    image: boots1,
    title: "Leather Ankle Boots",
    price: 75,
    originalPrice: 150,
    size: "8",
    condition: "Like New",
    brand: "Dr. Martens",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Items</h2>
            <p className="text-muted-foreground">Handpicked pieces just for you</p>
          </div>
          <Button variant="outline" className="group">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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