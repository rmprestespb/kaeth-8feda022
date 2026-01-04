import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Agência Digital Premium</span>
          </div>

          {/* Hero Video */}
          <div className="mb-8 animate-fade-up flex justify-center">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-2xl rounded-2xl shadow-2xl shadow-primary/20"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
            Transformamos sua ideia em uma{" "}
            <span className="gradient-text glow-text">Marca Digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            Criamos identidades visuais únicas e websites modernos que convertem visitantes em clientes. Design estratégico para empresas que querem se destacar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border animate-fade-up-delay-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
