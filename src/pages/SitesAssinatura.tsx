import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Layout,
  Image as ImageIcon,
  Sparkles,
  Server,
  RefreshCw,
  ShieldCheck,
  Share2,
  MessageCircle,
  FileText,
  Palette,
  PenTool,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SiteMockMosaic from "@/components/SiteMockMosaic";

const WHATSAPP_URL =
  "https://wa.me/5546999350070?text=" +
  encodeURIComponent("Olá! Quero o plano de R$ 99,90");

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const diferenciais = [
  {
    icon: Sparkles,
    title: "Design Exclusivo",
    text: "Seu site nunca será igual ao de ninguém. Criação sob medida do zero.",
  },
  {
    icon: FileText,
    title: "3 a 5 Páginas Nativas",
    text: "Estrutura completa para apresentar seu negócio com clareza.",
  },
  {
    icon: ImageIcon,
    title: "1 Banner Incluso",
    text: "A primeira arte do banner principal é um BÔNUS KAETH.",
  },
  {
    icon: Share2,
    title: "Integrações Completas",
    text: "Botão flutuante de WhatsApp e links para todas as suas redes sociais.",
  },
];

const logoOptions = [
  { icon: AlignLeft, label: "Esquerda" },
  { icon: AlignCenter, label: "Centro" },
  { icon: AlignRight, label: "Direita" },
];

const inclusos = [
  {
    icon: Server,
    title: "Hospedagem Inclusa",
    text: "Seu site sempre no ar, rápido e seguro — sem dor de cabeça técnica.",
  },
  {
    icon: RefreshCw,
    title: "1 Manutenção Visual Grátis por Mês",
    text: "Escolha 1 troca por mês: textos, fotos, paleta de cores ou a arte do banner principal.",
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Ativa e Suporte",
    text: "Sua empresa pronta para vender 24 horas por dia, 7 dias por semana.",
  },
];

const trocasMensais = [
  { icon: Type, label: "Alterar textos" },
  { icon: ImageIcon, label: "Trocar fotos" },
  { icon: Palette, label: "Atualizar paleta de cores" },
  { icon: Layout, label: "Atualizar arte do banner" },
];

const adicionais = [
  {
    icon: FileText,
    title: "Páginas Adicionais Extras",
    text: "Amplie a estrutura do site com novas seções e páginas.",
  },
  {
    icon: Palette,
    title: "Trocas de Fotos / Textos Extras",
    text: "Alterações além da cota de 1 manutenção visual do mês.",
  },
  {
    icon: PenTool,
    title: "Criação, Vetorização ou Melhoria de Logotipo",
    text: "Sua marca em alta qualidade, pronta para qualquer aplicação.",
  },
  {
    icon: ImageIcon,
    title: "Banners Extras Adicionais",
    text: "Campanhas, promoções e novas artes durante o mês.",
  },
];

const SitesAssinatura = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden burgundy-bg pt-28 pb-24 md:pt-36 md:pb-32">
        <SiteMockMosaic />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold tracking-[0.18em] border border-gold/50 text-gold bg-foreground/5 backdrop-blur-md">
              <Sparkles size={13} />
              AGÊNCIA KAETH • SITES POR ASSINATURA
            </span>

            <h1 className="mt-7 text-4xl md:text-6xl font-extrabold leading-[1.08] text-foreground">
              Seu Site Profissional e Exclusivo
            </h1>

            <p className="mt-5 text-4xl md:text-6xl font-extrabold gradient-gold-text glow-gold-text">
              R$ 99,90/mês
            </p>

            <p className="mt-6 text-base md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Sem custos altos de criação. Presença digital moderna, otimizada e
              única para destacar sua marca no mercado.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-gold-bg text-gold-foreground font-bold text-base h-14 px-8 rounded-xl glow-gold hover:opacity-90"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Quero Meu Site por R$ 99,90
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-xl text-base border-gold/40 bg-foreground/5 backdrop-blur-md hover:bg-foreground/10"
              >
                <Link to="/modelos">Ver modelos</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAL — CARD VITRINE */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gold/30 bg-card/60 backdrop-blur-xl p-8 md:p-12 glow-gold"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                O Diferencial{" "}
                <span className="gradient-gold-text">Vitrine</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Seu site nunca será igual ao de ninguém — tudo o que um site de
                verdade precisa, pelo preço de um cafezinho por dia.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {diferenciais.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl bg-muted/40 border border-border"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl gradient-gold-bg flex items-center justify-center">
                    <item.icon className="text-gold-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Posicionamento de logotipo */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <Layout size={18} className="text-gold" />
                <h3 className="font-semibold">
                  Opções de Logotipo no Topo — escolha onde sua marca aparece
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {logoOptions.map((opt) => (
                  <div
                    key={opt.label}
                    className="rounded-2xl border border-border bg-background/60 p-5 text-center hover:border-gold/50 transition-colors"
                  >
                    <opt.icon className="mx-auto text-gold" size={22} />
                    <p className="mt-3 text-sm font-medium">{opt.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bônus */}
            <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-center">
              <p className="text-sm font-bold tracking-widest text-gold">
                BÔNUS KAETH
              </p>
              <p className="mt-2 text-lg md:text-xl font-semibold">
                A 1ª arte do seu banner é por nossa conta!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INCLUSO NA ASSINATURA */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              O que o valor mensal de{" "}
              <span className="gradient-gold-text">R$ 99,90</span> dá direito?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Manutenção ativa, hospedagem e uma troca visual todo mês para
              manter seu site sempre vivo.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {inclusos.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold-bg flex items-center justify-center">
                  <item.icon className="text-gold-foreground" size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold flex items-start gap-2">
                  <Check size={18} className="text-gold mt-1 shrink-0" />
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl mx-auto rounded-3xl border border-gold/30 bg-card/50 p-8">
            <p className="text-center font-semibold">
              Escolha <span className="text-gold">1 troca por mês</span> entre:
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {trocasMensais.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl border border-border bg-background/60 p-5 text-center"
                >
                  <t.icon className="mx-auto text-gold" size={20} />
                  <p className="mt-3 text-sm font-medium">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS ADICIONAIS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Transparência total:{" "}
              <span className="gradient-gold-text">serviços extras</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Qualquer solicitação além do pacote mensal possui um custo
              adicional acessível, sempre combinado antes.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-border overflow-hidden">
            {adicionais.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 p-6 ${
                  i % 2 === 0 ? "bg-card/50" : "bg-background"
                }`}
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                  <item.icon className="text-gold" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.text}
                  </p>
                </div>
                <span className="text-sm font-medium text-gold sm:text-right">
                  Sob demanda
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground italic">
            Tudo o que você precisar a mais, temos um custo acessível sob
            demanda!
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-gold/30 burgundy-bg p-10 md:p-14 text-center glow-gold"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Comece hoje por{" "}
              <span className="gradient-gold-text glow-gold-text">
                R$ 99,90/mês
              </span>
            </h2>
            <p className="mt-4 text-foreground/70 text-lg max-w-xl mx-auto">
              Design exclusivo, hospedagem, manutenção e suporte. Fale com a
              gente agora e tire seu site do papel.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 gradient-gold-bg text-gold-foreground font-bold text-base h-14 px-10 rounded-xl hover:opacity-90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Quero Meu Site por R$ 99,90
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-gold-bg flex items-center justify-center glow-gold hover:scale-105 transition-transform"
      >
        <MessageCircle className="text-gold-foreground" size={26} />
      </a>
    </div>
  );
};

export default SitesAssinatura;
