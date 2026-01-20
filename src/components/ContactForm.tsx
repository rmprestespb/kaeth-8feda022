import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\(\)\+]+$/.test(val),
      "Telefone inválido"
    ),
  service: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "post-estatico", label: "Post Estático" },
  { value: "carrossel", label: "Carrossel" },
  { value: "combo-mensal", label: "Combo Mensal" },
  { value: "dashboard", label: "Dashboard" },
  { value: "logo", label: "Logo / Identidade Visual" },
  { value: "site", label: "Site / Landing Page" },
  { value: "outro", label: "Outro" },
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("contacts").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        message: data.message,
      });

      if (error) throw error;

      setSubmitStatus("success");
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solicite seu <span className="text-primary">Orçamento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato o mais rápido possível
            para discutir seu projeto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone / WhatsApp</Label>
                <Input
                  id="phone"
                  placeholder="(11) 99999-9999"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Serviço de Interesse</Label>
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                placeholder="Descreva seu projeto ou necessidade..."
                rows={5}
                {...register("message")}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : submitStatus === "success" ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Mensagem Enviada!
                </>
              ) : submitStatus === "error" ? (
                <>
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Tentar Novamente
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Ao enviar, você concorda com nossa política de privacidade.
              Seus dados estão protegidos e não serão compartilhados.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
