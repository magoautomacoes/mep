"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "O valor percebido elevou imediatamente. Nossos reembolsos caíram.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Bruna Lima",
    role: "Gerente de Operações",
  },
  {
    text: "Em poucas horas estava tudo publicado com visual profissional.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "João Carvalho",
    role: "TI",
  },
  {
    text: "A experiência de app mudou nosso posicionamento.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Rafael Gomes",
    role: "CEO",
  },
  {
    text: "Clientes elogiaram o novo formato. Tivemos aumento de engajamento.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Pedro Santos",
    role: "Marketing",
  },
  {
    text: "Personalizamos sem complicação; visual profissional imediato.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Marina Souza",
    role: "Líder de Suporte",
  },
  {
    text: "Adoção rápida: interface moderna e envolvente em poucos cliques.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ana Clara",
    role: "Analista de Produto",
  },
];

export const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-10">
      <div className="section-container">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Carousel className="relative">
            <CarouselContent className="gap-6">
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/10">
                    <div className="text-sm md:text-base leading-relaxed">{t.text}</div>
                    <div className="flex items-center gap-3 mt-4">
                      <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full" loading="lazy" decoding="async" />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">{t.name}</div>
                        <div className="leading-5 opacity-60 tracking-tight text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;