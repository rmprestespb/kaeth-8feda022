import { Check, ChevronLeft, Laptop, Share2, Smartphone, Tablet } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Modelo } from "@/data/modelos";

export type Device = "desktop" | "tablet" | "mobile";

const devices: { key: Device; label: string; icon: typeof Laptop }[] = [
  { key: "desktop", label: "Desktop", icon: Laptop },
  { key: "tablet", label: "Tablet", icon: Tablet },
  { key: "mobile", label: "Celular", icon: Smartphone },
];

type Props = {
  modelo: Modelo;
  device: Device;
  onDevice: (d: Device) => void;
};

/** Barra fixa de preview (estilo Webflow/ThemeForest) + oferta Kaeth. */
const PreviewToolbar = ({ modelo, device, onDevice }: Props) => {
  const [copiado, setCopiado] = useState(false);

  const compartilhar = async () => {
    const url = `${window.location.origin}/modelos/${modelo.slug}`;
    const data = { title: `Modelo ${modelo.nome} — Kaeth`, url };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* usuário cancelou */
    }
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[70] border-b border-emerald/30 bg-graphite/95 text-graphite-foreground backdrop-blur-xl">
      {/* Linha 1 — oferta Kaeth */}
      <div className="border-b border-foreground/10 bg-emerald/10">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center lg:justify-between lg:text-left">
          <p className="text-[11px] leading-snug md:text-sm">
            Gostou deste modelo? Tenha um site igual para sua empresa por apenas{" "}
            <span className="font-bold text-gold">R$ 99,90/mês</span>.
          </p>
          <Button
            asChild
            size="sm"
            className="h-8 shrink-0 rounded-full gradient-emerald-bg px-4 text-[11px] font-bold text-emerald-foreground hover:opacity-90 md:text-xs"
          >
            <a href="#contratar">Solicitar Este Modelo</a>
          </Button>
        </div>
      </div>

      {/* Linha 2 — controles de preview */}
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2">
        <Link
          to="/modelos"
          className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-graphite-foreground/70 transition-colors hover:text-emerald md:text-xs"
        >
          <ChevronLeft size={15} />
          <span className="hidden sm:inline">Voltar para Modelos</span>
          <span className="sm:hidden">Voltar</span>
        </Link>

        <div className="hidden min-w-0 flex-1 px-2 text-center md:block">
          <p className="truncate text-xs text-graphite-foreground/50">
            Modelo:{" "}
            <span className="font-semibold text-graphite-foreground">
              {modelo.numero} — {modelo.nome}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 rounded-full border border-foreground/15 bg-foreground/5 p-0.5">
            {devices.map((d) => (
              <button
                key={d.key}
                onClick={() => onDevice(d.key)}
                aria-pressed={device === d.key}
                title={d.label}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-all ${
                  device === d.key
                    ? "bg-emerald text-emerald-foreground"
                    : "text-graphite-foreground/60 hover:text-graphite-foreground"
                }`}
              >
                <d.icon size={14} />
                <span className="hidden lg:inline">{d.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={compartilhar}
            title="Compartilhar"
            className="flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-2 text-[11px] font-medium text-graphite-foreground/70 transition-colors hover:text-emerald"
          >
            {copiado ? <Check size={14} /> : <Share2 size={14} />}
            <span className="hidden lg:inline">{copiado ? "Link copiado" : "Compartilhar"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewToolbar;
