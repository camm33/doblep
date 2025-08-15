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
import tshirt1 from "@/assets/tshirt-1.jpg";
import jeans1 from "@/assets/jeans-1.jpg";
import dress1 from "@/assets/dress-1.jpg";
import bag1 from "@/assets/bag-1.jpg";
import stripedShirt1 from "@/assets/striped-shirt-1.jpg";
import blazer1 from "@/assets/blazer-1.jpg";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("newest");

  const products = [
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
    {
      id: "7",
      image: bag1,
      title: "Bolso de Cuero Negro",
      price: 220000,
      originalPrice: 400000,
      size: "Único",
      condition: "Bueno",
      brand: "Michael Kors",
    },
    {
      id: "8",
      image: stripedShirt1,
      title: "Camisa Rayas Manga Larga",
      price: 75000,
      originalPrice: 140000,
      size: "M",
      condition: "Excelente",
      brand: "Tommy Hilfiger",
    },
    {
      id: "9",
      image: blazer1,
      title: "Blazer Negro Profesional",
      price: 190000,
      originalPrice: 350000,
      size: "L",
      condition: "Como Nuevo",
      brand: "Hugo Boss",
    },
    {
      id: "10",
      image: jacket1,
      title: "Chaqueta Bomber Clásica",
      price: 165000,
      originalPrice: 280000,
      size: "L",
      condition: "Bueno",
      brand: "Nike",
    },
    {
      id: "11",
      image: sweater1,
      title: "Suéter Mezcla de Cachemira",
      price: 205000,
      originalPrice: 420000,
      size: "M",
      condition: "Excelente",
      brand: "J.Crew",
    },
    {
      id: "12",
      image: boots1,
      title: "Botas de Combate",
      price: 135000,
      originalPrice: 285000,
      size: "40",
      condition: "Bueno",
      brand: "Timberland",
    },
  ];

  const categories = [
    { value: "all", label: "Todos los Artículos" },
    { value: "tops", label: "Blusas y Camisas" },
    { value: "bottoms", label: "Pantalones" },
    { value: "outerwear", label: "Chaquetas" },
    { value: "shoes", label: "Zapatos" },
    { value: "accessories", label: "Accesorios" },
  ];

  const sortOptions = [
    { value: "newest", label: "Más Recientes" },
    { value: "price-low", label: "Precio: Menor a Mayor" },
    { value: "price-high", label: "Precio: Mayor a Menor" },
    { value: "popular", label: "Más Populares" },
  ];

  return (
    <div className="min-h-screen">
      <Header cartItemCount={2} />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tienda - Todos los Artículos</h1>
          <p className="text-muted-foreground">Descubre piezas únicas de nuestra colección curada</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar artículos, marcas o estilos..."
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
            Filtros
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
              Búsqueda: "{searchQuery}"
            </Badge>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Mostrando {products.length} resultados
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
            Cargar Más Artículos
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;