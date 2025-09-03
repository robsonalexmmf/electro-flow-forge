import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Shield,
  Truck,
  CreditCard,
  RotateCcw
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-card-border">
      {/* Trust Section */}
      <div className="bg-secondary/50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center gap-3 p-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold text-sm">Compra Segura</div>
                <div className="text-xs text-muted-foreground">SSL & Certificado</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4">
              <div className="bg-success/10 p-3 rounded-full">
                <Truck className="h-6 w-6 text-success" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold text-sm">Frete Grátis</div>
                <div className="text-xs text-muted-foreground">Acima de R$ 199</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4">
              <div className="bg-warning/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-warning" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold text-sm">Parcele em 12x</div>
                <div className="text-xs text-muted-foreground">Sem juros no cartão</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4">
              <div className="bg-destructive/10 p-3 rounded-full">
                <RotateCcw className="h-6 w-6 text-destructive" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold text-sm">Troca Fácil</div>
                <div className="text-xs text-muted-foreground">7 dias para trocar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">TechStore</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sua loja de tecnologia completa. Os melhores produtos de informática, 
                eletrônicos e games com qualidade garantida e os melhores preços do mercado.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-3">
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Nossas Lojas</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Programa de Afiliados</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Imprensa</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Atendimento</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rastreamento</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">(11) 3000-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">contato@techstore.com.br</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground">
                    Av. Tecnologia, 1234<br />
                    São Paulo - SP, 01234-567
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs text-muted-foreground">Horário de Atendimento:</div>
                <div className="text-xs text-muted-foreground">Segunda à Sexta: 8h às 22h</div>
                <div className="text-xs text-muted-foreground">Sábado: 8h às 18h</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-card-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 TechStore. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>CNPJ: 12.345.678/0001-90</span>
              <span>•</span>
              <span>Razão Social: TechStore Ltda.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;