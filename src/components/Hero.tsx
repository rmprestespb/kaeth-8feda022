import mascoteHero from "@/assets/mascote-homepage.png";

const SORA = { fontFamily: "'Sora', system-ui, sans-serif" };

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-8 pt-24 pb-10"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, #101828 0%, #06070a 55%, #04050700 100%), #06070a",
      }}
    >
      {/* grade sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,166,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,162,43,.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(80% 60% at 50% 30%, #000 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 30%, #000 0%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* aura atrás do mascote (lado esquerdo) */}
      <div
        className="absolute top-[6%] left-[8%] sm:left-[14%] pointer-events-none hidden md:block"
        style={{ width: "min(620px, 60vw)", height: "min(620px, 60vw)" }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-[12%] rounded-full blur-[70px] animate-[spin_22s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,138,0,.30), rgba(77,166,255,.28), rgba(255,138,0,.30))",
          }}
        />
        <div
          className="absolute inset-[26%] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(255,162,43,.22) 0%, transparent 68%)" }}
        />
        <div
          className="absolute inset-[18%] rounded-full border animate-[spin_26s_linear_infinite]"
          style={{ borderColor: "rgba(77,166,255,.28)" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-[1fr_1.1fr] items-center gap-10 md:gap-14">
          {/* Mascote */}
          <div className="relative flex justify-center md:justify-start order-1">
            <div className="relative w-[260px] sm:w-[360px] md:w-[460px] lg:w-[540px]">
              <div
                className="absolute left-1/2 bottom-[6%] -translate-x-1/2 w-[58%] h-6 rounded-full blur-md animate-pulse-glow"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(255,138,0,.42) 0%, rgba(77,166,255,.18) 45%, transparent 72%)",
                }}
              />
              <img
                src={mascoteHero}
                alt="Mascote TH da Agência Kaeth"
                className="relative w-full h-auto animate-float"
                style={{
                  filter:
                    "drop-shadow(0 20px 40px rgba(0,0,0,.6)) drop-shadow(0 0 30px rgba(77,166,255,.28))",
                }}
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-2 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/70 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4da6ff] shadow-[0_0_12px_#4da6ff] animate-pulse" />
              Marketing digital • Sites • Performance
            </div>

            {/* Lockup Agência / KAETH */}
            <div className="flex flex-col mt-6 animate-fade-up-delay-1">
              <span className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-white/55">
                Agência
              </span>
              <span
                className="font-extrabold leading-[0.9] tracking-tight mt-2 bg-clip-text text-transparent"
                style={{
                  ...SORA,
                  fontSize: "clamp(44px, 7.5vw, 96px)",
                  backgroundImage: "linear-gradient(96deg, #ffffff 0%, #ffb457 40%, #4da6ff 88%)",
                }}
              >
                KAETH
              </span>
            </div>

            {/* Subheadline */}
            <h1
              className="mt-4 font-semibold leading-snug text-foreground animate-fade-up-delay-2"
              style={{ ...SORA, fontSize: "clamp(20px, 2.4vw, 32px)" }}
            >
              Sua marca com{" "}
              <span style={{ color: "#ffb457" }}>presença de verdade</span>
            </h1>

            {/* Subtítulo */}
            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-white/65 animate-fade-up-delay-2">
              Criamos sites, campanhas e identidade visual para empresas que
              querem ser lembradas. Estratégia, design e tecnologia no mesmo
              lugar.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6 animate-fade-up-delay-3">
              <a
                href="#contato"
                className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[13px] tracking-[0.1em] uppercase transition-transform hover:-translate-y-0.5"
                style={{
                  ...SORA,
                  color: "#0a0c11",
                  background: "linear-gradient(100deg, #ffb457, #ff8a00)",
                  boxShadow: "0 14px 34px rgba(255,138,0,.3)",
                }}
              >
                Começar um projeto
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-[13px] tracking-[0.1em] uppercase border transition-colors hover:bg-[#4da6ff]/15"
                style={{
                  ...SORA,
                  color: "#eaf2ff",
                  borderColor: "rgba(77,166,255,.45)",
                  background: "rgba(77,166,255,.08)",
                }}
              >
                Ver portfólio
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12 mt-8 pt-5 border-t border-white/10 w-full max-w-xl animate-fade-up-delay-3">
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="font-extrabold text-2xl sm:text-3xl" style={{ ...SORA, color: "#ffb457" }}>
                  +180
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-white/50">
                  Projetos entregues
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="font-extrabold text-2xl sm:text-3xl" style={{ ...SORA, color: "#4da6ff" }}>
                  7 anos
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-white/50">
                  De estrada
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="font-extrabold text-2xl sm:text-3xl text-white" style={SORA}>
                  4.9★
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-white/50">
                  Avaliação dos clientes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
