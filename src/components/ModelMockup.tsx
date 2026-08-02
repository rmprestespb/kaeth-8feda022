interface ModelMockupProps {
  index: number;
  name: string;
}

/**
 * Mockup ilustrativo (desktop + celular) desenhado em CSS,
 * usando tokens do design system. Leve e sem requisições de imagem.
 */
const ModelMockup = ({ index, name }: ModelMockupProps) => {
  const hue = (index * 37) % 360;

  return (
    <div
      className="relative h-44 w-full overflow-hidden rounded-2xl bg-graphite/90"
      role="img"
      aria-label={`Prévia do modelo ${name} em computador e celular`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(120% 100% at 20% 0%, hsl(${hue} 45% 22%) 0%, hsl(var(--graphite)) 70%)`,
        }}
      />

      {/* Desktop */}
      <div className="absolute left-5 top-6 w-[62%] rounded-lg border border-foreground/15 bg-foreground/5 backdrop-blur-sm shadow-lg">
        <div className="flex gap-1 border-b border-foreground/10 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
        </div>
        <div className="space-y-1.5 p-2.5">
          <div className="h-6 w-full rounded gradient-emerald-bg opacity-80" />
          <div className="h-1.5 w-3/4 rounded bg-foreground/25" />
          <div className="h-1.5 w-1/2 rounded bg-foreground/15" />
          <div className="grid grid-cols-3 gap-1 pt-1">
            <div className="h-4 rounded bg-foreground/10" />
            <div className="h-4 rounded bg-foreground/10" />
            <div className="h-4 rounded bg-gold/50" />
          </div>
        </div>
      </div>

      {/* Celular */}
      <div className="absolute bottom-3 right-5 w-[22%] rounded-xl border border-foreground/20 bg-background/80 p-1.5 shadow-xl backdrop-blur-sm">
        <div className="mx-auto mb-1 h-0.5 w-4 rounded bg-foreground/30" />
        <div className="h-4 w-full rounded gradient-emerald-bg opacity-80" />
        <div className="mt-1 space-y-1">
          <div className="h-1 w-full rounded bg-foreground/20" />
          <div className="h-1 w-2/3 rounded bg-foreground/15" />
          <div className="h-3 w-full rounded bg-gold/40" />
        </div>
      </div>
    </div>
  );
};

export default ModelMockup;
