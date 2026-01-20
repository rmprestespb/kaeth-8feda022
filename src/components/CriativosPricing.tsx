import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Zap, Target, Palette, PenTool, BarChart3, Users, Clock } from "lucide-react";

type SubTabType = "unidades" | "carrosseis" | "combos";

interface PricingCard {
  title: string;
  subtitle?: string;
  price: string;
  period?: string;
  features?: string[];
  badge?: string;
  badgeType?: "popular" | "recommended" | "economy";
}

const unidadesPosts: PricingCard[] = [
  {
    title: "Post Estático Simples",
    subtitle: "Arte única para feed (Instagram/Facebook) sem copy",
    price: "R$ 50,00",
  },
  {
    title: "Post Estático Completo",
    subtitle: "Arte + copy + hashtags + postagem",
    price: "R$ 90,00",
    badge: "Mais Popular",
    badgeType: "popular",
  },
  {
    title: "Stories",
    subtitle: "Arte para stories (1 unidade)",
    price: "R$ 40,00",
  },
  {
    title: "Reels (arte/thumbnail)",
    subtitle: "Arte de capa para Reels (sem produção de vídeo)",
    price: "R$ 80,00",
  },
  {
    title: "Post para LinkedIn",
    subtitle: "Arte + copy profissional para LinkedIn",
    price: "R$ 100,00",
  },
];

const servicosComplementares: PricingCard[] = [
  {
    title: "Padronização de Rede Social",
    subtitle: "Customização completa de perfil (bio, destaques, feed)",
    price: "R$ 490,00",
  },
  {
    title: "Pacote 10 Artes Avulsas",
    subtitle: "10 artes para uso livre (sem postagem)",
    price: "R$ 450,00",
  },
  {
    title: "Banco de Hashtags",
    subtitle: "Pesquisa e criação de banco com 100+ hashtags segmentadas",
    price: "R$ 150,00",
  },
  {
    title: "Planejamento Mensal",
    subtitle: "Calendário editorial + estratégia de conteúdo (serviço avulso)",
    price: "R$ 300,00",
  },
  {
    title: "Relatório de Resultados",
    subtitle: "Análise de métricas e insights mensais",
    price: "R$ 200,00",
  },
];

const carrosseis: PricingCard[] = [
  {
    title: "Carrossel Básico",
    subtitle: "3 slides",
    price: "R$ 120,00",
    features: ["3 artes conectadas", "Copy simples", "Hashtags básicas"],
  },
  {
    title: "Carrossel Padrão",
    subtitle: "5 slides",
    price: "R$ 180,00",
    features: ["5 artes conectadas", "Copy elaborado", "Hashtags estratégicas", "Revisão incluída"],
    badge: "Recomendado",
    badgeType: "recommended",
  },
  {
    title: "Carrossel Premium",
    subtitle: "7 slides",
    price: "R$ 250,00",
    features: ["7 artes com design elaborado", "Copywriting estratégico", "Pesquisa de hashtags", "2 rodadas de revisão"],
  },
  {
    title: "Carrossel Educativo",
    subtitle: "10 slides",
    price: "R$ 350,00",
    features: ["10 artes informativas", "Conteúdo tutorial detalhado", "Copy educacional", "Estrutura didática"],
  },
  {
    title: "Carrossel Storytelling",
    subtitle: "10+ slides",
    price: "R$ 450,00",
    features: ["Mais de 10 artes", "Narrativa visual complexa", "Copy profissional", "Planejamento estratégico"],
  },
];

const combos: PricingCard[] = [
  {
    title: "Combo Starter",
    price: "R$ 650,00",
    period: "/mês",
    features: ["8 posts estáticos", "1 carrossel básico", "4 stories", "Planejamento básico"],
    badge: "Economia 15%",
    badgeType: "economy",
  },
  {
    title: "Combo Essencial",
    price: "R$ 950,00",
    period: "/mês",
    features: ["12 posts completos", "2 carrosséis padrão", "8 stories", "Planejamento mensal", "Relatório básico"],
    badge: "Melhor Custo-Benefício",
    badgeType: "recommended",
  },
  {
    title: "Combo Profissional",
    price: "R$ 1.450,00",
    period: "/mês",
    features: ["16 posts completos", "3 carrosséis premium", "12 stories", "2 Reels (arte)", "Planejamento estratégico", "Relatório detalhado"],
    badge: "Economia 25%",
    badgeType: "economy",
  },
  {
    title: "Combo Premium",
    price: "R$ 1.890,00",
    period: "/mês",
    features: ["20 posts completos", "4 carrosséis diversos", "16 stories", "4 Reels (arte)", "Planejamento completo", "Relatório mensal avançado"],
    badge: "Economia 30%",
    badgeType: "economy",
  },
  {
    title: "Combo Enterprise",
    price: "R$ 2.850,00",
    period: "/mês",
    features: ["30 posts completos", "6 carrosséis diversos", "24 stories", "6 Reels (arte)", "2 redes sociais", "Planejamento estratégico", "Relatório executivo"],
    badge: "Economia 35%",
    badgeType: "economy",
  },
];

const diferenciais = [
  {
    icon: Target,
    title: "Estratégia de Conteúdo",
    description: "Não apenas executamos, mas planejamos estrategicamente cada publicação alinhada aos objetivos do cliente.",
  },
  {
    icon: Palette,
    title: "Design Profissional",
    description: "Equipe especializada em design para redes sociais com portfólio comprovado.",
  },
  {
    icon: PenTool,
    title: "Copywriting Persuasivo",
    description: "Textos elaborados por profissionais de comunicação, não apenas legendas genéricas.",
  },
  {
    icon: BarChart3,
    title: "Análise de Resultados",
    description: "Acompanhamento de métricas e ajustes contínuos para otimização de performance.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Relacionamento próximo com o cliente e flexibilidade para ajustes.",
  },
  {
    icon: Clock,
    title: "Entrega Pontual",
    description: "Compromisso com prazos e qualidade consistente em todas as entregas.",
  },
];

const observacoes = [
  {
    title: "Condições de Pagamento",
    description: "Valores podem ser pagos via PIX, transferência bancária ou boleto. Pacotes mensais requerem fidelidade mínima de 3 meses.",
  },
  {
    title: "Revisões",
    description: "Cada criativo inclui até 2 rodadas de revisão sem custo adicional. Revisões extras são cobradas à parte.",
  },
  {
    title: "Produção de Vídeo",
    description: "Os valores não incluem produção de vídeos (filmagem, edição completa). Apenas artes estáticas e thumbnails.",
  },
  {
    title: "Urgência",
    description: "Entregas em menos de 48h têm acréscimo de 30% sobre o valor do serviço.",
  },
];

const PricingCardComponent = ({ card, index, showFeatures = false }: { card: PricingCard; index: number; showFeatures?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
      card.badgeType === "popular" || card.badgeType === "recommended"
        ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/20"
        : "bg-card/50 border-border/50 hover:border-primary/30"
    }`}
  >
    {card.badge && (
      <span
        className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold ${
          card.badgeType === "popular" || card.badgeType === "recommended"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        }`}
      >
        {card.badge}
      </span>
    )}
    <h4 className="text-lg font-bold text-foreground mb-1">{card.title}</h4>
    {card.subtitle && <p className="text-sm text-muted-foreground mb-3">{card.subtitle}</p>}
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-2xl font-bold text-primary">{card.price}</span>
      {card.period && <span className="text-muted-foreground text-sm">{card.period}</span>}
    </div>
    {showFeatures && card.features && (
      <ul className="space-y-2">
        {card.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const CriativosPricing = () => {
  const [activeSubTab, setActiveSubTab] = useState<SubTabType>("unidades");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-12"
    >
      {/* Sub-tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-2 bg-card/50 backdrop-blur-sm rounded-xl p-1.5 border border-border/50">
          <button
            onClick={() => setActiveSubTab("unidades")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeSubTab === "unidades"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Unidades
          </button>
          <button
            onClick={() => setActiveSubTab("carrosseis")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeSubTab === "carrosseis"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Carrosséis
          </button>
          <button
            onClick={() => setActiveSubTab("combos")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeSubTab === "combos"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Combos
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Unidades Content */}
          {activeSubTab === "unidades" && (
            <div className="space-y-12">
              {/* Posts Individuais */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Posts Individuais</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Serviços avulsos para necessidades pontuais. Cada criativo é desenvolvido com atenção aos detalhes e alinhado à identidade visual do cliente.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {unidadesPosts.map((card, index) => (
                    <PricingCardComponent key={card.title} card={card} index={index} />
                  ))}
                </div>
              </div>

              {/* Serviços Complementares */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Serviços Complementares</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Serviços adicionais para complementar sua estratégia de redes sociais
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {servicosComplementares.map((card, index) => (
                    <PricingCardComponent key={card.title} card={card} index={index} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Carrosséis Content */}
          {activeSubTab === "carrosseis" && (
            <div className="space-y-12">
              {/* Opções de Carrosséis */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">5 Opções de Carrosséis</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Carrosséis exigem maior trabalho criativo, pois envolvem múltiplas artes conectadas em uma narrativa visual coerente.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {carrosseis.map((card, index) => (
                    <PricingCardComponent key={card.title} card={card} index={index} showFeatures />
                  ))}
                </div>
              </div>

              {/* Serviços Complementares */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Serviços Complementares</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Serviços adicionais para complementar sua estratégia de redes sociais
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {servicosComplementares.map((card, index) => (
                    <PricingCardComponent key={card.title} card={card} index={index} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Combos Content */}
          {activeSubTab === "combos" && (
            <div className="space-y-12">
              {/* Pacotes Mensais */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pacotes Mensais</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Melhor custo-benefício para produção contínua de conteúdo. Valores incluem planejamento, criação e postagem.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {combos.map((card, index) => (
                    <PricingCardComponent key={card.title} card={card} index={index} showFeatures />
                  ))}
                </div>
              </div>

              {/* Serviços Complementares */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Serviços Complementares</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Serviços adicionais para complementar sua estratégia de redes sociais
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {servicosComplementares.map((card, index) => (
                    <PricingCardComponent key={card.title} card={card} index={index} />
                  ))}
                </div>
              </div>

              {/* Nossos Diferenciais */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Nossos Diferenciais</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    O que justifica investir em serviços profissionais de qualidade
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diferenciais.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <item.icon className="w-10 h-10 text-primary mb-4" />
                      <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Observações Importantes - Appears in all tabs */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Observações Importantes</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {observacoes.map((obs, index) => (
                <motion.div
                  key={obs.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 rounded-xl bg-muted/30 border border-border/30"
                >
                  <h4 className="font-semibold text-foreground mb-2">{obs.title}</h4>
                  <p className="text-sm text-muted-foreground">{obs.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground space-y-1">
              <p>Última atualização: Janeiro de 2026</p>
              <p>Os preços estão sujeitos a alterações sem aviso prévio</p>
              <p className="text-xs mt-4 opacity-70">
                Tabela elaborada com base em pesquisa de mercado brasileiro de marketing digital.<br />
                Valores considerando tempo de execução, complexidade técnica, valor percebido e custos operacionais.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CriativosPricing;
