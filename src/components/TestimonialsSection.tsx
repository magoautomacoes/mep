"use client";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { AuroraText } from "@/components/ui/aurora-text";

const testimonials: Testimonial[] = [
  {
    text:
      "Este método transformou nossos PDFs em uma experiência premium. A apresentação em formato de app elevou o valor percebido imediatamente.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Bruna Lima",
    role: "Gerente de Operações",
  },
  {
    text:
      "Implementação simples, copy & paste de verdade. Em poucas horas tínhamos tudo rodando com visual profissional.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "João Carvalho",
    role: "Gerente de TI",
  },
  {
    text:
      "Suporte rápido e direto. A equipe nos guiou na personalização para nossa marca sem complicação.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Marina Souza",
    role: "Líder de Suporte",
  },
  {
    text:
      "A experiência de app mudou o jogo no nosso posicionamento. Ficamos muito mais profissionais aos olhos do cliente.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Rafael Gomes",
    role: "CEO",
  },
  {
    text:
      "Ferramentas robustas e resultado imediato. Nossa equipe ganhou eficiência e os clientes elogiaram o novo formato.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Isabela Martins",
    role: "Gerente de Projetos",
  },
  {
    text:
      "A adoção foi muito rápida. Em poucos cliques, nossos materiais ganharam uma interface moderna e envolvente.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ana Clara",
    role: "Analista de Produto",
  },
  {
    text:
      "Design intuitivo, navegação fluida e feedback positivo dos clientes. Vimos aumento claro de engajamento.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Pedro Santos",
    role: "Diretor de Marketing",
  },
  {
    text:
      "A solução superou expectativas. Conseguimos personalizar e publicar sem depender de time técnico.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Carla Nogueira",
    role: "Gerente Comercial",
  },
  {
    text:
      "Com a experiência premium, nossa taxa de conversão subiu e o valor percebido pelos clientes aumentou.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Lucas Almeida",
    role: "Gerente de E-commerce",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <Badge variant="outline" className="px-4 py-1 rounded-lg">Depoimentos</Badge>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            O que nossos clientes dizem
          </h2>
          <p className="text-center mt-5 opacity-75">
            Veja como entregamos uma experiência
            {" "}
            <AuroraText colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}>premium</AuroraText>
            {" "}e aumentamos o valor percebido.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};