"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface FAQsProps {
  items?: FAQItem[];
  className?: string;
}

export default function FAQs({ items, className }: FAQsProps) {
  const faqItems: FAQItem[] =
    items ?? [
      {
        id: "item-1",
        question: "Preciso saber programar?",
        answer:
          "Não. Nosso método usa copiar e colar; qualquer pessoa consegue implementar.",
      },
      {
        id: "item-2",
        question: "Funciona com qualquer e‑book?",
        answer: "Sim. Você pode usar conteúdos em PDF, Word, Google Docs ou outras fontes de texto.",
      },
      {
        id: "item-3",
        question: "Posso usar minha identidade visual?",
        answer: "Sim. O template permite personalizar cores, fontes e logo da sua marca.",
      },
      {
        id: "item-4",
        question: "Quanto tempo leva para colocar no ar?",
        answer:
          "Depende da similaridade com o conteúdo‑modelo e do uso de IA. Em geral, leva de 10 a 120 minutos para personalizar e publicar o app.",
      },
      {
        id: "item-5",
        question: "E se eu não gostar?",
        answer:
          "Oferecemos garantia de satisfação ou reembolso integral.",
      },
      {
        id: "item-6",
        question: "Integra com qualquer plataforma?",
        answer:
          "Sim. O MEP é compatível com todas as plataformas do mercado que utilizam Webhook (Hotmart, Eduzz, Kiwify, Cakto, Shopify, WooCommerce e outras).",
      },
      {
        id: "item-7",
        question: "Qual é o investimento necessário?",
        answer:
          "Além da compra do método, você só precisará de um domínio (≈ R$ 40/ano) e um servidor VPS (≈ R$ 35/mês — o preço de um lanche!).",
      },
      {
        id: "item-8",
        question: "Posso revender? Você disponibiliza templates?",
        answer:
          "Sim! Você pode revender e terá acesso a templates prontos e videoaulas para facilitar o processo.",
      },
      {
        id: "item-9",
        question: "Essas ferramentas são suas? Como funciona?",
        answer:
          "Sim! Todas as ferramentas foram desenvolvidas por mim, e ao adquirir o método você recebe acesso completo e direito vitalício de uso. Isso significa que o app será seu para personalizar, publicar e utilizar livremente, sem depender de terceiros.",
      },
    ];

  return (
    <div className={className}>
      <Accordion type="single" collapsible className="w-full space-y-2.5 md:space-y-3.5">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="last:border-b-0 py-2 md:py-3">
            <AccordionTrigger className="text-base md:text-lg font-body font-semibold leading-snug tracking-normal text-foreground py-3 md:py-3.5 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1.5 md:pt-2">
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}