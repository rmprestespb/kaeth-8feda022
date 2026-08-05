import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Expand,
  Eye,
  Facebook,
  Gem,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedCounter from "./AnimatedCounter";
import Lightbox from "./Lightbox";
import { getTema } from "@/data/temas";
import type { Modelo } from "@/data/modelos";

const WA = "5546999350070";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
} as const;

const servicoIcons = [Sparkles, ShieldCheck, Zap, Gem, Award, BadgeCheck, Users, Heart];

type Props = { modelo: Modelo; contained?: boolean };

/** Estrutura base de todos os sites de demonstração — tipografia, layout de hero e imagens vêm do tema do segmento. */
const DemoSite = ({ modelo, contained = false }: Props) => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [dep, setDep] = useState(0);
  const [menu, setMenu] = useState(false);

  const tema = getTema(modelo.slug);
  const dark = modelo.dark;
  const surface = dark ? "bg-[hsl(220_18%_9%)]" : "bg-[hsl(0_0%_100%)]";
  const surfaceAlt = dark ? "bg-[hsl(220_18%_12%)]" : "bg-[hsl(220_16%_97%)]";
  const text = dark ? "text-[hsl(0_0%_97%)]" : "text-[hsl(220_25%_14%)]";
  const textMuted = dark ? "text-[hsl(0_0%_97%/0.65)]" : "text-[hsl(220_15%_38%)]";
  const border = dark ? "border-[hsl(0_0%_100%/0.1)]" : "border-[hsl(220_15%_88%)]";
  const cardBg = dark ? "bg-[hsl(0_0%_100%/0.04)]" : "bg-[hsl(0_0%_100%)]";
  const r = tema.radius;

  const hf = { fontFamily: tema.fontTitulo } as React.CSSProperties;
  const h1 = `${tema.tituloClass}`;
  const img = (i: number) => tema.imagens[i % tema.imagens.length];

  const nav = [
    { label: "Início", href: "#top" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: tema.portfolioLabel, href: "#galeria" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contato" },
  ];

  const depoimento = modelo.depoimentos[dep];
  const orcamento = wa(`Olá! Quero solicitar um orçamento com a ${modelo.empresa}.`);
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(modelo.endereco)}&output=embed`;

  const heroBadge = (
    <span
      className={`inline-flex items-center gap-2 ${r} border border-[hsl(var(--dp))]/40 bg-[hsl(var(--dp))]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--dp))]`}
    >
      <Star size={12} /> {modelo.categoria}
    </span>
  );

  const heroBotoes = (light?: boolean) => (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        asChild
        size="lg"
        className={`h-13 ${r} bg-[hsl(var(--dp))] px-7 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[hsl(var(--dp))]/90`}
      >
        <a href={orcamento} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} className="mr-2" />
          {tema.ctaLabel}
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className={`h-13 ${r} px-7 ${light ? "border-white/40 bg-white/10 text-white hover:text-white" : `${border} ${textMuted}`} transition-colors hover:text-[hsl(var(--da))]`}
      >
        <a href="#servicos">Ver serviços</a>
      </Button>
    </div>
  );

  const heroSelos = (light?: boolean) => (
    <div className={`mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm ${light ? "text-white/75" : textMuted}`}>
      <span className="flex items-center gap-2">
        <Clock size={15} className="text-[hsl(var(--da))]" /> Atendimento rápido
      </span>
      <span className="flex items-center gap-2">
        <Check size={15} className="text-[hsl(var(--da))]" /> Equipe especializada
      </span>
      <span className="flex items-center gap-2">
        <MapPin size={15} className="text-[hsl(var(--da))]" />
        {modelo.endereco.split("—")[1]?.trim() || "Centro"}
      </span>
    </div>
  );

  /* ---------------- HERO POR LAYOUT ---------------- */
  const renderHero = () => {
    if (tema.layout === "fullbleed")
      return (
        <section id="top" className="relative min-h-[86vh] overflow-hidden">
          <img src={img(0)} alt={modelo.empresa} className="absolute inset-0 h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, hsl(220 20% 4% / 0.55) 0%, hsl(220 20% 4% / 0.8) 55%, hsl(var(--dp) / 0.55) 100%)`,
            }}
          />
          <div className="container relative z-10 mx-auto flex min-h-[86vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              {heroBadge}
              <h1 style={hf} className={`mt-6 text-4xl leading-[1.05] text-white md:text-6xl ${h1}`}>
                {modelo.heroTitulo}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">{modelo.heroSub}</p>
              <div className="flex justify-center">{heroBotoes(true)}</div>
            </motion.div>
          </div>
        </section>
      );

    if (tema.layout === "overlay-left")
      return (
        <section id="top" className="relative overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            <div className={`relative flex items-center px-4 py-20 md:py-28 ${surfaceAlt}`}>
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background: `radial-gradient(70% 80% at 0% 0%, hsl(var(--dp) / ${dark ? 0.35 : 0.14}), transparent 70%)`,
                }}
              />
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="container relative z-10 mx-auto max-w-xl lg:ml-auto lg:mr-10 lg:px-0"
              >
                {heroBadge}
                <h1 style={hf} className={`mt-6 text-4xl leading-[1.08] md:text-5xl ${h1}`}>
                  {modelo.heroTitulo}
                </h1>
                <p className={`mt-6 text-base md:text-lg ${textMuted}`}>{modelo.heroSub}</p>
                {heroBotoes()}
                {heroSelos()}
              </motion.div>
            </div>
            <div className="relative min-h-[340px]">
              <img src={img(0)} alt={modelo.empresa} className="absolute inset-0 h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(120deg, hsl(var(--dp) / 0.45), transparent 60%)` }}
              />
            </div>
          </div>
        </section>
      );

    if (tema.layout === "duo")
      return (
        <section id="top" className="relative overflow-hidden py-16 md:py-24">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background: `radial-gradient(90% 70% at 50% 0%, hsl(var(--da) / ${dark ? 0.28 : 0.13}), transparent 70%)`,
            }}
          />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {heroBadge}
              <h1 style={hf} className={`mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] md:text-6xl ${h1}`}>
                {modelo.heroTitulo}
              </h1>
              <p className={`mx-auto mt-5 max-w-xl text-base md:text-lg ${textMuted}`}>{modelo.heroSub}</p>
              <div className="flex justify-center">{heroBotoes()}</div>
            </motion.div>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {[1, 0, 2].map((n, i) => (
                <motion.img
                  key={n}
                  src={img(n)}
                  alt={`${modelo.empresa} ${i + 1}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  className={`h-56 w-full ${r} object-cover shadow-xl sm:h-72 ${i === 1 ? "sm:-mt-8 sm:h-80" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>
      );

    if (tema.layout === "editorial")
      return (
        <section id="top" className="relative overflow-hidden py-16 md:py-24">
          <div className="container mx-auto grid items-end gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {heroBadge}
              <h1 style={hf} className={`mt-7 text-[2.6rem] leading-[1.02] md:text-[4.2rem] ${h1}`}>
                {modelo.heroTitulo}
              </h1>
              <div className={`mt-7 flex flex-col gap-6 border-t ${border} pt-7 md:flex-row`}>
                <p className={`max-w-md text-base ${textMuted}`}>{modelo.heroSub}</p>
                <img src={img(2)} alt="" className={`h-32 w-full ${r} object-cover md:w-48`} />
              </div>
              {heroBotoes()}
            </motion.div>
            <motion.img
              src={img(0)}
              alt={modelo.empresa}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`h-[420px] w-full ${r} object-cover shadow-2xl md:h-[560px]`}
            />
          </div>
        </section>
      );

    /* split (padrão) */
    return (
      <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `radial-gradient(80% 70% at 15% 0%, hsl(var(--dp) / ${dark ? 0.4 : 0.14}) 0%, transparent 70%), radial-gradient(60% 60% at 90% 20%, hsl(var(--da) / ${dark ? 0.22 : 0.1}) 0%, transparent 70%)`,
          }}
        />
        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {heroBadge}
            <h1 style={hf} className={`mt-6 text-3xl leading-[1.1] md:text-5xl ${h1}`}>
              {modelo.heroTitulo}
            </h1>
            <p className={`mt-5 max-w-xl text-base md:text-lg ${textMuted}`}>{modelo.heroSub}</p>
            {heroBotoes()}
            {heroSelos()}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <img
              src={img(0)}
              alt={modelo.empresa}
              className={`aspect-[4/3] w-full ${r} object-cover shadow-2xl`}
            />
            <img
              src={img(1)}
              alt=""
              className={`absolute -bottom-8 -left-4 hidden h-40 w-40 ${r} border-4 border-[hsl(var(--dp))] object-cover shadow-2xl md:block`}
            />
            <div
              className={`mt-6 inline-block ${r} border ${border} ${dark ? "bg-[hsl(220_18%_10%)]" : "bg-white"} px-5 py-4 shadow-xl md:ml-40`}
            >
              <AnimatedCounter
                to={tema.numeros[0].to}
                prefix={tema.numeros[0].prefix}
                suffix={tema.numeros[0].suffix}
                className="text-2xl font-extrabold text-[hsl(var(--dp))]"
              />
              <p className={`text-xs ${textMuted}`}>{tema.numeros[0].label.toLowerCase()}</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div
      className={`${surface} ${text}`}
      style={
        {
          "--dp": modelo.primary,
          "--da": modelo.accent,
          fontFamily: tema.fontTexto,
        } as React.CSSProperties
      }
    >
      {/* HEADER */}
      <header
        className={`sticky ${contained ? "top-0" : "top-24 lg:top-[104px]"} z-40 border-b ${border} ${
          dark ? "bg-[hsl(220_18%_9%/0.85)]" : "bg-[hsl(0_0%_100%/0.92)]"
        } backdrop-blur-md`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className={`flex h-9 w-9 items-center justify-center ${r} bg-[hsl(var(--dp))]`}>
              <modelo.icon size={18} className="text-white" />
            </span>
            <span className="leading-tight">
              <span style={hf} className="block text-sm font-extrabold">
                {modelo.empresa}
              </span>
              <span className={`block text-[10px] uppercase tracking-widest ${textMuted}`}>
                {modelo.tagline}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`text-sm font-medium ${textMuted} transition-colors hover:text-[hsl(var(--dp))]`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className={`hidden shrink-0 ${r} bg-[hsl(var(--dp))] text-white transition-transform hover:scale-[1.03] hover:bg-[hsl(var(--dp))]/90 sm:inline-flex`}
            >
              <a href={orcamento} target="_blank" rel="noopener noreferrer">
                <Phone size={14} className="mr-1.5" />
                {tema.ctaLabel}
              </a>
            </Button>
            <button
              onClick={() => setMenu((m) => !m)}
              aria-label="Abrir menu"
              aria-expanded={menu}
              className={`flex h-10 w-10 items-center justify-center ${r} border ${border} xl:hidden`}
            >
              {menu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menu && (
          <nav className={`border-t ${border} px-4 py-3 xl:hidden`}>
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMenu(false)}
                className={`block py-2 text-sm font-medium ${textMuted}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {renderHero()}

      {/* SOBRE */}
      <section id="sobre" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
                Sobre nós
              </span>
              <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
                Quem é a {modelo.empresa}
              </h2>
              <p className={`mt-5 text-base leading-relaxed ${textMuted}`}>{modelo.sobre}</p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Target,
                    t: "Missão",
                    d: `Entregar ${modelo.categoria.toLowerCase()} de excelência, com atendimento humano e resultados reais.`,
                  },
                  { icon: Eye, t: "Visão", d: "Ser referência regional pela qualidade, ética e compromisso com cada cliente." },
                  { icon: Heart, t: "Valores", d: "Transparência, respeito, responsabilidade e melhoria contínua." },
                ].map((v) => (
                  <div key={v.t} className={`flex gap-4 ${r} border ${border} ${cardBg} p-4`}>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center ${r} bg-[hsl(var(--dp))]/12 text-[hsl(var(--dp))]`}
                    >
                      <v.icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{v.t}</p>
                      <p className={`mt-1 text-sm ${textMuted}`}>{v.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n, i) => (
                <img
                  key={n}
                  src={img(n)}
                  alt={`Estrutura ${modelo.empresa} ${i + 1}`}
                  loading="lazy"
                  className={`aspect-square w-full ${r} object-cover transition-transform duration-500 hover:scale-[1.03] ${
                    i % 3 === 0 ? "sm:mt-6" : ""
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">Serviços</span>
            <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
              O que fazemos por você
            </h2>
            <p className={`mt-4 ${textMuted}`}>
              Soluções completas com atendimento próximo e transparência total.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modelo.servicos.map((s, i) => {
              const Icon = servicoIcons[i % servicoIcons.length];
              return (
                <motion.article
                  key={s.titulo}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group ${r} border ${border} ${cardBg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[hsl(var(--dp))]/50 hover:shadow-xl`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center ${r} bg-[hsl(var(--dp))]/12 text-[hsl(var(--dp))] transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 style={hf} className="mt-5 text-lg font-semibold">
                    {s.titulo}
                  </h3>
                  <p className={`mt-2 text-sm ${textMuted}`}>{s.texto}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO / GALERIA */}
      <section id="galeria" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              {tema.portfolioLabel}
            </span>
            <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
              Nosso trabalho de perto
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modelo.galeria.map((g, i) => (
              <motion.button
                key={g}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onClick={() => setLightbox(i)}
                aria-label={`Ampliar imagem: ${g}`}
                className={`group relative block overflow-hidden ${r} text-left ${
                  i % 5 === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <img
                  src={img(i)}
                  alt={g}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i % 5 === 0 ? "h-full min-h-[220px] lg:min-h-[460px]" : "aspect-[4/3]"
                  }`}
                />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand size={16} />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-sm font-medium text-white">
                  {g}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
        <Lightbox
          itens={modelo.galeria}
          imagens={modelo.galeria.map((_, i) => img(i))}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Diferenciais
            </span>
            <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
              Por que nos escolher
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {modelo.diferenciais.map((d, i) => (
              <motion.div
                key={d}
                {...fadeUp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className={`flex items-center gap-3 ${r} border ${border} ${cardBg} p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--dp))]/50 hover:shadow-lg`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center ${r} bg-[hsl(var(--dp))]`}>
                  <Check size={16} className="text-white" />
                </span>
                <p className="text-sm font-medium">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <img src={img(5)} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(120deg, hsl(var(--dp) / 0.93), hsl(var(--da) / 0.86))` }}
        />
        <div className="container relative z-10 mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {tema.numeros.map((n, i) => (
            <motion.div
              key={n.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${r} border border-white/20 bg-white/10 p-5 text-center backdrop-blur-sm`}
            >
              <AnimatedCounter
                to={n.to}
                prefix={n.prefix}
                suffix={n.suffix}
                className="block text-3xl font-extrabold text-white md:text-4xl"
              />
              <p className="mt-1 text-xs font-medium text-white/85 md:text-sm">{n.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Depoimentos
            </span>
            <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
              O que dizem sobre nós
            </h2>
          </motion.div>

          <div className="relative mx-auto mt-12 max-w-2xl">
            <motion.blockquote
              key={dep}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`${r} border ${border} ${cardBg} p-7 md:p-10`}
            >
              <Quote size={30} className="text-[hsl(var(--da))]" />
              <p className={`mt-4 text-base leading-relaxed md:text-lg ${textMuted}`}>“{depoimento.texto}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/96?img=${((modelo.numero + dep * 7) % 70) + 1}`}
                  alt={depoimento.nome}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-semibold">{depoimento.nome}</span>
                  <span className={`block text-xs ${textMuted}`}>{depoimento.papel}</span>
                </span>
                <span className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="fill-[hsl(var(--da))] text-[hsl(var(--da))]" />
                  ))}
                </span>
              </div>
            </motion.blockquote>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setDep((d) => (d - 1 + modelo.depoimentos.length) % modelo.depoimentos.length)}
                aria-label="Depoimento anterior"
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${border} ${cardBg} transition-colors hover:border-[hsl(var(--dp))]`}
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {modelo.depoimentos.map((d, i) => (
                  <button
                    key={d.nome + i}
                    onClick={() => setDep(i)}
                    aria-label={`Depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === dep ? "w-6 bg-[hsl(var(--dp))]" : "w-2 bg-[hsl(var(--dp))]/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setDep((d) => (d + 1) % modelo.depoimentos.length)}
                aria-label="Próximo depoimento"
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${border} ${cardBg} transition-colors hover:border-[hsl(var(--dp))]`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section id="blog" className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <p className={`text-center text-xs font-bold uppercase tracking-[0.24em] ${textMuted}`}>
            Parceiros e certificações
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {tema.parceiros.map((p, i) => (
              <motion.span
                key={p}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={hf}
                className={`${r} border ${border} ${cardBg} px-6 py-3 text-sm font-bold uppercase tracking-wider ${textMuted} transition-colors hover:border-[hsl(var(--dp))] hover:text-[hsl(var(--dp))]`}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto max-w-3xl px-4">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">FAQ</span>
            <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
              Perguntas frequentes
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {modelo.faq.map((f, i) => (
                <AccordionItem key={f.p} value={`i${i}`} className={border}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.p}</AccordionTrigger>
                  <AccordionContent className={`text-sm ${textMuted}`}>{f.r}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* MAPA + FORMULÁRIO */}
      <section id="contato" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">Contato</span>
            <h2 style={hf} className={`mt-3 text-3xl md:text-4xl ${h1}`}>
              Fale com a gente
            </h2>
            <p className={`mt-4 ${textMuted}`}>Envie sua mensagem ou chame no WhatsApp. Respondemos rapidinho.</p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} className={`overflow-hidden ${r} border ${border} ${cardBg}`}>
              <iframe
                title={`Localização ${modelo.empresa}`}
                src={mapa}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 md:h-full md:min-h-[380px]"
              />
            </motion.div>

            <motion.form
              {...fadeUp}
              onSubmit={(e) => e.preventDefault()}
              className={`${r} border ${border} ${cardBg} p-6 md:p-8`}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
                    Nome
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
                    Telefone
                  </label>
                  <Input placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="mt-4">
                <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
                  E-mail
                </label>
                <Input type="email" placeholder="voce@email.com" />
              </div>
              <div className="mt-4">
                <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
                  Mensagem
                </label>
                <Textarea rows={4} placeholder="Como podemos ajudar?" />
              </div>
              <Button
                type="submit"
                className={`mt-6 h-12 w-full ${r} bg-[hsl(var(--dp))] font-bold text-white transition-transform hover:scale-[1.01] hover:bg-[hsl(var(--dp))]/90`}
              >
                <Send size={16} className="mr-2" />
                {tema.ctaLabel}
              </Button>
              <p className={`mt-3 text-center text-[11px] ${textMuted}`}>
                Formulário de demonstração — no seu site ele envia direto para o seu e-mail.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className={`border-t ${border} ${surfaceAlt} py-14`}>
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className={`flex h-9 w-9 items-center justify-center ${r} bg-[hsl(var(--dp))]`}>
                <modelo.icon size={18} className="text-white" />
              </span>
              <span style={hf} className="text-base font-extrabold">
                {modelo.empresa}
              </span>
            </div>
            <p className={`mt-4 max-w-sm text-sm ${textMuted}`}>{modelo.sobre}</p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: MessageCircle, label: "WhatsApp", href: orcamento },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center ${r} border ${border} ${cardBg} transition-colors hover:border-[hsl(var(--dp))] hover:text-[hsl(var(--dp))]`}
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Links rápidos</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className={`text-sm ${textMuted} hover:text-[hsl(var(--dp))]`}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contato</p>
            <ul className={`mt-4 space-y-3 text-sm ${textMuted}`}>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[hsl(var(--dp))]" />
                {modelo.endereco}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[hsl(var(--dp))]" /> (46) 99935-0070
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[hsl(var(--dp))]" /> contato@empresa.com.br
              </li>
              <li className="flex items-center gap-2">
                <Clock size={15} className="text-[hsl(var(--dp))]" /> Seg a Sáb, 8h às 18h
              </li>
            </ul>
          </div>
        </div>
        <div className={`container mx-auto mt-10 border-t ${border} px-4 pt-6 text-center text-xs`}>
          <p className={textMuted}>
            © {new Date().getFullYear()} {modelo.empresa}. Todos os direitos reservados. Site de demonstração.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={orcamento}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--dp))] shadow-2xl transition-transform hover:scale-110"
      >
        <MessageCircle className="text-white" size={26} />
      </a>
    </div>
  );
};

export default DemoSite;
