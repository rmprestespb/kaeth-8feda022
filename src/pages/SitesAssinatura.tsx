import { motion } from "framer-motion";
import {
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
import Navbar from "@/components/Navbar";
import RoboVendedorBanner from "@/components/RoboVendedorBanner";

const WHATSAPP_URL =
  "https://wa.me/5546999350070?text=" +
  encodeURIComponent("Olá! Quero o plano de R$ 99,90");

const NEON_BORDER = "1px solid rgba(46,155,255,.22)";
const NEON_BORDER_SOFT = "1px solid rgba(46,155,255,.14)";
const NEON_GLOW = "0 0 40px rgba(46,155,255,.08), 0 0 60px rgba(255,176,32,.06)";
const CARD_BG = "rgba(20,32,46,.55)";
const CARD_BG_SOFT = "rgba(255,255,255,.04)";

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
    <div className="min-h-screen text-foreground" style={{ background: "#05070A" }}>
      <Navbar />
      {/* ROBÔ VENDEDOR — banner animado */}
      <RoboVendedorBanner whatsappUrl={WHATSAPP_URL} />

      {/* DIFERENCIAL — CARD VITRINE */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl backdrop-blur-xl p-8 md:p-12"
            style={{ border: NEON_BORDER, background: CARD_BG, boxShadow: NEON_GLOW }}
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
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{ background: CARD_BG_SOFT, border: NEON_BORDER_SOFT }}
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
                    className="rounded-2xl p-5 text-center transition-colors hover:border-gold/50"
                    style={{ background: "rgba(5,7,10,.5)", border: NEON_BORDER_SOFT }}
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
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, rgba(20,32,46,.35), rgba(5,7,10,0))" }}
      >
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
                className="rounded-2xl p-7 backdrop-blur-xl"
                style={{ background: CARD_BG, border: NEON_BORDER_SOFT }}
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

          <div
            className="mt-10 max-w-4xl mx-auto rounded-3xl p-8"
            style={{ border: "1px solid rgba(255,176,32,.3)", background: CARD_BG }}
          >
            <p className="text-center font-semibold">
              Escolha <span className="text-gold">1 troca por mês</span> entre:
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {trocasMensais.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl p-5 text-center"
                  style={{ background: "rgba(5,7,10,.45)", border: NEON_BORDER_SOFT }}
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

          <div
            className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden"
            style={{ border: NEON_BORDER_SOFT }}
          >
            {adicionais.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6"
                style={{ background: i % 2 === 0 ? CARD_BG : "transparent" }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,.06)" }}
                >
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
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{
              border: "1px solid rgba(255,176,32,.3)",
              background:
                "radial-gradient(120% 100% at 50% 0%, #14202E 0%, #0A0E14 55%, #05070A 100%)",
              boxShadow: NEON_GLOW,
            }}
          >
            <div className="absolute -inset-24 robo-grid-bg" aria-hidden="true" />
            <div className="relative z-10">
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
                className="mt-8 gradient-gold-bg text-gold-foreground font-bold text-base h-14 px-10 rounded-full hover:opacity-90"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Quero Meu Site por R$ 99,90
                </a>
              </Button>
            </div>
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
