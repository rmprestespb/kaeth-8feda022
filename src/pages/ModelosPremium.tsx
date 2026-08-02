import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageCircle, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModelMockup from "@/components/ModelMockup";
import { modelos } from "@/data/modelos";

const WHATSAPP_BASE = "https://wa.me/5546999350070?text=";
const waLink = (msg: string) => WHATSAPP_BASE + encodeURIComponent(msg);
const WHATSAPP_PLANO = waLink("Olá! Quero o plano de R$ 99,90");


const recursosModelo = [
  "Página Inicial",
  "Sobre",
  "Serviços",
  "Galeria",
  "Depoimentos",
  "Localização",
  "WhatsApp",
  "Formulário",
  "Rodapé completo",
  "SEO otimizado",
  "Google Maps",
  "Botão flutuante do WhatsApp",
  "Integração com Instagram",
  "Ícones profissionais",
  "Carregamento rápido",
];

const planoInclui = [
  "Site Profissional",
  "Hospedagem",
  "SSL",
  "Domínio Próprio",
  "WhatsApp Integrado",
  "Google Maps",
  "Suporte",
  "Alterações Mensais",
  "Site Responsivo",
  "SEO Básico",
];

const contadores = [
  { valor: "20", label: "Modelos exclusivos" },
  { valor: "15+", label: "Recursos por modelo" },
  { valor: "7", label: "Dias para publicar" },
  { valor: "99,90", label: "Reais por mês" },
];

const ModelosPremium = () => {
  const [selecionado, setSelecionado] = useState<Modelo | null>(null);

  return (
    <div className="min-h-screen bg-graphite text-graphite-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(90% 70% at 50% 0%, hsl(var(--emerald) / 0.22) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/50 bg-foreground/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-emerald backdrop-blur-md md:text-xs">
              <Sparkles size={13} />
              AGÊNCIA KAETH • MODELOS PREMIUM
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Seu Site Profissional em{" "}
              <span className="gradient-emerald-text">Poucos Dias</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-graphite-foreground/70 md:text-xl">
              Escolha um dos nossos modelos premium e tenha uma presença digital
              moderna, rápida e profissional por apenas{" "}
              <span className="font-semibold text-gold">R$ 99,90/mês</span>.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-xl gradient-emerald-bg px-8 text-base font-bold text-emerald-foreground glow-emerald transition-transform hover:scale-[1.03] hover:opacity-95"
              >
                <a href={WHATSAPP_PLANO} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Quero Meu Site
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-xl border-foreground/20 bg-foreground/5 px-8 text-base backdrop-blur-md hover:bg-foreground/10"
              >
                <Link to="/sites-assinatura">Ver o plano completo</Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {contadores.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <p className="text-2xl font-extrabold gradient-emerald-text md:text-3xl">
                    {c.valor}
                  </p>
                  <p className="mt-1 text-xs text-graphite-foreground/60 md:text-sm">
                    {c.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRADE DE MODELOS */}
      <section className="py-16 md:py-24" id="modelos">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              20 <span className="gradient-emerald-text">Modelos Premium</span>
            </h2>
            <p className="mt-4 text-graphite-foreground/60">
              Layouts exclusivos, prontos para personalizar com a identidade da
              sua empresa.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modelos.map((m, i) => (
              <motion.article
                key={m.numero}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-4 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/50 hover:shadow-[var(--shadow-emerald)]"
              >
                <div className="overflow-hidden rounded-2xl">
                  <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                    <ModelMockup index={i} name={m.nome} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald">
                      <m.icon size={12} />
                      {m.categoria}
                    </span>
                    <span className="text-xs font-bold text-gold">{m.numero}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold">{m.nome}</h3>
                  <p className="mt-1 flex-1 text-sm text-graphite-foreground/60">
                    {m.descricao}
                  </p>

                  <div className="mt-5 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl border-foreground/20 bg-foreground/5 hover:bg-foreground/10"
                      onClick={() => setSelecionado(m)}
                    >
                      <Eye size={15} className="mr-1.5" />
                      Ver Modelo
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 rounded-xl gradient-emerald-bg font-semibold text-emerald-foreground hover:opacity-90"
                    >
                      <a
                        href={waLink(
                          `Olá! Quero o modelo ${m.numero} — ${m.nome} pelo plano de R$ 99,90/mês.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar Este
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NÃO ENCONTROU */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl rounded-3xl border border-gold/30 bg-foreground/[0.03] p-10 text-center backdrop-blur-xl md:p-14"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Não encontrou o{" "}
              <span className="gradient-gold-text">modelo ideal?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-graphite-foreground/65">
              Criamos um layout totalmente personalizado para sua empresa.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-14 rounded-xl gradient-gold-bg px-10 text-base font-bold text-gold-foreground hover:opacity-90"
            >
              <a
                href={waLink(
                  "Olá! Quero solicitar um projeto exclusivo e personalizado."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Projeto Exclusivo
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Por apenas{" "}
              <span className="gradient-emerald-text">R$ 99,90/mês</span> você
              recebe:
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {planoInclui.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.04] p-4 transition-colors hover:border-emerald/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg gradient-emerald-bg">
                  <Check size={16} className="text-emerald-foreground" />
                </span>
                <p className="text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-emerald/30 p-10 text-center glow-emerald md:p-14"
            style={{
              background:
                "radial-gradient(100% 120% at 50% 0%, hsl(var(--emerald) / 0.18) 0%, hsl(var(--graphite)) 75%)",
            }}
          >
            <h2 className="text-3xl font-extrabold md:text-5xl">
              Sua empresa merece uma presença digital{" "}
              <span className="gradient-emerald-text">à altura.</span>
            </h2>
            <Button
              asChild
              size="lg"
              className="mt-8 h-14 rounded-xl gradient-emerald-bg px-10 text-base font-bold text-emerald-foreground transition-transform hover:scale-[1.03] hover:opacity-95"
            >
              <a href={WHATSAPP_PLANO} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Quero Colocar Meu Negócio na Internet
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_PLANO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-emerald-bg glow-emerald transition-transform hover:scale-105"
      >
        <MessageCircle className="text-emerald-foreground" size={26} />
      </a>

    </div>
  );
};

export default ModelosPremium;
