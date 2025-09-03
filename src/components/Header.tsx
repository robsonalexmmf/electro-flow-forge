import { ShoppingCart, Search, User, Menu, Heart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>Frete grátis a partir de R$ 199 • Entrega expressa disponível</span>
            <div className="flex items-center gap-4">
              <span>Telefone: (11) 3000-0000</span>
              <span>Atendimento: 8h às 22h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">TechStore</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Busque por produtos, marcas e muito mais..." 
                className="pl-10 pr-4 py-2 w-full bg-muted/50 border-border focus:bg-background"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden md:flex">
                    <User className="h-4 w-4 mr-2" />
                    {user?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                    {user?.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleAuthAction}>
                    <User className="h-4 w-4 mr-2" />
                    {isAdmin ? 'Dashboard Admin' : 'Minha Conta'}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" className="hidden md:flex" onClick={handleAuthAction}>
                <User className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            )}
            
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Favoritos</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Carrinho</span>
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="pb-4">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Computadores
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Notebooks
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Smartphones
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Periféricos
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Componentes
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Games
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Casa Inteligente
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors text-success">
              Ofertas
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;