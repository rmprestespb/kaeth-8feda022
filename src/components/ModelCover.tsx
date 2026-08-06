import type { Modelo } from "@/data/modelos";
import { getTema } from "@/data/temas";

interface ModelCoverProps {
  modelo: Modelo;
}

const menus = ["Início", "Sobre", "Serviços", "Contato"];

/**
 * Capa premium do card: "print" da primeira dobra do site do segmento
 * dentro de um mockup de notebook + smartphone, com iluminação
 * cinematográfica na cor do próprio segmento.
 * Proporção fixa 16/10 em todos os cards.
 */
const ModelCover = ({ modelo: m }: ModelCoverProps) => {
  const tema = getTema(m.slug);
  const hero = tema.imagens[0];
  const heroMobile = tema.imagens[1] ?? hero;
  const sigla = m.empresa
    .replace(/[^A-Za-zÀ-ÿ ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

  const primary = `hsl(${m.primary})`;
  const accent = `hsl(${m.accent})`;
  const paper = m.dark ? "hsl(220 14% 9%)" : "hsl(0 0% 100%)";
  const ink = m.dark ? "hsl(0 0% 100%)" : "hsl(220 20% 12%)";
  const titulo = m.heroTitulo.split(" ").slice(0, 6).join(" ");

  const layout = tema.layout;
  const isFull = layout === "fullbleed" || layout === "overlay-left";
  const reversed = layout === "duo" || layout === "editorial";

  /** Conteúdo do site (usado no notebook) */
  const SiteHero = () => (
    <div
      className="flex h-full w-full flex-col"
      style={{ background: paper, color: ink, fontFamily: tema.fontTexto }}
    >
      {/* Menu */}
      <div
        className="flex shrink-0 items-center justify-between px-2.5 py-1.5"
        style={{
          background: m.dark ? "hsl(220 14% 11%)" : "hsl(0 0% 100%)",
          borderBottom: `1px solid ${m.dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.07)"}`,
        }}
      >
        <div className="flex items-center gap-1">
          <span
            className="flex h-3 w-3 items-center justify-center rounded-[3px] text-[4px] font-bold leading-none"
            style={{ background: primary, color: paper }}
          >
            {sigla}
          </span>
          <span className="text-[4.5px] font-bold tracking-wide" style={{ fontFamily: tema.fontTitulo }}>
            {m.empresa.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {menus.map((x) => (
            <span key={x} className="text-[3.5px] opacity-70">
              {x}
            </span>
          ))}
          <span
            className="rounded-[2px] px-1 py-[1px] text-[3.5px] font-semibold"
            style={{ background: accent, color: "hsl(220 20% 10%)" }}
          >
            {tema.ctaLabel}
          </span>
        </div>
      </div>

      {/* Dobra */}
      {isFull ? (
        <div className="relative flex-1 overflow-hidden">
          <img src={hero} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${
                m.dark ? "rgba(6,8,12,.92)" : "rgba(8,10,16,.78)"
              } 0%, rgba(8,10,16,.35) 62%, transparent 100%)`,
            }}
          />
          <div className="absolute inset-y-0 left-0 flex w-[62%] flex-col justify-center gap-1 px-3 text-white">
            <span className="text-[3.5px] font-semibold uppercase tracking-[0.18em]" style={{ color: accent }}>
              {m.tagline}
            </span>
            <p className="text-[8px] font-semibold leading-[1.1]" style={{ fontFamily: tema.fontTitulo }}>
              {titulo}
            </p>
            <p className="text-[3.8px] leading-tight opacity-80">{m.heroSub.slice(0, 74)}</p>
            <div className="mt-0.5 flex gap-1">
              <span
                className="rounded-[2px] px-1.5 py-[2px] text-[4px] font-bold"
                style={{ background: accent, color: "hsl(220 20% 10%)" }}
              >
                {tema.ctaLabel}
              </span>
              <span className="rounded-[2px] border border-white/40 px-1.5 py-[2px] text-[4px]">Saiba mais</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex flex-1 overflow-hidden ${reversed ? "flex-row-reverse" : ""}`}>
          <div className="flex w-[52%] flex-col justify-center gap-1 px-3">
            <span className="text-[3.5px] font-semibold uppercase tracking-[0.18em]" style={{ color: primary }}>
              {m.tagline}
            </span>
            <p className="text-[7.5px] font-semibold leading-[1.1]" style={{ fontFamily: tema.fontTitulo }}>
              {titulo}
            </p>
            <p className="text-[3.8px] leading-tight opacity-65">{m.heroSub.slice(0, 84)}</p>
            <div className="mt-0.5 flex items-center gap-1">
              <span
                className="rounded-[2px] px-1.5 py-[2px] text-[4px] font-bold"
                style={{ background: primary, color: "hsl(0 0% 100%)" }}
              >
                {tema.ctaLabel}
              </span>
              <span className="text-[3.6px] font-semibold" style={{ color: accent }}>
                {m.categoria}
              </span>
            </div>
          </div>
          <div className="relative w-[48%] overflow-hidden">
            <img src={hero} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, transparent 55%, ${primary}55 100%)` }}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: "16 / 10" }}
      role="img"
      aria-label={`Prévia do site do modelo ${m.nome} em notebook e celular`}
    >
      {/* Fundo cinematográfico na cor do segmento */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 110% at 22% 0%, ${primary}66 0%, hsl(220 16% 7%) 62%, hsl(220 20% 4%) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: `radial-gradient(60% 50% at 88% 92%, ${accent}33 0%, transparent 70%)` }}
      />

      {/* Notebook */}
      <div className="absolute left-[5%] top-[11%] w-[72%]">
        <div
          className="overflow-hidden rounded-[6px] p-[2px] shadow-2xl"
          style={{
            background: "linear-gradient(160deg, hsl(220 8% 42%) 0%, hsl(220 10% 16%) 45%, hsl(220 8% 30%) 100%)",
          }}
        >
          <div className="overflow-hidden rounded-[4px] bg-black" style={{ aspectRatio: "16 / 10" }}>
            <SiteHero />
          </div>
        </div>
        {/* Base do notebook */}
        <div
          className="mx-auto h-[5px] w-[112%] rounded-b-[5px]"
          style={{
            background: "linear-gradient(180deg, hsl(220 8% 46%) 0%, hsl(220 10% 20%) 100%)",
            boxShadow: "0 12px 22px rgba(0,0,0,.55)",
          }}
        />
        <div className="mx-auto h-[2px] w-[18%] rounded-b-full bg-black/40" />
      </div>

      {/* Smartphone */}
      <div className="absolute bottom-[7%] right-[5%] w-[21%]">
        <div
          className="overflow-hidden rounded-[10px] p-[1.5px] shadow-2xl"
          style={{ background: "linear-gradient(150deg, hsl(220 8% 40%), hsl(220 12% 12%))" }}
        >
          <div
            className="relative overflow-hidden rounded-[9px]"
            style={{ aspectRatio: "9 / 17", background: paper }}
          >
            <img src={heroMobile} alt="" loading="lazy" decoding="async" className="h-[58%] w-full object-cover" />
            <div
              className="absolute left-1/2 top-[2px] h-[2px] w-[26%] -translate-x-1/2 rounded-full"
              style={{ background: "rgba(255,255,255,.5)" }}
            />
            <div className="space-y-[2px] px-1.5 pt-1" style={{ color: ink }}>
              <span
                className="block text-[3px] font-bold uppercase tracking-[0.14em]"
                style={{ color: primary }}
              >
                {m.categoria}
              </span>
              <p className="text-[4px] font-semibold leading-[1.15]" style={{ fontFamily: tema.fontTitulo }}>
                {titulo}
              </p>
              <div className="h-[1.5px] w-full rounded" style={{ background: `${ink.replace(")", " / .15)")}` }} />
              <div className="h-[1.5px] w-2/3 rounded" style={{ background: `${ink.replace(")", " / .1)")}` }} />
              <span
                className="mt-[2px] block rounded-[2px] py-[2px] text-center text-[3.2px] font-bold"
                style={{ background: accent, color: "hsl(220 20% 10%)" }}
              >
                {tema.ctaLabel}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reflexo/vinheta */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,.09) 0%, transparent 32%), radial-gradient(90% 70% at 50% 120%, rgba(0,0,0,.55) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default ModelCover;
