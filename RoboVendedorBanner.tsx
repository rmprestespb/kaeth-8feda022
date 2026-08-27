import { Bot, Sparkles } from "lucide-react";

const SPARKS = [
  { dx: "-70px", dy: "-60px", delay: "0s", color: "hsl(38 90% 68%)" },
  { dx: "80px", dy: "-40px", delay: "0.2s", color: "hsl(33 74% 62%)" },
  { dx: "-90px", dy: "40px", delay: "0.45s", color: "hsl(33 74% 62%)" },
  { dx: "70px", dy: "70px", delay: "0.6s", color: "hsl(38 90% 68%)" },
  { dx: "0px", dy: "-100px", delay: "0.8s", color: "hsl(45 95% 78%)" },
  { dx: "-40px", dy: "95px", delay: "1s", color: "hsl(33 74% 62%)" },
];

const RAIN = [
  { left: "6%", h: 70, dur: "7s", delay: "-1s" },
  { left: "16%", h: 50, dur: "9s", delay: "-4s" },
  { left: "27%", h: 90, dur: "11s", delay: "-7s" },
  { left: "38%", h: 60, dur: "8s", delay: "-2.5s" },
  { left: "49%", h: 80, dur: "12s", delay: "-9s" },
  { left: "60%", h: 55, dur: "10s", delay: "-5.5s" },
  { left: "71%", h: 85, dur: "7.5s", delay: "-3s" },
  { left: "82%", h: 65, dur: "10.5s", delay: "-6s" },
  { left: "93%", h: 95, dur: "13s", delay: "-8s" },
];

interface RoboVendedorBannerProps {
  whatsappUrl: string;
}

const RoboVendedorBanner = ({ whatsappUrl }: RoboVendedorBannerProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 burgundy-bg glow-gold px-6 py-16 md:px-12 md:py-20">
          {/* grade animada de fundo */}
          <div className="absolute inset-0 robo-grid-bg" aria-hidden="true" />
          {/* faixa de luz varrendo a seção */}
          <div
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-gold/10 to-transparent robo-scan-line"
            aria-hidden="true"
          />
          {/* chuva de partículas douradas */}
          <div className="absolute inset-0 overflow-hidden opacity-70" aria-hidden="true">
            {RAIN.map((p, i) => (
              <span
                key={i}
                className="robo-fall absolute top-0 w-[2px] rounded-full bg-gradient-to-b from-gold/0 to-gold/70"
                style={{
                  left: p.left,
                  height: `${p.h}px`,
                  animationDuration: p.dur,
                  animationDelay: p.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold tracking-[0.3em] border border-gold/50 text-gold bg-foreground/5 backdrop-blur-md">
              <Sparkles size={13} />
              AGÊNCIA KAETH
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground max-w-xl">
              <span className="block overflow-hidden robo-reveal-1">
                Sua empresa com site
              </span>
              <span className="block overflow-hidden robo-reveal-2">
                profissional por apenas
                <span className="robo-caret inline-block w-2 md:w-3 h-7 md:h-10 ml-2 -mb-1 bg-gold rounded-sm align-middle" />
              </span>
            </h2>

            {/* mascote */}
            <div className="relative flex items-center justify-center w-full max-w-md h-56 md:h-64 -my-2">
              <div className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-gold/25 blur-2xl" />
              <div className="absolute bottom-6 w-40 h-8 rounded-full bg-gold/30 blur-xl" />
              <div className="relative animate-float">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl gradient-gold-bg flex items-center justify-center glow-gold rotate-3">
                  <Bot className="text-gold-foreground -rotate-3" size={64} />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  {SPARKS.map((s, i) => (
                    <span
                      key={i}
                      className="robo-spark absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
                      style={
                        {
                          "--dx": s.dx,
                          "--dy": s.dy,
                          animationDelay: s.delay,
                          background: s.color,
                          boxShadow: `0 0 10px ${s.color}`,
                        } as React.CSSProperties
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="robo-price flex items-baseline gap-2 justify-center">
                <span className="text-3xl md:text-4xl font-extrabold gradient-gold-text">
                  R$
                </span>
                <span className="text-6xl md:text-8xl font-extrabold gradient-gold-text leading-none">
                  99,90
                </span>
                <span className="text-xl md:text-2xl font-semibold text-foreground/80">
                  /mês
                </span>
              </p>
              <p className="text-sm md:text-base text-foreground/60 max-w-md">
                Desenvolvido pela Agência Kaeth • Sem taxa de adesão • Pronto
                para vender
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="robo-cta inline-flex items-center gap-2 gradient-gold-bg text-gold-foreground font-bold text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-full hover:opacity-90 transition-opacity"
            >
              Garantir Meu Site Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboVendedorBanner;
