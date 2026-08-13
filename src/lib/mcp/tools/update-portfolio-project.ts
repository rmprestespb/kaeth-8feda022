import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "update_portfolio_project",
  title: "Atualizar projeto do portfólio",
  description:
    "Atualiza campos de um projeto existente do portfólio, como título, preço, descrição ou imagem (requer conta de administrador).",
  inputSchema: {
    id: z.string().uuid().describe("ID do projeto a atualizar."),
    title: z.string().trim().min(1).optional(),
    category: z.string().trim().min(1).optional(),
    category_label: z.string().trim().min(1).optional(),
    image_url: z.string().url().optional(),
    description: z.string().trim().optional(),
    price: z.string().trim().optional(),
    sort_order: z.number().int().min(0).optional(),
  },
  annotations: { readOnlyHint: false, destructiveHint: true, openWorldHint: false },
  handler: async ({ id, ...fields }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Não autenticado." }], isError: true };
    }
    const patch = Object.fromEntries(
      Object.entries(fields).filter(([, value]) => value !== undefined),
    );
    if (Object.keys(patch).length === 0) {
      return { content: [{ type: "text", text: "Nenhum campo para atualizar." }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("portfolio_projects")
      .update(patch)
      .eq("id", id)
      .select()
      .maybeSingle();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    if (!data) {
      return { content: [{ type: "text", text: "Projeto não encontrado ou sem permissão." }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data) }],
      structuredContent: { project: data },
    };
  },
});
