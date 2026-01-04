import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechFlow App",
    category: "Website & Branding",
    image: "https://placehold.co/600x400/1a1a2e/a855f7?text=TechFlow",
  },
  {
    title: "Bloom Beauty",
    category: "Logo & Identidade",
    image: "https://placehold.co/600x400/1a1a2e/06b6d4?text=Bloom",
  },
  {
    title: "Urban Eats",
    category: "Website Responsivo",
    image: "https://placehold.co/600x400/1a1a2e/a855f7?text=Urban",
  },
  {
    title: "Mindset Studio",
    category: "Branding Completo",
    image: "https://placehold.co/600x400/1a1a2e/06b6d4?text=Mindset",
  },
  {
    title: "Nova Finance",
    category: "Website & UI/UX",
    image: "https://placehold.co/600x400/1a1a2e/a855f7?text=Nova",
  },
  {
    title: "Pulse Fitness",
    category: "Logo & Social Media",
    image: "https://placehold.co/600x400/1a1a2e/06b6d4?text=Pulse",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Projetos que{" "}
            <span className="gradient-text">geram resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            Ver todos os projetos
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
