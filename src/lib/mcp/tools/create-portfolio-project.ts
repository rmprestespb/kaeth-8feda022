import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "create_portfolio_project",
  title: "Criar projeto no portfólio",
  description:
    "Cria um novo projeto no portfólio do site (requer conta de administrador). A imagem deve ser uma URL pública.",
  inputSchema: {
    title: z.string().trim().min(1).describe("Título do projeto."),
    category: z.string().trim().min(1).describe("Slug da categoria (ex.: criativos)."),
    category_label: z.string().trim().min(1).describe("Nome exibido da categoria."),
    image_url: z.string().url().describe("URL pública da imagem de capa."),
    description: z.string().trim().min(1).optional().describe("Descrição do projeto."),
    price: z.string().trim().min(1).optional().describe("Preço exibido (texto livre)."),
    sort_order: z.number().int().min(0).optional().describe("Ordem de exibição."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Não autenticado." }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("portfolio_projects")
      .insert({
        title: input.title,
        category: input.category,
        category_label: input.category_label,
        image_url: input.image_url,
        description: input.description ?? null,
        price: input.price ?? null,
        ...(input.sort_order === undefined ? {} : { sort_order: input.sort_order }),
      })
      .select()
      .single();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data) }],
      structuredContent: { project: data },
    };
  },
});
