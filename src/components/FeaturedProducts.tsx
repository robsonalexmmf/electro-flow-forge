import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const mockProducts = [
  {
    id: "1",
    name: "Notebook Dell Inspiron 15 3000 Intel Core i5 8GB 256GB SSD Tela 15.6'' Windows 11",
    price: 2499.90,
    originalPrice: 3299.90,
    rating: 4.5,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    badge: "BESTSELLER",
    discount: 24
  },
  {
    id: "2", 
    name: "iPhone 15 Pro Max 256GB Titânio Natural",
    price: 8999.90,
    originalPrice: 9999.90,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80",
    badge: "LANÇAMENTO",
    discount: 10
  },
  {
    id: "3",
    name: "Monitor Gamer Samsung Odyssey G5 27'' 144Hz 1ms WQHD Curvo",
    price: 1299.90,
    originalPrice: 1599.90,
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    discount: 19
  },
  {
    id: "4",
    name: "Placa de Vídeo RTX 4060 Ti 16GB GDDR6 MSI Gaming X Trio",
    price: 3299.90,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80",
    badge: "OFERTA"
  },
  {
    id: "5",
    name: "Teclado Mecânico Gamer HyperX Alloy FPS Pro Cherry MX Blue",
    price: 399.90,
    originalPrice: 549.90,
    rating: 4.4,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80",
    discount: 27
  },
  {
    id: "6",
    name: "Mouse Gamer Logitech G Pro X Superlight 25600 DPI Sem Fio",
    price: 649.90,
    originalPrice: 799.90,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    discount: 19
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Selecionamos os melhores produtos com as melhores avaliações e preços 
              imperdíveis especialmente para você.
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex">
            Ver Todos os Produtos
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="w-full max-w-xs">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;