type Variant = "landing" | "ecommerce" | "dashboard" | "portfolio" | "blog" | "app";

const Bar = ({ w, tone = "muted" }: { w: string; tone?: "muted" | "gold" | "wine" }) => (
  <div
    className={`h-1.5 rounded-full ${
      tone === "gold" ? "bg-gold/70" : tone === "wine" ? "bg-bordo/70" : "bg-foreground/20"
    }`}
    style={{ width: w }}
  />
);

const Body = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case "ecommerce":
      return (
        <div className="grid grid-cols-3 gap-1.5 p-2.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-md bg-foreground/10 aspect-[4/3] border border-foreground/5" />
          ))}
        </div>
      );
    case "dashboard":
      return (
        <div className="flex gap-1.5 p-2.5">
          <div className="w-1/4 space-y-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Bar key={i} w="100%" />
            ))}
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-10 rounded-md bg-gradient-to-r from-bordo/50 to-gold/30" />
            <div className="flex items-end gap-1 h-10">
              {[40, 70, 30, 90, 55, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-gold/50" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      );
    case "portfolio":
      return (
        <div className="grid grid-cols-2 gap-1.5 p-2.5">
          <div className="rounded-md bg-foreground/10 aspect-square" />
          <div className="space-y-1.5 py-1">
            <Bar w="80%" tone="gold" />
            <Bar w="60%" />
            <Bar w="70%" />
            <Bar w="40%" tone="wine" />
          </div>
        </div>
      );
    case "blog":
      return (
        <div className="space-y-1.5 p-2.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-1.5 items-center">
              <div className="w-8 h-8 rounded bg-foreground/10 shrink-0" />
              <div className="space-y-1 flex-1">
                <Bar w="85%" />
                <Bar w="55%" />
              </div>
            </div>
          ))}
        </div>
      );
    case "app":
      return (
        <div className="p-2.5 space-y-1.5">
          <div className="h-8 rounded-md bg-bordo/40" />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 rounded-md bg-foreground/10" />
            <div className="h-8 rounded-md bg-gold/25" />
          </div>
          <Bar w="60%" tone="gold" />
        </div>
      );
    default:
      return (
        <div className="p-2.5 space-y-2">
          <div className="h-12 rounded-md bg-gradient-to-br from-bordo/60 via-wine/60 to-transparent" />
          <div className="space-y-1">
            <Bar w="70%" tone="gold" />
            <Bar w="90%" />
            <Bar w="45%" />
          </div>
        </div>
      );
  }
};

export const MockWindow = ({
  variant,
  title,
  className = "",
}: {
  variant: Variant;
  title: string;
  className?: string;
}) => (
  <div
    className={`rounded-xl overflow-hidden border border-gold/25 bg-burgundy/80 backdrop-blur-sm shadow-[0_18px_50px_-18px_hsl(var(--burgundy))] ring-1 ring-bordo/40 ${className}`}
  >
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-wine/40 border-b border-gold/15">
      <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
      <span className="w-1.5 h-1.5 rounded-full bg-bordo" />
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/25" />
      <span className="ml-2 text-[8px] tracking-wider text-foreground/40 truncate">{title}</span>
    </div>
    <Body variant={variant} />
  </div>
);

const SiteMockMosaic = () => (
  <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <div className="absolute inset-0 opacity-100">
      <MockWindow variant="landing" title="clientes.kaeth.com.br" className="absolute w-64 -left-6 top-10 -rotate-6" />
      <MockWindow variant="ecommerce" title="loja-premium.com" className="absolute w-72 left-28 top-40 rotate-3" />
      <MockWindow variant="dashboard" title="painel.betaplay.io" className="absolute w-80 -left-10 bottom-4 rotate-2" />
      <MockWindow variant="portfolio" title="studio-portfolio.com" className="absolute w-60 left-52 -top-6 rotate-6" />
      <MockWindow variant="blog" title="revista.digital" className="absolute w-56 right-56 top-4 -rotate-3" />
      <MockWindow variant="app" title="app.servicos.com" className="absolute w-56 right-4 top-28 rotate-6" />
      <MockWindow variant="landing" title="advocacia.site" className="absolute w-72 -right-8 bottom-10 -rotate-4" />
      <MockWindow variant="ecommerce" title="boutique.shop" className="absolute w-60 right-40 bottom-0 rotate-2" />
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--burgundy)/0.82)_30%,hsl(var(--burgundy)/0.55)_58%,hsl(var(--burgundy))_100%)]" />
  </div>
);

export default SiteMockMosaic;
