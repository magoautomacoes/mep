import { Button } from "@/components/ui/button";
import { Check, FileText, Smartphone, TrendingUp, Users, Shield, Sparkles } from "lucide-react";
import { HeroWithAurora } from "@/components/HeroWithAurora";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('offer');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <HeroWithAurora onCTAClick={scrollToCTA} />

      {/* Before x After Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 leading-tight">
              De PDF esquecido para<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>experiência premium.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {/* Before */}
            <div className="card-premium border-2 border-border h-full">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <FileText className="w-7 h-7 md:w-8 md:h-8 text-muted-foreground flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wide">ANTES</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-5">PDF comum</h3>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>Experiência genérica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>Baixo valor percebido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>Cliente não engaja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>Cai no esquecimento</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="card-premium bg-primary text-primary-foreground border-2 border-primary shadow-premium h-full">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-accent tracking-wide">DEPOIS</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-5">App interativo</h3>
              <ul className="space-y-3 text-sm md:text-base text-primary-foreground/90">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Experiência premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Alto valor percebido</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Cliente fica engajado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Marca forte e profissional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              O que você recebe
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            <div className="text-center px-4 py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/20 mb-5 md:mb-6">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">Template pronto</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Interface completa e profissional, pronta para usar
              </p>
            </div>

            <div className="text-center px-4 py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/20 mb-5 md:mb-6">
                <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">Método copy & paste</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Rápido e simples, sem necessidade de programação
              </p>
            </div>

            <div className="text-center px-4 py-6 sm:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/20 mb-5 md:mb-6">
                <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">App com visual premium</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Design moderno que valoriza seu conteúdo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
              O seu cliente valoriza<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>experiência, não arquivo.
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-12 md:mt-16">
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-3 md:mb-4">01</div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">Engaja mais</h3>
                <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                  App com navegação intuitiva mantém o cliente focado
                </p>
              </div>

              <div className="px-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-3 md:mb-4">02</div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">Aumenta o valor</h3>
                <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                  Experiência premium justifica preços maiores
                </p>
              </div>

              <div className="px-4 sm:col-span-2 lg:col-span-1">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-3 md:mb-4">03</div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">Reduz reembolsos</h3>
                <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                  Cliente satisfeito com a experiência fica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              Este método é para você que:
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 px-4">
            <div className="card-premium flex items-start gap-3 md:gap-4">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Vende ebooks</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  E quer entregar algo que realmente impressione seus clientes
                </p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-3 md:gap-4">
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Quer se diferenciar</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  E ser percebido como especialista premium no mercado
                </p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-3 md:gap-4">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Quer aumentar ticket</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  E cobrar mais oferecendo uma experiência de alto valor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto px-4">
            <div className="card-premium text-center border-2 border-accent">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-medium mb-6">
                Preço especial de lançamento
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 px-2">
                Transforme seu ebook hoje
              </h2>
              
              <div className="mb-8">
                <div className="text-xl md:text-2xl text-muted-foreground line-through mb-2">
                  R$ 97
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                  R$ 47
                </div>
                <div className="text-sm md:text-base text-muted-foreground px-2">
                  Acesso vitalício ao método completo
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-left max-w-md mx-auto px-2">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Template completo pronto para usar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Método passo a passo copy & paste</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Design premium personalizável</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Suporte para implementação</span>
                </div>
              </div>
              
              <Button className="btn-primary w-full max-w-md mx-auto">
                Quero transformar meu ebook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20 mb-5 md:mb-6">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 md:mb-5">
              Garantia total
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Se você aplicar o método e não conseguir criar seu app premium, devolvemos 100% do seu investimento. Sem perguntas, sem complicação.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground text-center">
        <div className="section-container">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5 md:mb-6">
              MEP
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
              Comece agora.<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Seu ebook merece ser premium.
            </h2>
            
            <Button 
              onClick={scrollToCTA}
              className="btn-champagne w-full sm:w-auto"
            >
              Quero minha versão premium
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-border">
        <div className="section-container">
          <div className="text-center text-xs md:text-sm text-muted-foreground px-4">
            <p>© 2025 Método Ebook Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
