import { Link } from "react-router-dom";
import mascoteTH from "@/assets/mascote-th.png";

const SPARKS = [
  { dx: "-140px", dy: "-110px", delay: "0s", color: "#FFC85A" },
  { dx: "160px", dy: "-80px", delay: "0.2s", color: "#6FC0FF" },
  { dx: "-180px", dy: "70px", delay: "0.45s", color: "#6FC0FF" },
  { dx: "140px", dy: "130px", delay: "0.6s", color: "#FFC85A" },
  { dx: "0px", dy: "-210px", delay: "0.8s", color: "#FFFFFF" },
  { dx: "-70px", dy: "200px", delay: "1s", color: "#6FC0FF" },
  { dx: "220px", dy: "25px", delay: "1.15s", color: "#FFC85A" },
  { dx: "-230px", dy: "-25px", delay: "1.3s", color: "#FFFFFF" },
];

const RAIN = [
  { left: "5%", h: 110, dur: "8s", delay: "-1s", color: "46,155,255" },
  { left: "13%", h: 70, dur: "10s", delay: "-4s", color: "255,176,32" },
  { left: "21%", h: 150, dur: "13s", delay: "-7s", color: "46,155,255" },
  { left: "30%", h: 85, dur: "9s", delay: "-2.5s", color: "255,176,32" },
  { left: "38%", h: 120, dur: "14s", delay: "-9s", color: "46,155,255" },
  { left: "46%", h: 60, dur: "11s", delay: "-5.5s", color: "255,255,255" },
  { left: "54%", h: 135, dur: "8.5s", delay: "-3s", color: "46,155,255" },
  { left: "62%", h: 95, dur: "12s", delay: "-6s", color: "255,176,32" },
  { left: "70%", h: 75, dur: "9.5s", delay: "-1.8s", color: "46,155,255" },
  { left: "78%", h: 160, dur: "15s", delay: "-8s", color: "255,176,32" },
  { left: "86%", h: 105, dur: "10.5s", delay: "-4.5s", color: "46,155,255" },
  { left: "94%", h: 65, dur: "13.5s", delay: "-2.2s", color: "255,255,255" },
];

interface RoboVendedorBannerProps {
  whatsappUrl: string;
}

const RoboVendedorBanner = ({ whatsappUrl }: RoboVendedorBannerProps) => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center py-20 md:py-28"
      style={{
        background:
          "radial-gradient(110% 60% at 50% 42%, #14202E 0%, #0A0E14 48%, #05070A 100%)",
      }}
    >
      <div className="absolute -inset-32 robo-grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,176,32,.08), transparent 28%, transparent 70%, rgba(46,155,255,.1))",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-64 robo-scan-line"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(46,155,255,.06) 60%, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {RAIN.map((p, i) => (
          <span
            key={i}
            className="robo-fall absolute top-0"
            style={{
              left: p.left,
              width: "2px",
              height: `${p.h}px`,
              background: `linear-gradient(rgba(${p.color},0), rgba(${p.color},.75))`,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center gap-10 md:gap-14 text-center">
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <span
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em]"
            style={{ color: "#2E9BFF", textShadow: "0 0 20px rgba(46,155,255,.6)" }}
          >
            Agência Kaeth
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl text-[#F2F5F8]">
            <span className="block overflow-hidden robo-reveal-1">
              Sua empresa com site
            </span>
            <span className="block overflow-hidden robo-reveal-2">
              profissional por apenas
              <span
                className="robo-caret inline-block w-2.5 md:w-3.5 h-8 md:h-11 ml-2 -mb-1.5 align-middle"
                style={{ background: "#FFB020", boxShadow: "0 0 18px rgba(255,176,32,.9)" }}
              />
            </span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center w-full max-w-2xl h-[340px] sm:h-[440px] md:h-[560px]">
          <div
            className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-full blur-2xl robo-neon-blue"
            style={{ background: "radial-gradient(circle, rgba(46,155,255,.32), transparent 66%)" }}
          />
          <div
            className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full blur-2xl robo-neon-gold"
            style={{ background: "radial-gradient(circle, rgba(255,176,32,.3), transparent 68%)" }}
          />
          <div
            className="absolute bottom-6 w-64 sm:w-80 md:w-[420px] h-10 rounded-full blur-lg"
            style={{ background: "radial-gradient(ellipse, rgba(46,155,255,.45), transparent 70%)" }}
          />
          <div className="relative w-full h-full flex items-center justify-center animate-float">
            <img
              src={mascoteTH}
              alt="Mascote TH da Agência Kaeth"
              className="w-[260px] sm:w-[360px] md:w-[460px] h-auto"
              style={{
                filter:
                  "drop-shadow(0 0 26px rgba(46,155,255,.55)) drop-shadow(0 0 46px rgba(255,176,32,.28)) drop-shadow(0 30px 40px rgba(0,0,0,.6))",
              }}
            />
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
                      boxShadow: `0 0 14px ${s.color}`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7 md:gap-8">
          <p className="robo-price flex items-baseline gap-2 justify-center flex-wrap">
            <span className="text-3xl md:text-5xl font-extrabold" style={{ color: "#FFB020" }}>
              R$
            </span>
            <span
              className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none"
              style={{ color: "#FFC85A" }}
            >
              99,90
            </span>
            <span className="text-xl md:text-2xl font-semibold" style={{ color: "#F2F5F8" }}>
              /mês
            </span>
          </p>

          <p className="text-sm md:text-lg max-w-lg" style={{ color: "#9FB0C2" }}>
            Desenvolvido pela Agência Kaeth • Sem taxa de adesão • Pronto para
            vender
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="robo-cta inline-flex items-center justify-center gap-2 font-extrabold text-base md:text-lg h-14 px-8 md:px-10 rounded-full transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
              style={{
                color: "#0A0E14",
                background: "linear-gradient(100deg, #FFB020, #FFD98A 45%, #FFB020)",
              }}
            >
              Garantir Meu Site Agora
            </a>

            <Link
              to="/modelos"
              className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-semibold h-14 px-8 md:px-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
              style={{ color: "#F2F5F8" }}
            >
              Ver modelos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboVendedorBanner;
