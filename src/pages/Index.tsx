import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, FileText, Smartphone, TrendingUp, Users, Sparkles } from "lucide-react";
import { HeroWithAurora } from "@/components/HeroWithAurora";
import { BeforeAfterCompare } from "@/components/ui/before-after-compare";
import Footer from "@/components/ui/footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import FAQs from "@/components/ui/faqs";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('offer');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <HeroWithAurora onCTAClick={scrollToCTA} />

      {/* Demonstração interativa: Antes vs Depois */}
      <section className="py-12 sm:py-14 md:py-16 bg-muted/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <BeforeAfterCompare
              className="mx-auto w-[280px] sm:w-[320px] md:w-[360px]"
              containerClassName="h-[560px] sm:h-[640px] md:h-[720px]"
              beforeSrc="https://s3.magoautomacoes.com.br/desing/video%20demonstrativo%20sem%20app.mp4"
              afterSrc="https://s3.magoautomacoes.com.br/desing/video%20demonstrativo%20app.mp4"
              beforeAlt="Sem app"
              afterAlt="Com app"
              beforeLabel="Sem app"
              afterLabel="Com app"
              initialPosition={0.5}
              beforeIsVideo={true}
              afterIsVideo={true}
            />
            <div className="text-xs md:text-sm text-muted-foreground mt-3 text-center">
              Arraste para comparar a experiência entre PDF e App.
            </div>
          </div>
        </div>
      </section>


      {/* O problema */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">O problema</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Seu ebook não deveria ser “só um PDF”. PDFs comuns parecem genéricos, têm baixo valor percebido e ficam esquecidos na pasta de downloads. Resultado: menos engajamento, mais reembolsos e ticket estagnado.
            </p>
          </div>
        </div>
      </section>

      {/* A solução */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">A solução</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Com o MEP — Método Ebook Premium, você entrega seu conteúdo como app interativo: navegação intuitiva, design premium, leitura fluida e marca forte — com gamificação, rede social interna, ranking e notificações. Sem fricção, sem necessidade de programação.
            </p>
            <div className="mt-4">
              <Button variant="premium" size="xl" onClick={scrollToCTA}>Transformar meu e-book agora</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before x After Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 leading-tight">
              De PDF esquecido para<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              <AuroraText colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]} className="tracking-tight">experiência premium.</AuroraText>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Before */}
            <div className="card-premium border-2 border-border h-full">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <FileText className="w-7 h-7 md:w-8 md:h-8 text-muted-foreground flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wide">ANTES</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-5">PDF comum</h3>
              <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>PDF genérico, baixo valor percebido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>PDF não engaja</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="card-premium bg-primary text-primary-foreground border-2 border-primary shadow-premium h-full">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-accent tracking-wide">DEPOIS</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-5">App premium</h3>
              <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-primary-foreground/90">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>App com experiência premium, alto valor percebido</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>App engaja o cliente e reduz reembolsos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* Benefícios em bullets concisos */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">Benefícios</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">Mais engajamento, maior valor percebido, autoridade de especialista e menos reembolsos.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base">Gamificação, notificações e navegação fluida geram engajamento.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base">Visual premium eleva valor percebido e autoridade.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base">Marca forte e experiência moderna reforçam posicionamento.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base">Menos reembolsos e maior satisfação dos clientes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos (colunas shadcn) */}
      <TestimonialsSection />

      

      

      {/* Para quem é */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              Este método é para você que:
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 px-4 sm:px-6">
            <div className="card-premium flex items-start gap-3 md:gap-4">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Quem vende ebooks</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">E quer impressionar seus clientes com experiência premium.</p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-3 md:gap-4">
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Profissionais e experts</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Que desejam posicionamento premium e reforço de autoridade.</p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-3 md:gap-4">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Infoprodutores</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Que buscam aumentar ticket e retenção com alto valor percebido.</p>
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
                Preço de lançamento por tempo limitado
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 px-2">
                Transforme seu <LineShadowText shadowColor="hsl(var(--accent))">ebook</LineShadowText> hoje
              </h2>
              
              <div className="mb-8">
                <div className="text-xl md:text-2xl text-muted-foreground line-through mb-2">
                  R$ 97,00
                </div>
                <div className="mb-2">
                  <AnimatedShinyText className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
                    R$ 47,00
                  </AnimatedShinyText>
                </div>
              <div className="text-sm md:text-base text-muted-foreground px-2">
                Acesso vitalício ao método completo
              </div>

              <div className="mt-4 flex justify-center">
                <Badge variant="outline" className="px-3 py-1 rounded-full">Satisfação ou reembolso 100%</Badge>
              </div>
              </div>

              {/* CTA principal movida para a base do card */}

              <div className="space-y-4 md:space-y-5 mb-8 md:mb-10 text-left max-w-md mx-auto px-2">
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
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Bônus: telas + checklist (R$294 de valor percebido)</span>
                </div>
              </div>
              
              <Button variant="premium" size="xl" className="w-full max-w-md mx-auto" aria-label="Transformar meu e-book agora">
                Transformar meu e-book agora
              </Button>
              <div className="text-xs md:text-sm text-muted-foreground mt-3">Pagamento único. Acesso imediato.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (posicionado abaixo da oferta) */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-10 md:mb-12 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">FAQ</h2>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FAQs />
          </div>
        </div>
      </section>

      {/* Como funciona (3 passos) */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="section-container">
          <div className="text-center mb-10 md:mb-12 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">Como funciona</h2>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6">
            <div className="card-premium text-center">
              <div className="text-3xl font-display font-bold text-accent mb-2">01</div>
              <div className="text-sm md:text-base font-medium mb-1">Importe o template</div>
              <div className="text-xs md:text-sm text-muted-foreground">Baixe o projeto e abra no ambiente indicado.</div>
            </div>
            <div className="card-premium text-center">
              <div className="text-3xl font-display font-bold text-accent mb-2">02</div>
              <div className="text-sm md:text-base font-medium mb-1">Personalize o conteúdo</div>
              <div className="text-xs md:text-sm text-muted-foreground">Copie seu conteúdo e assets. Personalize cores e fontes.</div>
            </div>
            <div className="card-premium text-center">
              <div className="text-3xl font-display font-bold text-accent mb-2">03</div>
              <div className="text-sm md:text-base font-medium mb-1">Publicação</div>
              <div className="text-xs md:text-sm text-muted-foreground">Gere seu app e entregue ao cliente (web/app). Suporte acompanha.</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="premium" size="xl" onClick={scrollToCTA}>Transformar meu e-book agora</Button>
          </div>
        </div>
      </section>

      

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground text-center">
        <div className="section-container">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5 md:mb-6">
              MEP
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
              Comece agora.<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Seu ebook merece ser <AnimatedShinyText shimmerWidth={140} className="text-primary-foreground bg-gradient-to-r from-transparent via-white/70 to-transparent">premium</AnimatedShinyText>.
            </h2>
            
            <Button 
              onClick={scrollToCTA}
              className="btn-champagne w-full sm:w-auto"
              aria-label="Quero meu app premium agora"
            >
              Quero meu app premium agora
            </Button>
            <div className="text-sm md:text-base text-primary-foreground/80 mt-4">Eleve o valor do seu e-book com um app premium em minutos.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
