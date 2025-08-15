import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import jacket1 from "@/assets/jacket-1.jpg";
import sweater1 from "@/assets/sweater-1.jpg";
import boots1 from "@/assets/boots-1.jpg";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("newest");

  const products = [
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
    {
      id: "4",
      image: jacket1,
      title: "Classic Bomber Jacket",
      price: 55,
      originalPrice: 120,
      size: "L",
      condition: "Good",
      brand: "Nike",
    },
    {
      id: "5",
      image: sweater1,
      title: "Cashmere Blend Sweater",
      price: 68,
      originalPrice: 140,
      size: "M",
      condition: "Excellent",
      brand: "J.Crew",
    },
    {
      id: "6",
      image: boots1,
      title: "Combat Boots",
      price: 45,
      originalPrice: 95,
      size: "9",
      condition: "Good",
      brand: "Timberland",
    },
  ];

  const categories = [
    { value: "all", label: "All Items" },
    { value: "tops", label: "Tops" },
    { value: "bottoms", label: "Bottoms" },
    { value: "outerwear", label: "Outerwear" },
    { value: "shoes", label: "Shoes" },
    { value: "accessories", label: "Accessories" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "popular", label: "Most Popular" },
  ];

  return (
    <div className="min-h-screen">
      <Header cartItemCount={2} />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop All Items</h1>
          <p className="text-muted-foreground">Discover unique pieces from our curated collection</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for items, brands, or styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Filter Button */}
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategory !== "all" && (
            <Badge variant="secondary" className="gap-2">
              {categories.find(c => c.value === selectedCategory)?.label}
            </Badge>
          )}
          {searchQuery && (
            <Badge variant="secondary" className="gap-2">
              Search: "{searchQuery}"
            </Badge>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {products.length} results
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={(id) => console.log('Navigate to product:', id)}
              onLike={(id) => console.log('Like product:', id)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More Items
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;