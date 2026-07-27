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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    title: "3 a 5 Páginas",
    text: "Estrutura completa para apresentar seu negócio com clareza.",
  },
  {
    icon: ImageIcon,
    title: "Banner Principal Incluso",
    text: "1 banner de alto impacto na Home para prender a atenção.",
  },
  {
    icon: Share2,
    title: "Integrações Nativas",
    text: "Botão flutuante de WhatsApp e links para todas as suas redes sociais.",
  },
];

const logoOptions = [
  { icon: AlignLeft, label: "Alinhado à Esquerda" },
  { icon: AlignCenter, label: "Centralizado" },
  { icon: AlignRight, label: "À Direita" },
];

const inclusos = [
  {
    icon: Server,
    title: "Hospedagem e Manutenção",
    text: "Seu site sempre no ar, rápido e atualizado — sem dor de cabeça técnica.",
  },
  {
    icon: RefreshCw,
    title: "Manutenção Visual Mensal",
    text: "Direito a 1 troca por mês: alterar textos, trocar fotos, mudar a paleta de cores ou atualizar o banner principal.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte e Estabilidade",
    text: "Sua empresa pronta para vender 24 horas por dia, 7 dias por semana.",
  },
];

const adicionais = [
  {
    icon: FileText,
    title: "Páginas Adicionais",
    text: "Amplie a estrutura do site com novas seções e páginas.",
  },
  {
    icon: ImageIcon,
    title: "Banners Extras ou Alterações Frequentes",
    text: "Campanhas, promoções e trocas além do ritmo mensal.",
  },
  {
    icon: Palette,
    title: "Troca Adicional de Textos e Fotos",
    text: "Precisou de mais de uma atualização no mês? Sem problema.",
  },
  {
    icon: PenTool,
    title: "Vetorização ou Melhoramento de Logotipo",
    text: "Sua marca em alta qualidade, pronta para qualquer aplicação.",
  },
];

const SitesAssinatura = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.18),transparent_45%),radial-gradient(circle_at_85%_20%,hsl(var(--secondary)/0.16),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gold/40 text-gold bg-gold/5">
              <Sparkles size={14} />
              CRIAÇÃO DE SITES SOB ASSINATURA
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Seu Site Profissional por Apenas{" "}
              <span className="gradient-gold-text">R$ 99,90/mês</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Sem custos altos de criação. Uma presença digital exclusiva, sob
              medida para destacar o seu negócio.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-gold-bg text-gold-foreground font-bold text-base h-14 px-8 rounded-xl glow-gold hover:opacity-90"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero Meu Site Agora
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-xl text-base"
              >
                <Link to="/#portfolio">Ver portfólio</Link>
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
                Tudo o que um site de verdade precisa — pelo preço de um
                cafezinho por dia.
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
                  Posicionamento de Logotipo — escolha o layout do topo
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
              O que está incluso na{" "}
              <span className="gradient-text">assinatura mensal</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Por R$ 99,90/mês você mantém seu site vivo, atualizado e vendendo.
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
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <item.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold flex items-start gap-2">
                  <Check size={18} className="text-secondary mt-1 shrink-0" />
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS ADICIONAIS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Serviços <span className="gradient-text">adicionais</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Qualquer ajuste além do pacote mensal ou solicitação extra pode ser
              contratado separadamente.
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
                  <item.icon className="text-secondary" size={20} />
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
            className="rounded-3xl border border-gold/30 bg-card/60 backdrop-blur-xl p-10 md:p-14 text-center glow-gold"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Comece hoje por{" "}
              <span className="gradient-gold-text">R$ 99,90/mês</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
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
                Fechar pelo WhatsApp
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
