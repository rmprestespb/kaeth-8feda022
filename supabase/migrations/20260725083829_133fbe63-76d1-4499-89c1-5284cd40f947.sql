
CREATE TABLE public.portfolio_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('dashboards','logos','criativos','sites')),
  title TEXT NOT NULL,
  category_label TEXT NOT NULL,
  image_url TEXT NOT NULL,
  price TEXT,
  description TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.portfolio_projects TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.portfolio_projects TO authenticated;
GRANT ALL ON public.portfolio_projects TO service_role;

ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON public.portfolio_projects FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert projects"
  ON public.portfolio_projects FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update projects"
  ON public.portfolio_projects FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete projects"
  ON public.portfolio_projects FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER update_portfolio_projects_updated_at
  BEFORE UPDATE ON public.portfolio_projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed existing projects
INSERT INTO public.portfolio_projects (category, title, category_label, image_url, price, description, sort_order) VALUES
('dashboards','Dashboard de Vendas','Dashboard & BI','/portfolio/dashboard-sales.png',NULL,NULL,10),
('dashboards','Dashboard de Análise','Dashboard & BI','/portfolio/dashboard-analytics.png',NULL,NULL,20),
('dashboards','Análise de Redes Sociais','Dashboard & Redes Sociais','/portfolio/dashboard-social.png',NULL,NULL,30),
('dashboards','Dashboard Hospitalar','Dashboard & Saúde','/portfolio/dashboard-medical.png',NULL,NULL,40),
('dashboards','Dashboard Agência Criativa','Dashboard & Gestão','/portfolio/dashboard-agency.png',NULL,NULL,50),
('dashboards','Dashboard Logística','Dashboard & Transporte','/portfolio/dashboard-logistics.png',NULL,NULL,60),
('dashboards','Dashboard Casa Inteligente','Dashboard & IoT','/portfolio/dashboard-smart-home.png',NULL,NULL,70),
('dashboards','Dashboard Vendas Premium','Dashboard & Marketing','/portfolio/dashboard-luxury.png',NULL,NULL,80),
('dashboards','Dashboard de Jogos','Dashboard & Entretenimento','/portfolio/dashboard-gaming.png',NULL,NULL,90),
('logos','Friends Poker Club','Logo & Marca','/portfolio/friends-poker.png',NULL,NULL,10),
('logos','Avant Future Carwash','Logo & Identidade Visual','/portfolio/avant-carwash.png',NULL,NULL,20),
('logos','Mecânica Total 3D Power','Logo & Marca','/portfolio/mecanica-total.png',NULL,NULL,30),
('logos','Transvia Logistics','Identidade Corporativa','/portfolio/transvia-logistics.png',NULL,NULL,40),
('logos','SL Beauty','Logo & Design Elegante','/portfolio/sl-beauty.png',NULL,NULL,50),
('logos','República dos Jogos','Logo & Brasão','/portfolio/republica-jogos.png',NULL,NULL,60),
('logos','VetNova Clínica Veterinária','Logo & Marca','/portfolio/vetnova.png',NULL,NULL,70),
('logos','Aurora Centro Termal','Logo & Identidade Visual','/portfolio/aurora.png',NULL,NULL,80),
('logos','Velocycle Hub','Logo & Marca Esportiva','/portfolio/velocycle.png',NULL,NULL,90),
('criativos','Racing Brands TR','Criativo & Animação','/portfolio/criativo-carrossel.png','R$ 350,00','Carrossel animado para redes sociais com até 5 slides',10),
('criativos','Rode Certo - Interface','Criativo & Design de Interface','/portfolio/criativo-interface.png','R$ 500,00','Design de interface completo para aplicativos mobile',20),
('criativos','Rode Certo - Login Seguro','Criativo & Marketing','/portfolio/criativo-login.png','R$ 250,00','Criativo para campanhas de marketing digital',30),
('sites','GramaPremium - Capa Principal','Site & Página de Vendas','/portfolio/gramapremium-hero.png',NULL,NULL,10),
('sites','GramaPremium - Produtos','Site & Loja Virtual','/portfolio/gramapremium-produtos.png',NULL,NULL,20),
('sites','GramaPremium - Galeria','Site & Portfólio','/portfolio/gramapremium-galeria.png',NULL,NULL,30),
('sites','GramaPremium - Rodapé','Site & Contato','/portfolio/gramapremium-footer.png',NULL,NULL,40);
