import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Pencil, Trash2, Upload, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Category = "dashboards" | "logos" | "criativos" | "sites";

interface Project {
  id: string;
  category: Category;
  title: string;
  category_label: string;
  image_url: string;
  price: string | null;
  description: string | null;
  sort_order: number;
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "dashboards", label: "Dashboards" },
  { value: "logos", label: "Logos" },
  { value: "criativos", label: "Criativos" },
  { value: "sites", label: "Sites" },
];

const emptyForm = {
  category: "dashboards" as Category,
  title: "",
  category_label: "",
  image_url: "",
  price: "",
  description: "",
  sort_order: 0,
};

const AdminPortfolio = () => {
  const { user, isAdmin, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [filter, setFilter] = useState<Category | "all">("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) navigate("/admin/login");
  }, [user, isAdmin, isLoading, navigate]);

  const loadProjects = async () => {
    setLoadingList(true);
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("category")
      .order("sort_order");
    if (error) {
      toast({ title: "Erro ao carregar", description: error.message, variant: "destructive" });
    } else {
      setProjects((data ?? []) as Project[]);
    }
    setLoadingList(false);
  };

  useEffect(() => {
    if (user && isAdmin) loadProjects();
  }, [user, isAdmin]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (p: Project) => {
    setEditing(p);
    setForm({
      category: p.category,
      title: p.title,
      category_label: p.category_label,
      image_url: p.image_url,
      price: p.price ?? "",
      description: p.description ?? "",
      sort_order: p.sort_order,
    });
    setDialogOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("portfolio-images")
        .upload(path, file, { cacheControl: "3600", upsert: false });
      if (upErr) throw upErr;

      // Private bucket → use long-lived signed URL (~100 years)
      const { data: signed, error: signErr } = await supabase.storage
        .from("portfolio-images")
        .createSignedUrl(path, 60 * 60 * 24 * 365 * 100);
      if (signErr) throw signErr;

      setForm((f) => ({ ...f, image_url: signed.signedUrl }));
      toast({ title: "Imagem enviada!" });
    } catch (e: any) {
      toast({ title: "Erro no upload", description: e.message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.category_label.trim() || !form.image_url.trim()) {
      toast({ title: "Preencha título, categoria e imagem", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = {
      category: form.category,
      title: form.title.trim(),
      category_label: form.category_label.trim(),
      image_url: form.image_url.trim(),
      price: form.price.trim() || null,
      description: form.description.trim() || null,
      sort_order: Number(form.sort_order) || 0,
    };
    const { error } = editing
      ? await supabase.from("portfolio_projects").update(payload).eq("id", editing.id)
      : await supabase.from("portfolio_projects").insert(payload);
    setSaving(false);
    if (error) {
      toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: editing ? "Projeto atualizado!" : "Projeto criado!" });
    setDialogOpen(false);
    loadProjects();
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("portfolio_projects").delete().eq("id", deleteId);
    setDeleteId(null);
    if (error) {
      toast({ title: "Erro ao excluir", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Projeto excluído" });
    loadProjects();
  };

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-3 transition-colors text-sm"
            >
              <ArrowLeft size={16} /> Voltar ao painel
            </Link>
            <h1 className="text-3xl font-bold gradient-text">Gerenciar Portfólio</h1>
            <p className="text-muted-foreground mt-1">
              Adicione, edite e remova projetos exibidos no site.
            </p>
          </div>
          <Button onClick={openCreate} className="gradient-bg text-primary-foreground">
            <Plus size={18} className="mr-2" /> Novo projeto
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === "all" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            Todos ({projects.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = projects.filter((p) => p.category === c.value).length;
            return (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === c.value ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label} ({count})
              </button>
            );
          })}
        </div>

        {loadingList ? (
          <div className="text-center py-16 text-muted-foreground">
            <Loader2 className="animate-spin inline mr-2" /> Carregando...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            Nenhum projeto encontrado.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="glass-card rounded-xl overflow-hidden group">
                <div className="aspect-[3/2] bg-muted overflow-hidden">
                  <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-medium uppercase">{p.category}</span>
                  <h3 className="font-semibold mt-1 truncate">{p.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{p.category_label}</p>
                  {p.price && <p className="text-sm text-primary mt-1">{p.price}</p>}
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="secondary" onClick={() => openEdit(p)} className="flex-1">
                      <Pencil size={14} className="mr-1" /> Editar
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => setDeleteId(p.id)}>
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Editor Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar projeto" : "Novo projeto"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select value={form.category} onValueChange={(v: Category) => setForm({ ...form, category: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Ordem de exibição</Label>
                <Input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Título *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} maxLength={200} />
            </div>

            <div className="space-y-2">
              <Label>Rótulo da categoria * (ex: "Dashboard & BI")</Label>
              <Input
                value={form.category_label}
                onChange={(e) => setForm({ ...form, category_label: e.target.value })}
                maxLength={200}
              />
            </div>

            <div className="space-y-2">
              <Label>Imagem *</Label>
              {form.image_url && (
                <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden bg-muted mb-2">
                  <img src={form.image_url} alt="preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, image_url: "" })}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 hover:bg-background"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2">
                <label className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleImageUpload(f);
                      e.target.value = "";
                    }}
                    disabled={uploading}
                  />
                  <div className="flex items-center justify-center gap-2 border border-dashed border-border rounded-lg py-3 cursor-pointer hover:bg-card transition-colors">
                    {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                    <span className="text-sm">
                      {uploading ? "Enviando..." : "Enviar imagem do computador"}
                    </span>
                  </div>
                </label>
              </div>
              <Input
                placeholder="Ou cole a URL da imagem"
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              />
            </div>

            {form.category === "criativos" && (
              <>
                <div className="space-y-2">
                  <Label>Preço (ex: R$ 350,00)</Label>
                  <Input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} maxLength={50} />
                </div>
                <div className="space-y-2">
                  <Label>Descrição</Label>
                  <Textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    maxLength={500}
                    rows={3}
                  />
                </div>
              </>
            )}
          </div>

          <DialogFooter>
            <Button variant="secondary" onClick={() => setDialogOpen(false)} disabled={saving}>
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={saving || uploading} className="gradient-bg text-primary-foreground">
              {saving ? "Salvando..." : editing ? "Atualizar" : "Criar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir projeto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. O projeto será removido do site imediatamente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminPortfolio;
