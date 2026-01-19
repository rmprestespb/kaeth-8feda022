import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import friendsPoker from "@/assets/portfolio/friends-poker.png";
import avantCarwash from "@/assets/portfolio/avant-carwash.png";
import mecanicaTotal from "@/assets/portfolio/mecanica-total.png";
import transviaLogistics from "@/assets/portfolio/transvia-logistics.png";
import slBeauty from "@/assets/portfolio/sl-beauty.png";
import republicaJogos from "@/assets/portfolio/republica-jogos.png";
import vetnova from "@/assets/portfolio/vetnova.png";
import aurora from "@/assets/portfolio/aurora.png";
import velocycle from "@/assets/portfolio/velocycle.png";
import dashboardSales from "@/assets/portfolio/dashboard-sales.png";
import dashboardAnalytics from "@/assets/portfolio/dashboard-analytics.png";
import dashboardSocial from "@/assets/portfolio/dashboard-social.png";
import dashboardMedical from "@/assets/portfolio/dashboard-medical.png";
import dashboardAgency from "@/assets/portfolio/dashboard-agency.png";
import dashboardLogistics from "@/assets/portfolio/dashboard-logistics.png";
import dashboardSmartHome from "@/assets/portfolio/dashboard-smart-home.png";
import dashboardLuxury from "@/assets/portfolio/dashboard-luxury.png";
import dashboardGaming from "@/assets/portfolio/dashboard-gaming.png";

const dashboards = [
  {
    title: "Dashboard Sales Performance",
    category: "Dashboard & BI",
    image: dashboardSales,
  },
  {
    title: "Dashboard Analytics",
    category: "Dashboard & BI",
    image: dashboardAnalytics,
  },
  {
    title: "Social Media Analytics",
    category: "Dashboard & Redes Sociais",
    image: dashboardSocial,
  },
  {
    title: "Dashboard Hospitalar",
    category: "Dashboard & Saúde",
    image: dashboardMedical,
  },
  {
    title: "Dashboard Agência Criativa",
    category: "Dashboard & Gestão",
    image: dashboardAgency,
  },
  {
    title: "Dashboard Logística",
    category: "Dashboard & Transporte",
    image: dashboardLogistics,
  },
  {
    title: "Dashboard Smart Home",
    category: "Dashboard & IoT",
    image: dashboardSmartHome,
  },
  {
    title: "Dashboard Vendas Premium",
    category: "Dashboard & Marketing",
    image: dashboardLuxury,
  },
  {
    title: "Dashboard Gaming",
    category: "Dashboard & Entretenimento",
    image: dashboardGaming,
  },
];

const creativos = [
  {
    title: "Friends Poker Club",
    category: "Logo & Branding",
    image: friendsPoker,
  },
  {
    title: "Avant Future Carwash",
    category: "Logo & Identidade Visual",
    image: avantCarwash,
  },
  {
    title: "Mecânica Total 3D Power",
    category: "Logo & Branding",
    image: mecanicaTotal,
  },
  {
    title: "Transvia Logistics",
    category: "Identidade Corporativa",
    image: transviaLogistics,
  },
  {
    title: "SL Beauty",
    category: "Logo & Design Elegante",
    image: slBeauty,
  },
  {
    title: "República dos Jogos",
    category: "Logo & Brasão",
    image: republicaJogos,
  },
  {
    title: "VetNova Clínica Veterinária",
    category: "Logo & Branding",
    image: vetnova,
  },
  {
    title: "Aurora Centro Termal",
    category: "Logo & Identidade Visual",
    image: aurora,
  },
  {
    title: "Velocycle Hub",
    category: "Logo & Branding Esportivo",
    image: velocycle,
  },
];

type TabType = "dashboards" | "criativos";

interface Project {
  title: string;
  category: string;
  image: string;
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboards");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentProjects = activeTab === "dashboards" ? dashboards : creativos;

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card/50 backdrop-blur-sm rounded-full p-1.5 border border-border/50">
            <button
              onClick={() => setActiveTab("dashboards")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "dashboards"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dashboards & BI
            </button>
            <button
              onClick={() => setActiveTab("criativos")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "criativos"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Logos & Criativos
            </button>
          </div>
        </div>

        {/* Portfolio Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden bg-card">
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
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal for viewing project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
                <span className="text-primary text-sm font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
