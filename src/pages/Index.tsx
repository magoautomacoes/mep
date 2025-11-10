import { Button } from "@/components/ui/button";
import { Check, FileText, Smartphone, TrendingUp, Users, Shield, Sparkles } from "lucide-react";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('offer');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="text-accent text-5xl md:text-6xl font-display font-bold tracking-tight">
              MEP
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1 tracking-widest">
              MÉTODO EBOOK PREMIUM
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in">
            Seu ebook não vai mais<br />ser só um PDF.
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-display mb-4 text-secondary animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Torne-se premium entregando um app.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transforme seu ebook em um aplicativo moderno, com visual profissional e experiência de leitura premium.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={scrollToCTA}
              className="btn-primary mb-4"
            >
              Quero criar meu Ebook Premium
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Não precisa programar. Método Copy & Paste.
            </p>
          </div>
        </div>
      </section>

      {/* Before x After Section */}
      <section className="section-container py-20 md:py-32 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            De PDF esquecido para<br />experiência premium.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="card-premium border-2 border-border">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">ANTES</span>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">PDF comum</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Experiência genérica</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Baixo valor percebido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Cliente não engaja</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Cai no esquecimento</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="card-premium bg-primary text-primary-foreground border-2 border-primary shadow-premium">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-accent tracking-wide">DEPOIS</span>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4">App interativo</h3>
            <ul className="space-y-3 text-primary-foreground/90">
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
      </section>

      {/* What You Get Section */}
      <section className="section-container py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            O que você recebe
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Template pronto</h3>
            <p className="text-muted-foreground">
              Interface completa e profissional, pronta para usar
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Método copy & paste</h3>
            <p className="text-muted-foreground">
              Rápido e simples, sem necessidade de programação
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">App com visual premium</h3>
            <p className="text-muted-foreground">
              Design moderno que valoriza seu conteúdo
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="section-container py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            O seu cliente valoriza<br />experiência, não arquivo.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="text-5xl font-display font-bold text-accent mb-3">01</div>
              <h3 className="text-xl font-display font-semibold mb-2">Engaja mais</h3>
              <p className="text-primary-foreground/80">
                App com navegação intuitiva mantém o cliente focado
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-bold text-accent mb-3">02</div>
              <h3 className="text-xl font-display font-semibold mb-2">Aumenta o valor</h3>
              <p className="text-primary-foreground/80">
                Experiência premium justifica preços maiores
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-bold text-accent mb-3">03</div>
              <h3 className="text-xl font-display font-semibold mb-2">Reduz reembolsos</h3>
              <p className="text-primary-foreground/80">
                Cliente satisfeito com a experiência fica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-container py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Este método é para você que:
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="card-premium flex items-start gap-4">
            <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Vende ebooks</h3>
              <p className="text-muted-foreground">
                E quer entregar algo que realmente impressione seus clientes
              </p>
            </div>
          </div>

          <div className="card-premium flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Quer se diferenciar</h3>
              <p className="text-muted-foreground">
                E ser percebido como especialista premium no mercado
              </p>
            </div>
          </div>

          <div className="card-premium flex items-start gap-4">
            <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Quer aumentar ticket</h3>
              <p className="text-muted-foreground">
                E cobrar mais oferecendo uma experiência de alto valor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="section-container py-20 md:py-32 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="card-premium text-center border-2 border-accent">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              Preço especial de lançamento
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Transforme seu ebook hoje
            </h2>
            
            <div className="mb-8">
              <div className="text-2xl text-muted-foreground line-through mb-2">
                R$ 97
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                R$ 47
              </div>
              <div className="text-muted-foreground">
                Acesso vitalício ao método completo
              </div>
            </div>

            <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>Template completo pronto para usar</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>Método passo a passo copy & paste</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>Design premium personalizável</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>Suporte para implementação</span>
              </div>
            </div>
            
            <Button className="btn-primary w-full max-w-md">
              Quero transformar meu ebook
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Garantia total
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você aplicar o método e não conseguir criar seu app premium, devolvemos 100% do seu investimento. Sem perguntas, sem complicação.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-container py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-accent text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
            MEP
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Comece agora.<br />Seu ebook merece ser premium.
          </h2>
          
          <Button 
            onClick={scrollToCTA}
            className="btn-champagne"
          >
            Quero minha versão premium
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container py-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Método Ebook Premium. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
