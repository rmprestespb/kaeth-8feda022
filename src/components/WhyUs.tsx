import { Zap, Shield, Headphones } from "lucide-react";
const differentials = [{
  icon: Zap,
  title: "Design Exclusivo",
  description: "Cada projeto é único. Não usamos templates prontos. Criamos do zero para refletir a personalidade da sua marca."
}, {
  icon: Shield,
  title: "Entrega Rápida",
  description: "Processos otimizados para entregar projetos de alta qualidade no menor tempo possível. Agilidade sem perder qualidade."
}, {
  icon: Headphones,
  title: "Suporte Dedicado",
  description: "Atendimento personalizado do início ao fim. Estamos sempre disponíveis para ajustar e aperfeiçoar seu projeto."
}];
const WhyUs = () => {
  return <section id="processo" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Por que escolher a KAETH?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Parceiros no seu{" "}
              <span className="gradient-text">sucesso digital</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Mais do que uma agência, somos parceiros estratégicos. Entendemos seu negócio e criamos soluções que realmente fazem a diferença.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">24h</div>
                <div className="text-sm text-muted-foreground mt-1">Resposta Média</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="space-y-6">
            {differentials.map((item, index) => <div key={item.title} className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WhyUs;