import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Youtube, Music2 } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface FooterProps {
  companyName?: string;
  cnpj?: string;
  address?: string;
  legalDisclaimer?: string;
  supportEmail?: string;
  socialLinks?: SocialLink[];
  copyrightYear?: number;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = "Mago Negócios Digitais LTDA",
  cnpj = "58.740.189/0001-39",
  address = "Rodovia José Carlos Daux, 5500, Sala 211 Bloco Campeche A, Bairro Saco Grande, Florianópolis – SC, CEP: 88032-005",
  legalDisclaimer = "Os conteúdos e serviços disponibilizados neste site são de caráter informativo e não garantem resultados específicos. O uso das informações é de responsabilidade do usuário.",
  supportEmail = "suporte@magoautomacoes.com.br",
  socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@wizardacademy_ia",
      icon: <Youtube className="w-5 h-5" />,
      ariaLabel: "Visite nosso canal no YouTube",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/wizardacademy_ia/",
      icon: <Instagram className="w-5 h-5" />,
      ariaLabel: "Visite nosso perfil no Instagram",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/wizardacademyia",
      icon: <Facebook className="w-5 h-5" />,
      ariaLabel: "Visite nossa página no Facebook",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@wizardacademy_ia",
      icon: <Music2 className="w-5 h-5" />,
      ariaLabel: "Visite nosso perfil no TikTok",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/mago-neg%C3%B3cios-digitais-ltda/",
      icon: <Linkedin className="w-5 h-5" />,
      ariaLabel: "Visite nossa página no LinkedIn",
    },
  ],
  copyrightYear = 2024,
}) => {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="section-container">
        <div className="px-4 py-8 md:py-10">
          {/* Social Icons Row */}
          <div className="flex justify-center items-center gap-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.ariaLabel}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Company Legal Info Block */}
          <div className="max-w-4xl mx-auto text-center space-y-3">
            {/* Company Name and CNPJ */}
            <div className="text-sm text-foreground">
              <span className="font-medium">{companyName}</span>
              <span className="mx-2">•</span>
              <span>CNPJ: {cnpj}</span>
            </div>

            {/* Address */}
            <div className="text-sm text-muted-foreground">{address}</div>

            {/* Support Email */}
            <div className="text-sm text-foreground flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${supportEmail}`} className="hover:text-primary transition-colors">
                {supportEmail}
              </a>
            </div>

            {/* Legal Disclaimer */}
            <div className="text-xs text-muted-foreground leading-relaxed pt-2">
              {legalDisclaimer}
            </div>

            {/* Copyright */}
            <div className="text-xs text-muted-foreground pt-2">
              © {copyrightYear} {companyName}. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;