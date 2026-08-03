import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PreviewToolbar, { type Device } from "@/components/demo/PreviewToolbar";
import DemoSite from "@/components/demo/DemoSite";
import useDemoSeo from "@/components/demo/useDemoSeo";
import { getModelo, type Modelo } from "@/data/modelos";
import NotFound from "./NotFound";

const WA = "5546999350070";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const larguras: Record<Device, number | null> = { desktop: null, tablet: 834, mobile: 390 };

const DemoPage = ({ m }: { m: Modelo }) => {
  const [device, setDevice] = useState<Device>("desktop");
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [msg, setMsg] = useState("");

  useDemoSeo(m);
  {
    const largura = larguras[device];

    const contratarMsg = `Olá! Quero contratar o plano de R$ 99,90/mês da Agência Kaeth.\n\nModelo: ${m.numero} — ${m.nome}${
      nome ? `\nNome: ${nome}` : ""
    }${contato ? `\nContato: ${contato}` : ""}${msg ? `\nSobre o negócio: ${msg}` : ""}`;

    return (
      <div className="min-h-screen bg-graphite text-graphite-foreground">
        <PreviewToolbar modelo={m} device={device} onDevice={setDevice} />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 lg:pt-[104px]">
          <ol className="container mx-auto flex items-center gap-1.5 px-4 py-2 text-[11px] text-graphite-foreground/50">
            <li>
              <Link to="/" className="hover:text-emerald">
                Início
              </Link>
            </li>
            <ChevronRight size={12} />
            <li>
              <Link to="/modelos" className="hover:text-emerald">
                Modelos Premium
              </Link>
            </li>
            <ChevronRight size={12} />
            <li aria-current="page" className="truncate font-medium text-graphite-foreground/80">
              {m.nome}
            </li>
          </ol>
        </nav>

        {/* Área de visualização */}
        {largura === null ? (
          <DemoSite modelo={m} />
        ) : (
          <div className="flex justify-center px-3 pb-10">
            <div
              style={{ width: largura, maxWidth: "100%" }}
              className="h-[calc(100vh-190px)] overflow-y-auto rounded-[2rem] border-[6px] border-foreground/15 bg-background shadow-2xl transition-all duration-300"
            >
              <DemoSite modelo={m} contained />
            </div>
          </div>
        )}

        {/* FORMULÁRIO DE CONTRATAÇÃO KAETH */}
        <section id="contratar" className="scroll-mt-32 border-t border-emerald/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-xl rounded-3xl border border-emerald/30 bg-foreground/[0.03] p-7 backdrop-blur-xl md:p-10"
            >
              <h2 className="text-2xl font-extrabold md:text-3xl">
                Solicitar este <span className="gradient-emerald-text">modelo</span>
              </h2>
              <p className="mt-3 text-sm text-graphite-foreground/65">
                Plano Agência Kaeth — R$ 99,90/mês. O modelo escolhido já vem preenchido.
              </p>

              <div className="mt-7 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-graphite-foreground/60">
                    Modelo escolhido
                  </label>
                  <Input readOnly value={`${m.numero} — ${m.nome}`} className="font-semibold" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-graphite-foreground/60">
                    Seu nome
                  </label>
                  <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-graphite-foreground/60">
                    WhatsApp ou e-mail
                  </label>
                  <Input value={contato} onChange={(e) => setContato(e.target.value)} placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-graphite-foreground/60">
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
                  className="h-13 w-full rounded-xl gradient-emerald-bg font-bold text-emerald-foreground transition-transform hover:scale-[1.01] hover:opacity-95"
                >
                  <a href={wa(contratarMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={18} />
                    Enviar solicitação
                  </a>
                </Button>
                <Link
                  to="/modelos"
                  className="flex items-center justify-center gap-1.5 text-xs text-graphite-foreground/60 hover:text-emerald"
                >
                  Ver todos os 20 modelos
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }
};

const ModeloDemo = () => {
  const { slug } = useParams();
  const modelo = getModelo(slug);
  if (!modelo) return <NotFound />;
  return <DemoPage key={modelo.slug} m={modelo} />;
};

export default ModeloDemo;
