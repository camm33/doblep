import { ShoppingBag, User, Plus, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface HeaderProps {
  cartItemCount?: number;
}

const Header = ({ cartItemCount = 0 }: HeaderProps) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/login');
  };

  const handleUserClick = () => {
    if (isAuthenticated) {
      // Mostrar perfil o menú de usuario
      return;
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">V</span>
          </div>
          <span className="font-bold text-xl">Vintage</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Tienda
          </a>
          <a href="/sell" className="text-foreground hover:text-primary transition-colors">
            Vender
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Vender Artículo</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
          
          {isAuthenticated ? (
            <>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleUserClick}
                title={`Hola, ${user?.username}`}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleUserClick}
              title="Iniciar sesión"
            >
              <User className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;