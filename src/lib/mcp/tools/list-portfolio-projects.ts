import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_portfolio_projects",
  title: "Listar projetos do portfólio",
  description: "Lista os projetos do portfólio do site, opcionalmente filtrados por categoria.",
  inputSchema: {
    category: z.string().trim().min(1).optional().describe("Slug da categoria (ex.: criativos)."),
    limit: z.number().int().min(1).max(100).default(50).describe("Quantidade máxima de projetos."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ category, limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Não autenticado." }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("portfolio_projects")
      .select("id,title,category,category_label,description,price,image_url,sort_order,updated_at")
      .order("sort_order", { ascending: true })
      .limit(limit ?? 50);
    if (category) query = query.eq("category", category);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? []) }],
      structuredContent: { projects: data ?? [] },
    };
  },
});
