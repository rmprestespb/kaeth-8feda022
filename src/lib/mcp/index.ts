import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listContactsTool from "./tools/list-contacts";
import listPortfolioProjectsTool from "./tools/list-portfolio-projects";
import createPortfolioProjectTool from "./tools/create-portfolio-project";
import updatePortfolioProjectTool from "./tools/update-portfolio-project";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "agencia-kaeth",
  title: "Agência Kaeth",
  version: "0.1.0",
  instructions:
    "Ferramentas da Agência Kaeth. Use `list_contacts` para ler mensagens do formulário de contato e `list_portfolio_projects`, `create_portfolio_project` e `update_portfolio_project` para gerenciar o portfólio do site. Todas as ações rodam como o usuário conectado.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listContactsTool,
    listPortfolioProjectsTool,
    createPortfolioProjectTool,
    updatePortfolioProjectTool,
  ],
});
