import { ArrowRight, Sparkles } from "lucide-react";
import mascoteFogo from "@/assets/mascote-fogo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-8">
          {/* Mascote */}
          <div className="relative flex items-center justify-center order-1">
            <div className="absolute w-[70%] aspect-square bg-primary/25 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute right-0 top-[10%] w-[45%] aspect-square bg-secondary/25 rounded-full blur-3xl" />
            <img
              src={mascoteFogo}
              alt="Mascote TH da Agência Kaeth, cercado de fogo e raios"
              className="relative w-full max-w-md md:max-w-lg animate-float"
            />
          </div>

          {/* Conteúdo */}
          <div className="order-2 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Agência Digital Premium</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
              Transformamos sua ideia em uma{" "}
              <span className="gradient-text glow-text">Marca Digital</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 animate-fade-up-delay-2">
              Criamos identidades visuais únicas e websites modernos que convertem visitantes em clientes. Design estratégico para empresas que querem se destacar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-up-delay-3">
              <a
                href="#contato"
                className="group gradient-bg px-8 py-4 rounded-full font-semibold text-primary-foreground flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 glow animate-pulse-glow"
              >
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 rounded-full font-semibold border border-border hover:border-primary/50 transition-all duration-300 hover:bg-muted"
              >
                Ver Portfólio
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12 mt-16 pt-8 border-t border-border animate-fade-up-delay-3">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
                <div className="text-sm text-muted-foreground mt-1">Projetos Entregues</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
