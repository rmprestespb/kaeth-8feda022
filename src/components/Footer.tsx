import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: "Serviços",
    href: "#servicos"
  }, {
    name: "Portfólio",
    href: "#portfolio"
  }, {
    name: "Processo",
    href: "#processo"
  }, {
    name: "Contato",
    href: "#contato"
  }];
  const services = ["Criação de Logos", "Desenvolvimento Web", "Identidade Visual", "POWER BI"];
  const socialLinks = [{
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }];
  return <footer id="contato" className="pt-24 pb-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <div className="gradient-border rounded-3xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua{" "}
            <span className="gradient-text">marca?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e vamos conversar sobre como podemos ajudar seu negócio a crescer.
          </p>
          <a href="mailto:contato@nexusstudio.com" className="inline-flex items-center gap-2 gradient-bg px-8 py-4 rounded-full font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 glow">
            <Mail className="w-5 h-5" />
            Solicitar Orçamento
          </a>
        </div>

        {/* Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold gradient-text inline-block mb-4">
              KA<span className="text-foreground">ETH</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Agência digital especializada em criar marcas memoráveis e experiências digitais que convertem.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
                  <social.icon className="w-4 h-4" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map(service => <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@nexusstudio.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  contato@nexusstudio.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-muted-foreground hover:text-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  São Paulo, SP - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} NexusStudio. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com{" "}
            <span className="gradient-text">♥</span> no Brasil
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;