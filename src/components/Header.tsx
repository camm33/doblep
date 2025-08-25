import { ShoppingBag, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/ui/search";
import { DropdownProfile } from "@/components/ui/dropdown-profile";
import { ProfileModal } from "@/components/ProfileModal";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import logoImage from "@/assets/logo.png";

interface HeaderProps {
  cartItemCount?: number;
}

const Header = ({ cartItemCount = 0 }: HeaderProps) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  // Solo mostrar barra de búsqueda en el catálogo
  const showSearchBar = isAuthenticated && location.pathname === '/shop';

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/login');
  };

  const handleUserClick = () => {
    if (isAuthenticated) {
      return;
    } else {
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleSearch = (searchQuery: string) => {
    console.log('Searching for:', searchQuery);
    // Aquí implementarías la lógica de búsqueda
    toast.info(`Buscando: ${searchQuery}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="h-8 w-8 rounded overflow-hidden">
            <img 
              src={logoImage} 
              alt="Pipi Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-xl">Pipi</span>
        </div>

        {/* Search Bar (solo en el catálogo) */}
        {showSearchBar ? (
          <div className="flex-1 max-w-md mx-8">
            <SearchBar onSearch={handleSearch} />
          </div>
        ) : !isAuthenticated ? (
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
        ) : (
          <div></div>
        )}

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
          
          {isAuthenticated && user ? (
            <DropdownProfile 
              user={user}
              onLogout={handleLogout}
              onProfileClick={handleProfileClick}
            />
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
      
      {/* Profile Modal */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </header>
  );
};

export default Header;