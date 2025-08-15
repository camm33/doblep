import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl">Vintage</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Marketplace de moda sostenible para comprar y vender ropa de segunda mano.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold">Tienda</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Mujer</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Hombre</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accesorios</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Zapatos</a></li>
            </ul>
          </div>

          {/* Sell */}
          <div className="space-y-4">
            <h3 className="font-semibold">Vender</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Comenzar a Vender</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guía del Vendedor</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tarifas</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Envíos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Soporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contáctanos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Devoluciones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guía de Tallas</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Vintage. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;