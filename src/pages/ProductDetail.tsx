import { useState } from "react";
import { ArrowLeft, Heart, Share2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import jacket1 from "@/assets/jacket-1.jpg";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isLiked, setIsLiked] = useState(false);

  const product = {
    id: "1",
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    price: 45,
    originalPrice: 89,
    condition: "Excellent",
    description: "A classic vintage Levi's denim jacket in excellent condition. This timeless piece features the iconic trucker jacket design with button closure, chest pockets, and a comfortable fit. Perfect for layering and adding a vintage touch to any outfit.",
    images: [jacket1, jacket1, jacket1],
    sizes: ["S", "M", "L", "XL"],
    seller: {
      name: "Sarah M.",
      rating: 4.8,
      reviews: 127,
    },
    details: {
      Material: "100% Cotton Denim",
      Color: "Classic Blue",
      Condition: "Excellent - No visible wear",
      "Original Purchase": "2019",
      "Care Instructions": "Machine wash cold, hang dry",
    },
  };

  return (
    <div className="min-h-screen">
      <Header cartItemCount={2} />
      
      <div className="container py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${product.title} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{product.condition}</Badge>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground font-medium mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[hsl(var(--price-highlight))]">
                  ${product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <Badge variant="outline" className="bg-success/10 text-success border-success">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </Badge>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="w-12 h-12"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                Buy Now
              </Button>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Seller Info */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Sold by {product.seller.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.seller.rating} ★ ({product.seller.reviews} reviews)
                  </p>
                </div>
                <Button variant="outline">View Profile</Button>
              </div>
            </Card>

            {/* Product Details */}
            <div>
              <h3 className="font-semibold mb-3">Product Details</h3>
              <div className="space-y-2">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;