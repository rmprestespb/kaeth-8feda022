import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_contacts",
  title: "Listar mensagens de contato",
  description:
    "Lista as mensagens recebidas pelo formulário de contato do site (requer conta de administrador).",
  inputSchema: {
    limit: z.number().int().min(1).max(100).default(20).describe("Quantidade máxima de mensagens."),
    search: z.string().trim().min(1).optional().describe("Filtro por nome ou e-mail."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, search }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Não autenticado." }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("contacts")
      .select("id,name,email,phone,service,message,created_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 20);
    if (search) query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? []) }],
      structuredContent: { contacts: data ?? [] },
    };
  },
});
