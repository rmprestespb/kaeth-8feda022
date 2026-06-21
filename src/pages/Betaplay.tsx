import { ArrowRight } from "lucide-react";

const Betaplay = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Neon glow accents */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
        {/* Neon Tag */}
        <div className="inline-flex items-center">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border"
            style={{
              color: '#00ff9d',
              borderColor: 'rgba(0, 255, 157, 0.4)',
              textShadow: '0 0 8px rgba(0, 255, 157, 0.6), 0 0 20px rgba(0, 255, 157, 0.3)',
              boxShadow: '0 0 12px rgba(0, 255, 157, 0.15), inset 0 0 12px rgba(0, 255, 157, 0.05)',
            }}
          >
            DIVISÃO DE ENGENHARIA AVANÇADA
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{
              color: '#e5e5e5',
              textShadow: '0 0 30px rgba(255,255,255,0.08)',
            }}
          >
            BETAPLAY SYSTEMS
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#a3a3a3' }}
          >
            Desenvolvimento de ecossistemas robustos, automações brutas e dashboards espetaculares.
          </p>
        </div>

        {/* Closing line */}
        <p
          className="text-base sm:text-lg font-medium"
          style={{ color: '#737373' }}
        >
          Você está prestes a deixar o digital comum para trás.
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'rgba(0, 255, 157, 0.08)',
              color: '#00ff9d',
              border: '1px solid rgba(0, 255, 157, 0.3)',
              textShadow: '0 0 8px rgba(0, 255, 157, 0.4)',
              boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)',
            }}
          >
            <span>Conectar ao Laboratório: Ver algo incrível</span>
            <ArrowRight
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: '#00ff9d' }}
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Betaplay;
