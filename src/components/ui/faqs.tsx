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
          "Em média, entre 60 e 120 minutos, seguindo nosso passo a passo.",
      },
      {
        id: "item-5",
        question: "E se eu não gostar?",
        answer:
          "Oferecemos garantia de satisfação ou reembolso integral.",
      },
    ];

  return (
    <div className={className}>
      <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-3">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="last:border-b-0 py-1.5 md:py-2.5">
            <AccordionTrigger className="text-base md:text-lg font-display font-semibold tracking-tight text-foreground py-3 md:py-4 hover:no-underline">
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