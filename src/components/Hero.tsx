import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-tech-products.jpg";

const Hero = () => {
  return (
    <section className="bg-hero-gradient text-primary-foreground py-16 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary-foreground/10 rounded-full px-4 py-2 text-sm">
                <Zap className="h-4 w-4 mr-2" />
                Ofertas imperdíveis até 70% OFF
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Tecnologia de
                <span className="bg-gradient-to-r from-warning via-success to-primary-light bg-clip-text text-transparent">
                  {" "}última geração
                </span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Descubra os melhores produtos em informática, eletrônicos e tecnologia. 
                Qualidade garantida e os melhores preços do mercado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Ver Ofertas
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="hero" className="group">
                Explorar Catálogo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                Compra Segura
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4" />
                Frete Grátis
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4" />
                Entrega Expressa
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="bg-card-gradient rounded-3xl p-8 shadow-strong relative overflow-hidden">
              <img 
                src={heroImage} 
                alt="Produtos de tecnologia em destaque"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                70% OFF
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground px-4 py-2 rounded-xl font-medium shadow-lg border border-card-border">
                Frete Grátis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;