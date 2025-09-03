import { 
  Monitor, 
  Laptop, 
  Smartphone, 
  Gamepad2, 
  Headphones, 
  Camera, 
  Printer, 
  HardDrive 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Computadores",
    icon: Monitor,
    count: "2.847 produtos",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 2,
    name: "Notebooks",
    icon: Laptop,
    count: "1.456 produtos",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    id: 3,
    name: "Smartphones",
    icon: Smartphone,
    count: "3.219 produtos",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    id: 4,
    name: "Games",
    icon: Gamepad2,
    count: "987 produtos",
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    id: 5,
    name: "Áudio",
    icon: Headphones,
    count: "1.765 produtos",
    color: "text-primary-light",
    bgColor: "bg-primary/10"
  },
  {
    id: 6,
    name: "Câmeras",
    icon: Camera,
    count: "654 produtos",
    color: "text-success-light",
    bgColor: "bg-success/10"
  },
  {
    id: 7,
    name: "Impressoras",
    icon: Printer,
    count: "432 produtos",
    color: "text-muted-foreground",
    bgColor: "bg-muted/50"
  },
  {
    id: 8,
    name: "Componentes",
    icon: HardDrive,
    count: "2.198 produtos",
    color: "text-primary-dark",
    bgColor: "bg-primary/10"
  }
];

const CategoriesGrid = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você precisa navegando por nossas categorias 
            cuidadosamente organizadas com os melhores produtos de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <Card
                key={category.id}
                className="group cursor-pointer bg-card hover:shadow-medium transition-all duration-300 border-card-border hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="p-6 text-center space-y-4">
                  {/* Icon */}
                  <div className={`mx-auto w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>

                  {/* Category Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;