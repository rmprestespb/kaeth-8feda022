/**
 * Camada de tema por segmento: fontes, layout do hero, imagens reais,
 * números e parceiros. Permite que cada demonstração pareça um site
 * único sem duplicar o componente base.
 */

const U = (id: string, w = 1400, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export type HeroLayout = "overlay-left" | "split" | "fullbleed" | "duo" | "editorial";

export type Tema = {
  /** Fonte dos títulos (family CSS completa) */
  fontTitulo: string;
  /** Fonte do corpo */
  fontTexto: string;
  /** Peso/tracking dos títulos */
  tituloClass: string;
  layout: HeroLayout;
  /** 6 imagens: [0] hero principal, [1..5] institucional/portfólio */
  imagens: string[];
  numeros: { to: number; prefix?: string; suffix?: string; label: string }[];
  parceiros: string[];
  /** Rótulo do menu de portfólio ("Portfólio", "Menu", "Imóveis"...) */
  portfolioLabel: string;
  /** Texto do CTA principal */
  ctaLabel: string;
  /** Raio dos cartões */
  radius: string;
};

const P = {
  playfair: "'Playfair Display', Georgia, serif",
  cormorant: "'Cormorant Garamond', Georgia, serif",
  dmserif: "'DM Serif Display', Georgia, serif",
  lora: "'Lora', Georgia, serif",
  oswald: "'Oswald', Impact, sans-serif",
  bebas: "'Bebas Neue', Impact, sans-serif",
  archivo: "'Archivo', Helvetica, sans-serif",
  space: "'Space Grotesk', Helvetica, sans-serif",
  manrope: "'Manrope', Helvetica, sans-serif",
  poppins: "'Poppins', Helvetica, sans-serif",
  inter: "'Inter', Helvetica, sans-serif",
};

const IMG = {
  balanca: "photo-1589829545856-d10d557cf95f",
  reuniaoJur: "photo-1521737604893-d14cc237f11d",
  contrato: "photo-1454165804606-c3d57bc86b40",
  assinatura: "photo-1450101499163-c8848c66ca85",
  esteto: "photo-1505751172876-fa1923c5c528",
  recepcaoClinica: "photo-1519494026892-80bbd2d6fd0d",
  medico: "photo-1576091160399-112ba8d25d1d",
  leitos: "photo-1538108149393-fbbd81895907",
  consultorioOdo: "photo-1629909613654-28e377c37b09",
  radiografia: "photo-1588776814546-1ffcf47267a5",
  atendimentoOdo: "photo-1606811841689-23dfddce3e95",
  aparelho: "photo-1609840114035-3c981b782dfe",
  barbearia: "photo-1585747860715-2ba37e788b70",
  barba: "photo-1503951914875-452162b0f3f1",
  ferramentasBarba: "photo-1621605815971-fbc98d665033",
  navalha: "photo-1517832606299-7ae9b720a186",
  salaoBarber: "photo-1560066984-138dadb4c035",
  cabelo: "photo-1522337360788-8b13dee7a37e",
  salaoLavagem: "photo-1595476108010-b4d1f102b1b1",
  salaoEspelhos: "photo-1600948836101-f9ffda59d250",
  salaoRest: "photo-1517248135467-4c7edcad34c4",
  pratoChef: "photo-1414235077428-338989a2e8c0",
  bistro: "photo-1555396273-367ea4eb4db5",
  restauranteMesas: "photo-1552566626-52f8b828add9",
  pizza1: "photo-1513104890138-7c749659a591",
  pizza2: "photo-1565299624946-b28f40a0ae38",
  pizza3: "photo-1604382354936-07c5d9983bd3",
  pizza4: "photo-1571997478779-2adcbbe9ab2f",
  halteres: "photo-1534438327276-14e5300c3a48",
  academiaSala: "photo-1571902943202-507ec2618e8f",
  levantamento: "photo-1517836357463-d25dfeac3438",
  treinoBraco: "photo-1583454110551-21f2fa2afe61",
  agachamento: "photo-1554284126-aa88f22d8b74",
  petBulldog: "photo-1583337130417-3346a1be7dee",
  petDois: "photo-1548199973-03cce0bbc87b",
  petFilhote: "photo-1591160690555-5debfba289f0",
  chaveCasa: "photo-1560518883-ce09059eeffa",
  casaPiscina: "photo-1564013799919-ab600027ffc6",
  casaCampo: "photo-1570129477492-45c003edd2be",
  casaModerna: "photo-1600585154340-be6161a56a0c",
  obraAerea: "photo-1541888946425-d81bb19240f5",
  prancheta: "photo-1503387762-592deb58ef4e",
  obraEquipe: "photo-1504307651254-35680f356dfd",
  interiorMinimal: "photo-1497366216548-37526070297c",
  loftVidro: "photo-1497366811353-6870744d04b2",
  solarCampo: "photo-1509391366360-2e959784a276",
  solarGrama: "photo-1497440001374-f26997328c1b",
  solarTelhado: "photo-1613665813446-82a78c468a1d",
  lojaVitrine: "photo-1441986300917-64674bd600d8",
  lojaSacolas: "photo-1483985988355-763728e1935b",
  lojaArara: "photo-1441984904996-e0b6ba687e04",
  hotelPiscina: "photo-1566073771259-6a8506099945",
  hotelDeck: "photo-1571003123894-1f0594d2b5d9",
  hotelSuite: "photo-1590490360182-c33d57733427",
  hotelQuarto: "photo-1578683010236-d716f9a3f461",
  oficina: "photo-1487754180451-c456f719a1fc",
  carroNoite: "photo-1493238792000-8113da705763",
  motor: "photo-1625047509168-a7026f36de04",
  dashboard: "photo-1560472354-b33ff0c44a43",
  workshop: "photo-1552664730-d307ca884978",
  reuniaoCorp: "photo-1521737711867-e3b97375f902",
  handshake: "photo-1600880292203-757bb62b4baf",
  coworking: "photo-1568992687947-868a62a9f521",
  psiSorriso: "photo-1516302752625-fcc3c50ae61f",
  psiRetrato: "photo-1573497019940-1c28c88b4f3e",
  psiEscrita: "photo-1527689368864-3a821dbccc34",
  psiSessao: "photo-1573164713988-8665fc963095",
  psiFamilia: "photo-1517971129774-8a2b38fa128e",
  psiMeditacao: "photo-1591343395902-1adcb454c4e2",
  yogaPraia: "photo-1545205597-3d9d02c29597",
  yogaSilhueta: "photo-1544367567-0f2fcb009e0b",
  codigo: "photo-1581094794329-c8112a89af12",
};

const t = (
  layout: HeroLayout,
  fontTitulo: string,
  fontTexto: string,
  tituloClass: string,
  radius: string,
  imgs: string[],
  numeros: Tema["numeros"],
  parceiros: string[],
  portfolioLabel: string,
  ctaLabel: string
): Tema => ({
  layout,
  fontTitulo,
  fontTexto,
  tituloClass,
  radius,
  imagens: imgs.map((i) => U(i)),
  numeros,
  parceiros,
  portfolioLabel,
  ctaLabel,
});

export const temas: Record<string, Tema> = {
  "advocacia-premium": t(
    "overlay-left",
    P.playfair,
    P.inter,
    "font-semibold tracking-tight",
    "rounded-sm",
    [IMG.balanca, IMG.reuniaoJur, IMG.contrato, IMG.assinatura, IMG.interiorMinimal, IMG.loftVidro],
    [
      { to: 2400, prefix: "+", label: "Causas conduzidas" },
      { to: 18, prefix: "", label: "Anos de banca" },
      { to: 96, suffix: "%", label: "Êxito em acordos" },
      { to: 12, prefix: "", label: "Advogados no time" },
    ],
    ["OAB Regional", "Instituto Jurídico BR", "Câmara de Mediação", "Federação do Comércio"],
    "Casos",
    "Agendar consulta"
  ),
  "clinica-medica": t(
    "split",
    P.manrope,
    P.manrope,
    "font-extrabold tracking-tight",
    "rounded-3xl",
    [IMG.recepcaoClinica, IMG.medico, IMG.esteto, IMG.leitos, IMG.interiorMinimal, IMG.workshop],
    [
      { to: 32000, prefix: "+", label: "Consultas realizadas" },
      { to: 24, prefix: "", label: "Especialidades" },
      { to: 15, prefix: "", label: "Anos de história" },
      { to: 98, suffix: "%", label: "Pacientes satisfeitos" },
    ],
    ["Unimed", "Bradesco Saúde", "SulAmérica", "Amil", "Cassi"],
    "Estrutura",
    "Agendar consulta"
  ),
  odontologia: t(
    "duo",
    P.poppins,
    P.poppins,
    "font-bold tracking-tight",
    "rounded-[2rem]",
    [IMG.consultorioOdo, IMG.atendimentoOdo, IMG.aparelho, IMG.radiografia, IMG.recepcaoClinica, IMG.esteto],
    [
      { to: 9800, prefix: "+", label: "Sorrisos transformados" },
      { to: 6, prefix: "", label: "Consultórios" },
      { to: 12, prefix: "", label: "Anos de clínica" },
      { to: 99, suffix: "%", label: "Indicariam a clínica" },
    ],
    ["Invisalign", "Straumann", "Odontoprev", "Colgate Profissional"],
    "Antes e depois",
    "Agendar avaliação"
  ),
  "barbearia-premium": t(
    "fullbleed",
    P.oswald,
    P.inter,
    "font-bold uppercase tracking-[0.02em]",
    "rounded-none",
    [IMG.barbearia, IMG.barba, IMG.ferramentasBarba, IMG.navalha, IMG.salaoBarber, IMG.salaoEspelhos],
    [
      { to: 14000, prefix: "+", label: "Cortes na cadeira" },
      { to: 7, prefix: "", label: "Barbeiros" },
      { to: 9, prefix: "", label: "Anos de casa" },
      { to: 4, suffix: ".9", label: "Nota no Google" },
    ],
    ["Barba Forte", "QOD Barber Shop", "Wahl", "Don Alcides"],
    "Galeria",
    "Reservar horário"
  ),
  "salao-beleza": t(
    "editorial",
    P.cormorant,
    P.manrope,
    "font-semibold tracking-tight",
    "rounded-2xl",
    [IMG.cabelo, IMG.salaoEspelhos, IMG.salaoLavagem, IMG.salaoBarber, IMG.barbearia, IMG.psiRetrato],
    [
      { to: 11000, prefix: "+", label: "Clientes atendidas" },
      { to: 10, prefix: "", label: "Profissionais" },
      { to: 8, prefix: "", label: "Anos de salão" },
      { to: 97, suffix: "%", label: "Voltam sempre" },
    ],
    ["Wella", "L'Oréal Professionnel", "Kérastase", "Truss"],
    "Transformações",
    "Agendar horário"
  ),
  restaurante: t(
    "fullbleed",
    P.dmserif,
    P.manrope,
    "font-normal tracking-tight",
    "rounded-xl",
    [IMG.pratoChef, IMG.bistro, IMG.salaoRest, IMG.restauranteMesas, IMG.pizza1, IMG.pizza4],
    [
      { to: 120, prefix: "", label: "Lugares no salão" },
      { to: 45, prefix: "+", label: "Pratos no menu" },
      { to: 14, prefix: "", label: "Anos de cozinha" },
      { to: 4, suffix: ".8", label: "Nota dos clientes" },
    ],
    ["Guia Michelin BR", "Wine Selection", "Slow Food", "Chef's Table"],
    "Menu",
    "Reservar mesa"
  ),
  pizzaria: t(
    "duo",
    P.bebas,
    P.poppins,
    "font-normal uppercase tracking-wide",
    "rounded-3xl",
    [IMG.pizza1, IMG.pizza3, IMG.pizza2, IMG.pizza4, IMG.salaoRest, IMG.restauranteMesas],
    [
      { to: 280000, prefix: "+", label: "Pizzas assadas" },
      { to: 32, prefix: "", label: "Sabores" },
      { to: 25, suffix: " min", label: "Entrega média" },
      { to: 17, prefix: "", label: "Anos de forno" },
    ],
    ["iFood", "Rappi", "Coca-Cola", "Forno Bravo"],
    "Sabores",
    "Pedir agora"
  ),
  academia: t(
    "fullbleed",
    P.oswald,
    P.archivo,
    "font-bold uppercase italic",
    "rounded-lg",
    [IMG.academiaSala, IMG.halteres, IMG.levantamento, IMG.treinoBraco, IMG.agachamento, IMG.yogaSilhueta],
    [
      { to: 3200, prefix: "+", label: "Alunos ativos" },
      { to: 60, prefix: "+", label: "Aulas por semana" },
      { to: 1800, suffix: " m²", label: "Área de treino" },
      { to: 24, suffix: "h", label: "Acesso liberado" },
    ],
    ["Life Fitness", "Growth Supplements", "Technogym", "Gatorade"],
    "Estrutura",
    "Treino grátis"
  ),
  "personal-trainer": t(
    "split",
    P.archivo,
    P.archivo,
    "font-extrabold tracking-tighter",
    "rounded-2xl",
    [IMG.levantamento, IMG.agachamento, IMG.treinoBraco, IMG.halteres, IMG.yogaPraia, IMG.academiaSala],
    [
      { to: 480, prefix: "+", label: "Alunos treinados" },
      { to: 12, suffix: " kg", label: "Média de gordura perdida" },
      { to: 11, prefix: "", label: "Anos de experiência" },
      { to: 100, suffix: "%", label: "Treinos individuais" },
    ],
    ["CREF", "Growth", "Polar", "Nutri Performance"],
    "Resultados",
    "Avaliação gratuita"
  ),
  psicologo: t(
    "editorial",
    P.lora,
    P.manrope,
    "font-medium tracking-tight",
    "rounded-[1.75rem]",
    [IMG.psiSessao, IMG.psiRetrato, IMG.psiEscrita, IMG.psiFamilia, IMG.psiMeditacao, IMG.psiSorriso],
    [
      { to: 5200, prefix: "+", label: "Sessões realizadas" },
      { to: 9, prefix: "", label: "Anos de clínica" },
      { to: 3, prefix: "", label: "Abordagens integradas" },
      { to: 100, suffix: "%", label: "Sigilo garantido" },
    ],
    ["CRP", "Sociedade de TCC", "Vittude", "Zenklub"],
    "Espaço",
    "Agendar sessão"
  ),
  veterinaria: t(
    "duo",
    P.poppins,
    P.poppins,
    "font-bold tracking-tight",
    "rounded-[2rem]",
    [IMG.petFilhote, IMG.petDois, IMG.petBulldog, IMG.medico, IMG.recepcaoClinica, IMG.leitos],
    [
      { to: 21000, prefix: "+", label: "Pets atendidos" },
      { to: 24, suffix: "h", label: "Pronto atendimento" },
      { to: 13, prefix: "", label: "Anos cuidando" },
      { to: 99, suffix: "%", label: "Tutores satisfeitos" },
    ],
    ["Royal Canin", "Zoetis", "Petlove", "Hill's"],
    "Nossa clínica",
    "Agendar consulta"
  ),
  imobiliaria: t(
    "split",
    P.space,
    P.manrope,
    "font-bold tracking-tight",
    "rounded-2xl",
    [IMG.casaPiscina, IMG.casaModerna, IMG.casaCampo, IMG.chaveCasa, IMG.loftVidro, IMG.interiorMinimal],
    [
      { to: 1450, prefix: "+", label: "Imóveis negociados" },
      { to: 320, prefix: "+", label: "Imóveis na carteira" },
      { to: 16, prefix: "", label: "Anos no mercado" },
      { to: 45, suffix: " dias", label: "Média de venda" },
    ],
    ["CRECI", "Caixa", "Itaú Crédito Imobiliário", "Bradesco Financiamentos"],
    "Imóveis",
    "Falar com corretor"
  ),
  engenharia: t(
    "overlay-left",
    P.archivo,
    P.inter,
    "font-extrabold uppercase tracking-tight",
    "rounded-md",
    [IMG.obraEquipe, IMG.obraAerea, IMG.prancheta, IMG.loftVidro, IMG.interiorMinimal, IMG.casaModerna],
    [
      { to: 640, prefix: "+", label: "Obras executadas" },
      { to: 480000, suffix: " m²", label: "Área construída" },
      { to: 22, prefix: "", label: "Anos de engenharia" },
      { to: 0, prefix: "", label: "Acidentes graves" },
    ],
    ["CREA", "Votorantim", "Gerdau", "Weber Saint-Gobain"],
    "Obras",
    "Solicitar proposta"
  ),
  arquitetura: t(
    "editorial",
    P.cormorant,
    P.manrope,
    "font-light tracking-tight",
    "rounded-none",
    [IMG.casaModerna, IMG.loftVidro, IMG.prancheta, IMG.interiorMinimal, IMG.casaCampo, IMG.casaPiscina],
    [
      { to: 210, prefix: "+", label: "Projetos assinados" },
      { to: 38, prefix: "", label: "Prêmios e publicações" },
      { to: 14, prefix: "", label: "Anos de estúdio" },
      { to: 6, prefix: "", label: "Estados atendidos" },
    ],
    ["CAU/BR", "Casa Vogue", "Deca", "Portobello"],
    "Projetos",
    "Agendar visita"
  ),
  contabilidade: t(
    "split",
    P.manrope,
    P.inter,
    "font-bold tracking-tight",
    "rounded-xl",
    [IMG.contrato, IMG.assinatura, IMG.dashboard, IMG.reuniaoCorp, IMG.handshake, IMG.interiorMinimal],
    [
      { to: 780, prefix: "+", label: "Empresas na carteira" },
      { to: 24, prefix: "", label: "Anos de escritório" },
      { to: 100, suffix: "%", label: "Obrigações em dia" },
      { to: 31, suffix: "%", label: "Economia fiscal média" },
    ],
    ["CRC", "Domínio Sistemas", "Sebrae", "Receita Federal e-CAC"],
    "Cases",
    "Falar com contador"
  ),
  "energia-solar": t(
    "fullbleed",
    P.poppins,
    P.poppins,
    "font-extrabold tracking-tight",
    "rounded-2xl",
    [IMG.solarCampo, IMG.solarTelhado, IMG.solarGrama, IMG.obraEquipe, IMG.obraAerea, IMG.casaModerna],
    [
      { to: 2100, prefix: "+", label: "Usinas instaladas" },
      { to: 95, suffix: "%", label: "Redução na conta" },
      { to: 25, suffix: " anos", label: "Garantia dos painéis" },
      { to: 18, prefix: "", label: "Cidades atendidas" },
    ],
    ["Canadian Solar", "Growatt", "Fronius", "BYD"],
    "Instalações",
    "Simular economia"
  ),
  "loja-roupas": t(
    "duo",
    P.playfair,
    P.manrope,
    "font-semibold tracking-tight",
    "rounded-none",
    [IMG.lojaArara, IMG.lojaVitrine, IMG.lojaSacolas, IMG.cabelo, IMG.salaoEspelhos, IMG.psiRetrato],
    [
      { to: 4, prefix: "", label: "Coleções por ano" },
      { to: 26000, prefix: "+", label: "Peças vendidas" },
      { to: 11, prefix: "", label: "Anos de marca" },
      { to: 3, prefix: "", label: "Lojas físicas" },
    ],
    ["Visa", "Pix", "Melhor Envio", "Correios"],
    "Coleção",
    "Ver coleção"
  ),
  hotel: t(
    "fullbleed",
    P.dmserif,
    P.manrope,
    "font-normal tracking-tight",
    "rounded-lg",
    [IMG.hotelPiscina, IMG.hotelSuite, IMG.hotelDeck, IMG.hotelQuarto, IMG.interiorMinimal, IMG.loftVidro],
    [
      { to: 68, prefix: "", label: "Suítes e chalés" },
      { to: 42000, prefix: "+", label: "Hóspedes recebidos" },
      { to: 21, prefix: "", label: "Anos de hospitalidade" },
      { to: 9, suffix: ".2", label: "Nota no Booking" },
    ],
    ["Booking.com", "Airbnb", "TripAdvisor", "ABIH"],
    "Acomodações",
    "Reservar estadia"
  ),
  "auto-center": t(
    "overlay-left",
    P.oswald,
    P.archivo,
    "font-bold uppercase italic tracking-tight",
    "rounded-md",
    [IMG.oficina, IMG.motor, IMG.carroNoite, IMG.obraEquipe, IMG.dashboard, IMG.interiorMinimal],
    [
      { to: 38000, prefix: "+", label: "Veículos revisados" },
      { to: 19, prefix: "", label: "Anos de oficina" },
      { to: 90, suffix: " dias", label: "Garantia dos serviços" },
      { to: 8, prefix: "", label: "Boxes de atendimento" },
    ],
    ["Bosch", "Castrol", "Michelin", "Wega Motors"],
    "Serviços",
    "Agendar revisão"
  ),
  corporativo: t(
    "split",
    P.space,
    P.inter,
    "font-bold tracking-tighter",
    "rounded-xl",
    [IMG.reuniaoCorp, IMG.workshop, IMG.handshake, IMG.dashboard, IMG.coworking, IMG.codigo],
    [
      { to: 190, prefix: "+", label: "Projetos entregues" },
      { to: 31, suffix: "%", label: "Ganho médio de produtividade" },
      { to: 17, prefix: "", label: "Anos de consultoria" },
      { to: 5, prefix: "", label: "Países atendidos" },
    ],
    ["Microsoft Partner", "AWS", "Salesforce", "PMI"],
    "Cases",
    "Falar com especialista"
  ),
};

const fallback = temas.corporativo;

export const getTema = (slug: string): Tema => temas[slug] ?? fallback;
