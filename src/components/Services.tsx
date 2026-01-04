import { Palette, Code, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Criação de Logos",
    description:
      "Desenvolvemos logos memoráveis que capturam a essência da sua marca. Design estratégico para criar uma identidade visual forte e única.",
    features: ["Conceitos Únicos", "Arquivos Vetoriais", "Guia de Uso"],
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Sites modernos, rápidos e otimizados para SEO. Experiências digitais que convertem visitantes em clientes e geram resultados reais.",
    features: ["Responsivo", "Otimizado SEO", "Alta Performance"],
  },
  {
    icon: Layers,
    title: "Identidade Visual",
    description:
      "Criamos sistemas visuais completos: cartões de visita, papelaria, templates para redes sociais e materiais impressos.",
    features: ["Papelaria Completa", "Social Media Kit", "Brand Guidelines"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluções completas para sua{" "}
            <span className="gradient-text">presença digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do conceito à execução, oferecemos tudo que você precisa para se destacar no mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group gradient-border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
