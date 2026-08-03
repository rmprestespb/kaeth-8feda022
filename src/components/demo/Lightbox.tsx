import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  itens: string[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
};

/** Lightbox simples para a galeria das demonstrações. */
const Lightbox = ({ itens, index, onClose, onChange }: Props) => {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % itens.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + itens.length) % itens.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, itens.length, onChange, onClose]);

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex animate-fade-in items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria: ${itens[index]}`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + itens.length) % itens.length);
        }}
        aria-label="Imagem anterior"
        className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8"
      >
        <ChevronLeft size={22} />
      </button>

      <figure className="w-full max-w-3xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div
          className="aspect-[16/10] w-full rounded-2xl border border-white/15 shadow-2xl"
          style={{
            background: `linear-gradient(${120 + index * 35}deg, hsl(var(--dp) / 0.9), hsl(var(--da) / 0.65))`,
          }}
        />
        <figcaption className="mt-4 text-center text-sm text-white/80">
          {itens[index]} — {index + 1}/{itens.length}
        </figcaption>
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % itens.length);
        }}
        aria-label="Próxima imagem"
        className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default Lightbox;
