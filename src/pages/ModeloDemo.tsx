import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Send,
  Star,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getModelo } from "@/data/modelos";
import NotFound from "./NotFound";

const WA = "5546999350070";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
} as const;

const ModeloDemo = () => {
  const { slug } = useParams();
  const modelo = getModelo(slug);
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [msg, setMsg] = useState("");

  if (!modelo) return <NotFound />;

  const dark = modelo.dark;
  const surface = dark ? "bg-[hsl(220_18%_9%)]" : "bg-[hsl(0_0%_100%)]";
  const surfaceAlt = dark ? "bg-[hsl(220_18%_12%)]" : "bg-[hsl(220_16%_97%)]";
  const text = dark ? "text-[hsl(0_0%_97%)]" : "text-[hsl(220_25%_14%)]";
  const textMuted = dark ? "text-[hsl(0_0%_97%/0.65)]" : "text-[hsl(220_15%_38%)]";
  const border = dark ? "border-[hsl(0_0%_100%/0.1)]" : "border-[hsl(220_15%_88%)]";
  const cardBg = dark ? "bg-[hsl(0_0%_100%/0.04)]" : "bg-[hsl(0_0%_100%)]";

  const nav = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  const contratarMsg = `Olá! Vi a demonstração do modelo ${modelo.numero} — ${modelo.nome} no site da Agência Kaeth e quero um site igual por R$ 99,90/mês.${
    nome ? `\n\nNome: ${nome}` : ""
  }${contato ? `\nContato: ${contato}` : ""}${msg ? `\nMensagem: ${msg}` : ""}`;

  return (
    <div
      className={`min-h-screen ${surface} ${text}`}
      style={
        {
          "--dp": modelo.primary,
          "--da": modelo.accent,
        } as React.CSSProperties
      }
    >
      {/* BARRA FIXA KAETH */}
      <div className="fixed inset-x-0 top-0 z-[60] border-b border-gold/25 bg-graphite/95 text-graphite-foreground backdrop-blur-md">
        <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-center text-[11px] leading-snug sm:text-left sm:text-sm">
            Gostou deste modelo? Tenha um igual para sua empresa por apenas{" "}
            <span className="font-bold text-gold">R$ 99,90/mês</span>.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="h-9 shrink-0 rounded-full gradient-gold-bg px-5 text-xs font-bold text-gold-foreground hover:opacity-90"
              >
                Solicitar Este Modelo
                <ArrowRight className="ml-1.5" size={14} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Solicitar este modelo</DialogTitle>
                <DialogDescription>
                  Plano Agência Kaeth — R$ 99,90/mês. Modelo já selecionado abaixo.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Modelo escolhido
                  </label>
                  <Input readOnly value={`${modelo.numero} — ${modelo.nome}`} className="font-medium" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Seu nome
                  </label>
                  <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    WhatsApp ou e-mail
                  </label>
                  <Input value={contato} onChange={(e) => setContato(e.target.value)} placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Sobre o seu negócio
                  </label>
                  <Textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    rows={3}
                    placeholder="Conte o que sua empresa faz..."
                  />
                </div>
                <Button
                  asChild
                  className="h-12 w-full rounded-xl gradient-gold-bg font-bold text-gold-foreground hover:opacity-90"
                >
                  <a href={wa(contratarMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={18} />
                    Enviar solicitação
                  </a>
                </Button>
                <Link
                  to="/modelos"
                  className="block text-center text-xs text-muted-foreground underline-offset-4 hover:underline"
                >
                  Ver todos os modelos
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* HEADER DO SITE DEMO */}
      <header
        className={`sticky top-[62px] z-50 border-b ${border} ${dark ? "bg-[hsl(220_18%_9%/0.85)]" : "bg-[hsl(0_0%_100%/0.9)]"} backdrop-blur-md sm:top-[46px]`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[hsl(var(--dp))]">
              <modelo.icon size={18} className="text-white" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold">{modelo.empresa}</span>
              <span className={`block text-[10px] uppercase tracking-widest ${textMuted}`}>
                {modelo.tagline}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm font-medium ${textMuted} transition-colors hover:text-[hsl(var(--dp))]`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            size="sm"
            className="rounded-full bg-[hsl(var(--dp))] text-white hover:bg-[hsl(var(--dp))]/90"
          >
            <a href={wa(`Olá! Vim pelo site da ${modelo.empresa}.`)} target="_blank" rel="noopener noreferrer">
              <Phone size={14} className="mr-1.5" />
              Falar agora
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--dp))]/40 bg-[hsl(var(--dp))]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--dp))]">
              <Star size={12} /> {modelo.categoria}
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] md:text-5xl">
              {modelo.heroTitulo}
            </h1>
            <p className={`mt-5 max-w-xl text-base md:text-lg ${textMuted}`}>{modelo.heroSub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-xl bg-[hsl(var(--dp))] px-7 font-bold text-white transition-transform hover:scale-[1.02] hover:bg-[hsl(var(--dp))]/90"
              >
                <a href={wa(`Olá! Quero saber mais sobre os serviços da ${modelo.empresa}.`)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={`h-13 rounded-xl px-7 ${border} ${textMuted} hover:text-[hsl(var(--dp))]`}
              >
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
            <div className={`mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm ${textMuted}`}>
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-[hsl(var(--da))]" /> Atendimento rápido
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[hsl(var(--da))]" /> Profissionais qualificados
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-[hsl(var(--da))]" /> {modelo.endereco.split("—")[1]?.trim() || "Centro"}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div
              className="aspect-[4/3] w-full rounded-3xl border border-[hsl(var(--dp))]/30 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, hsl(var(--dp) / 0.85), hsl(var(--da) / 0.7))`,
              }}
            >
              <div className="flex h-full flex-col justify-end p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {modelo.tagline}
                </span>
                <p className="mt-2 text-2xl font-extrabold text-white md:text-3xl">{modelo.empresa}</p>
              </div>
            </div>
            <div className={`absolute -bottom-6 -left-4 rounded-2xl border ${border} ${cardBg} p-4 shadow-xl backdrop-blur-md`}>
              <p className="text-2xl font-extrabold text-[hsl(var(--dp))]">+1.500</p>
              <p className={`text-xs ${textMuted}`}>clientes atendidos</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Sobre nós
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Quem é a {modelo.empresa}
            </h2>
            <p className={`mt-5 text-base leading-relaxed ${textMuted}`}>{modelo.sobre}</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "15+", l: "anos de experiência" },
                { v: "1.5k", l: "clientes atendidos" },
                { v: "4.9", l: "avaliação média" },
              ].map((s) => (
                <div key={s.l} className={`rounded-2xl border ${border} ${cardBg} p-4`}>
                  <p className="text-xl font-extrabold text-[hsl(var(--dp))]">{s.v}</p>
                  <p className={`mt-1 text-[11px] leading-tight ${textMuted}`}>{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl"
                style={{
                  background: `linear-gradient(${140 + i * 40}deg, hsl(var(--dp) / ${0.75 - i * 0.12}), hsl(var(--da) / ${0.55 - i * 0.1}))`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Serviços
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">O que fazemos por você</h2>
            <p className={`mt-4 ${textMuted}`}>
              Soluções completas com atendimento próximo e transparência total.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modelo.servicos.map((s, i) => (
              <motion.article
                key={s.titulo}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group rounded-3xl border ${border} ${cardBg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[hsl(var(--dp))]/50 hover:shadow-xl`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--dp))]/12 text-[hsl(var(--dp))]">
                  <modelo.icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.titulo}</h3>
                <p className={`mt-2 text-sm ${textMuted}`}>{s.texto}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Galeria
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Nosso trabalho de perto</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modelo.galeria.map((g, i) => (
              <motion.figure
                key={g}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div
                  className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${120 + i * 35}deg, hsl(var(--dp) / ${0.85 - i * 0.07}), hsl(var(--da) / ${0.6 - i * 0.05}))`,
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white">
                  {g}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Diferenciais
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Por que nos escolher</h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {modelo.diferenciais.map((d, i) => (
              <motion.div
                key={d}
                {...fadeUp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className={`flex items-center gap-3 rounded-2xl border ${border} ${cardBg} p-4`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--dp))]">
                  <Check size={16} className="text-white" />
                </span>
                <p className="text-sm font-medium">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Depoimentos
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">O que dizem sobre nós</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {modelo.depoimentos.map((d, i) => (
              <motion.blockquote
                key={d.nome + i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-3xl border ${border} ${cardBg} p-7`}
              >
                <Quote size={26} className="text-[hsl(var(--da))]" />
                <p className={`mt-4 text-sm leading-relaxed ${textMuted}`}>“{d.texto}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--dp))] text-sm font-bold text-white">
                    {d.nome.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{d.nome}</span>
                    <span className={`block text-xs ${textMuted}`}>{d.papel}</span>
                  </span>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} className="fill-[hsl(var(--da))] text-[hsl(var(--da))]" />
                  ))}
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
          </motion.div>
          <motion.div {...fadeUp} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {modelo.faq.map((f, i) => (
                <AccordionItem key={f.p} value={`i${i}`} className={border}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {f.p}
                  </AccordionTrigger>
                  <AccordionContent className={`text-sm ${textMuted}`}>{f.r}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* MAPA + CONTATO */}
      <section id="contato" className={`py-16 md:py-24 ${surfaceAlt}`}>
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--dp))]">
              Contato
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Fale com a gente</h2>
            <p className={`mt-4 ${textMuted}`}>
              Envie sua mensagem ou chame no WhatsApp. Respondemos rapidinho.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} className={`overflow-hidden rounded-3xl border ${border} ${cardBg}`}>
              <div
                className="relative flex h-64 items-center justify-center md:h-full md:min-h-[340px]"
                role="img"
                aria-label="Mapa de localização (demonstração)"
                style={{
                  background: `repeating-linear-gradient(0deg, hsl(var(--dp) / 0.12) 0 1px, transparent 1px 34px), repeating-linear-gradient(90deg, hsl(var(--dp) / 0.12) 0 1px, transparent 1px 34px), linear-gradient(135deg, hsl(var(--dp) / 0.2), hsl(var(--da) / 0.14))`,
                }}
              >
                <div className={`rounded-2xl border ${border} ${cardBg} px-5 py-4 text-center shadow-lg`}>
                  <MapPin className="mx-auto text-[hsl(var(--dp))]" size={22} />
                  <p className="mt-2 text-sm font-semibold">{modelo.empresa}</p>
                  <p className={`mt-1 text-xs ${textMuted}`}>{modelo.endereco}</p>
                  <p className={`mt-2 text-[10px] uppercase tracking-widest ${textMuted}`}>
                    Google Maps (placeholder)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              {...fadeUp}
              onSubmit={(e) => e.preventDefault()}
              className={`rounded-3xl border ${border} ${cardBg} p-6 md:p-8`}
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
                className="mt-6 h-12 w-full rounded-xl bg-[hsl(var(--dp))] font-bold text-white hover:bg-[hsl(var(--dp))]/90"
              >
                <Send size={16} className="mr-2" />
                Enviar mensagem
              </Button>
              <p className={`mt-3 text-center text-[11px] ${textMuted}`}>
                Formulário de demonstração — no seu site ele envia direto para o seu e-mail.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className={`border-t ${border} py-14`}>
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[hsl(var(--dp))]">
                <modelo.icon size={18} className="text-white" />
              </span>
              <span className="text-base font-extrabold">{modelo.empresa}</span>
            </div>
            <p className={`mt-4 max-w-sm text-sm ${textMuted}`}>{modelo.sobre}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Navegação</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
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
        <div className={`container mx-auto mt-10 flex flex-col items-center justify-between gap-3 border-t ${border} px-4 pt-6 text-xs sm:flex-row`}>
          <p className={textMuted}>
            © {new Date().getFullYear()} {modelo.empresa}. Site de demonstração.
          </p>
          <Link to="/modelos" className={`inline-flex items-center gap-1.5 ${textMuted} hover:text-[hsl(var(--dp))]`}>
            <ChevronLeft size={14} /> Voltar aos modelos Kaeth
          </Link>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={wa(`Olá! Vim pelo site da ${modelo.empresa}.`)}
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

export default ModeloDemo;
