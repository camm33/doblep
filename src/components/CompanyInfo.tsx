import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Recycle, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Importar imágenes existentes para el carrusel
import bagImage from "@/assets/bag-1.jpg";
import blazerImage from "@/assets/blazer-1.jpg";
import dressImage from "@/assets/dress-1.jpg";
import jacketImage from "@/assets/jacket-1.jpg";
import jeansImage from "@/assets/jeans-1.jpg";

const CompanyInfo = () => {
  const navigate = useNavigate();

  const carouselImages = [
    { src: bagImage, alt: "Bolsos de segunda mano" },
    { src: blazerImage, alt: "Blazers elegantes" },
    { src: dressImage, alt: "Vestidos únicos" },
    { src: jacketImage, alt: "Chaquetas de calidad" },
    { src: jeansImage, alt: "Jeans para todos" }
  ];

  const features = [
    {
      icon: Heart,
      title: "Inclusivo para Todos",
      description: "Especialistas en tallas grandes y ropa para personas de peso elevado. Creemos que la moda es para todos."
    },
    {
      icon: Recycle,
      title: "Moda Sostenible",
      description: "Promovemos el intercambio y venta de prendas de segunda mano para reducir el impacto ambiental."
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Una plataforma donde puedes vender, comprar e intercambiar prendas con otros amantes de la moda."
    },
    {
      icon: Star,
      title: "Calidad Garantizada",
      description: "Todas nuestras prendas son revisadas para asegurar que estén en excelente estado antes de la venta."
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Moda Inclusiva y Sostenible
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En Pipi, creemos que la moda debe ser accesible para todos. Especializados en tallas grandes 
            y ropa de segunda mano de calidad, creamos un espacio donde puedes encontrar piezas únicas 
            mientras cuidas el planeta.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/shop')} className="group">
            Explorar Catálogo
          </Button>
          <Button size="lg" variant="outline">
            Vender mis Prendas
          </Button>
        </div>
      </section>

      {/* Carrusel de Imágenes */}
      <section className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Descubre Nuestras Prendas
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Características */}
      <section className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary">¿Por Qué Elegir Pipi?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos más que una tienda de segunda mano. Somos una comunidad comprometida 
            con la inclusión, la sostenibilidad y la moda para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="container">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">Nuestra Historia</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pipi nació de la necesidad de crear un espacio inclusivo en el mundo de la moda. 
              Nos dimos cuenta de que las personas de tallas grandes tenían pocas opciones de 
              moda sostenible y accesible. Por eso, creamos una plataforma donde todos pueden 
              encontrar prendas hermosas, intercambiar estilos únicos y contribuir a un futuro 
              más sostenible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada prenda que vendemos cuenta una historia, y cada intercambio fortalece nuestra 
              comunidad. Únete a nosotros en esta misión de hacer la moda más inclusiva, 
              sostenible y accesible para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">¿Listo para Empezar?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explora nuestro catálogo de prendas únicas o comienza a vender las tuyas. 
          ¡La moda sostenible te está esperando!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/shop')}>
            Ver Catálogo Completo
          </Button>
          <Button size="lg" variant="outline">
            Empezar a Vender
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfo;