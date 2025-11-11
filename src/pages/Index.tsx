import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, FileText, Smartphone, TrendingUp, Users, Sparkles } from "lucide-react";
import { HeroWithAurora } from "@/components/HeroWithAurora";
import { BeforeAfterCompare } from "@/components/ui/before-after-compare";
import { MobileFrame } from "@/components/ui/mobile-frame";
import Footer from "@/components/ui/footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import FAQs from "@/components/ui/faqs";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { useEffect } from "react";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('offer');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Carrega o player VTurb
  useEffect(() => {
    const src = "https://scripts.converteai.net/7b4fdf64-05e0-4e69-9e1d-b9778193a90f/players/69139e76bd5d00c99be1793e/v4/player.js";
    const already = Array.from(document.scripts).some(s => s.src === src);
    if (!already) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <HeroWithAurora onCTAClick={() => window.open('https://pay.kiwify.com.br/VhOXJRK', '_blank')} />

      {/* Área de Vídeo (VTurb) */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">Assista ao vídeo</h2>
            </div>
            <vturb-smartplayer id="vid-69139e76bd5d00c99be1793e" style={{ display: "block", margin: "0 auto", width: "100%" }}></vturb-smartplayer>
          </div>
        </div>
      </section>

      {/* Demonstração interativa: Antes vs Depois */}
      <section className="py-12 sm:py-14 md:py-16 bg-muted/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">Arraste para comparar: PDF comum x App premium</h2>
            </div>
            <MobileFrame className="mx-auto w-[300px] sm:w-[340px] md:w-[380px] h-[600px] sm:h-[680px] md:h-[760px]">
              <BeforeAfterCompare
                className="w-full h-full"
                containerClassName="h-full"
                beforeSrc="https://s3.magoautomacoes.com.br/desing/video%20demonstrativo%20sem%20app.mp4"
                afterSrc="https://s3.magoautomacoes.com.br/desing/video%20demonstrativo%20app.mp4"
                beforeAlt="PDF comum"
                afterAlt="App premium"
                beforeLabel="PDF comum"
                afterLabel="App premium"
                initialPosition={0.5}
                beforeIsVideo={true}
                afterIsVideo={true}
              />
            </MobileFrame>
            <div className="text-xs md:text-sm text-muted-foreground mt-3 text-center">
              Arraste para ver a diferença.
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
              Seu conteúdo em PDF parece genérico, tem baixo valor percebido e acaba perdido na pasta de downloads. Isso reduz engajamento e vendas.
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
              Com o <strong>Método Ebook Premium (MEP)</strong>, você converte seu PDF em um app interativo com:
            </p>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li>• <strong>Design premium e leitura fluida</strong></li>
              <li>• <strong>Gamificação e ranking</strong> para engajar</li>
              <li>• <strong>Rede social interna</strong> para criar comunidade</li>
              <li>• <strong>Notificações push</strong> para trazer o leitor de volta</li>
            </ul>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Tudo isso <strong>sem programação</strong>, seguindo um passo a passo de copiar e colar.
            </p>
            <div className="mt-4">
              <Button variant="premium" size="xl" onClick={() => window.open('https://pay.kiwify.com.br/VhOXJRK', '_blank')}>Transformar meu e‑book agora</Button>
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
                  <span>Parecendo genérico e com baixo valor percebido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">•</span>
              <span>Não engaja e fica esquecido.</span>
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
                  <span>Oferece experiência envolvente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Aumenta o valor percebido e mantém seus leitores ativos.</span>
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
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Navegação fluida, gamificação e notificações mantêm o leitor ativo.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Experiência premium justifica preços mais altos e reforça sua autoridade.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Design profissional fortalece sua marca e posiciona você como especialista.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">Entrega superior aumenta satisfação e reduz pedidos de reembolso.</span>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Depoimentos (layout em cascata) */}
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
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Quem vende e‑books</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Quem vende e‑books e quer impressionar seus leitores com experiência premium.</p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-3 md:gap-4">
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Profissionais e experts</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Profissionais e experts que desejam reforçar autoridade e elevar o valor percebido.</p>
              </div>
            </div>

            <div className="card-premium flex items-start gap-3 md:gap-4">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">Infoprodutores</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Infoprodutores que buscam fidelizar alunos e aumentar retenção com comunidade e gamificação.</p>
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
                Transforme seu <LineShadowText shadowColor="hsl(var(--accent))">e‑book</LineShadowText> hoje
              </h2>
              
              <div className="mb-8">
                <div className="text-xl md:text-2xl text-muted-foreground line-through mb-2">
                  R$ 197,00
                </div>
                <div className="mb-2">
                  <AnimatedShinyText className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
                    R$ 97,00
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
              
              <Button variant="premium" size="xl" className="w-full max-w-md mx-auto" aria-label="Garantir meu app premium" onClick={() => window.open('https://pay.kiwify.com.br/VhOXJRK', '_blank')}>
                Garantir meu app premium
              </Button>
              <div className="text-xs md:text-sm text-muted-foreground mt-3">Preço de lançamento por tempo limitado. Pagamento único. Acesso imediato. Garantia de satisfação ou reembolso 100%.</div>
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
              <div className="text-sm md:text-base font-medium mb-1">Personalize seu conteúdo</div>
              <div className="text-xs md:text-sm text-muted-foreground">Copie seu texto e imagens; ajuste cores e fontes à sua marca.</div>
            </div>
            <div className="card-premium text-center">
              <div className="text-3xl font-display font-bold text-accent mb-2">03</div>
              <div className="text-sm md:text-base font-medium mb-1">Publique</div>
              <div className="text-xs md:text-sm text-muted-foreground">Gere o app e entregue ao seu público (versão web e/ou app), com suporte da nossa equipe.</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="premium" size="xl" onClick={() => window.open('https://pay.kiwify.com.br/VhOXJRK', '_blank')} aria-label="Quero transformar meu e‑book agora">Quero transformar meu e‑book agora</Button>
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
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-medium mb-6">
                Preço de lançamento por tempo limitado
              </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
              Pronto para valorizar seu e‑book?
            </h2>
            
            {/* Botão final removido conforme solicitado */}
            <div className="text-sm md:text-base text-primary-foreground/80 mt-4">Eleve seu conteúdo a outro nível e aumente o engajamento com um app premium em minutos.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
