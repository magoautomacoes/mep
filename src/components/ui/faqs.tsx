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
          "Não. O método é zero código. Basta seguir o passo a passo e copiar/colar.",
      },
      {
        id: "item-2",
        question: "Funciona com qualquer ebook?",
        answer: "Sim. O template é flexível e aceita ebooks curtos ou longos.",
      },
      {
        id: "item-3",
        question: "Posso usar minha identidade visual?",
        answer: "Pode. Personalize cores, tipografia e elementos visuais.",
      },
      {
        id: "item-4",
        question: "Em quanto tempo eu coloco no ar?",
        answer:
          "Em algumas horas, seguindo o guia (varia com o tamanho do ebook).",
      },
      {
        id: "item-5",
        question: "Como é o suporte?",
        answer:
          "Suporte assíncrono por e-mail/WhatsApp/Discord e updates gratuitos do método.",
      },
      {
        id: "item-6",
        question: "Qual é o formato final?",
        answer:
          "Entrega em app web responsivo (compatível com mobile e desktop). Opções para app nativo no guia avançado.",
      },
      {
        id: "item-7",
        question: "E se eu não gostar?",
        answer:
          "Acione a garantia total dentro do prazo e reembolsamos 100%.",
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