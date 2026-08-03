import { useEffect } from "react";
import type { Modelo } from "@/data/modelos";

const SITE = "https://www.kaeth.com.br";

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.dataset.demoSeo = "1";
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/** SEO por rota de demonstração: title, description, Open Graph, canonical e Schema.org. */
export const useDemoSeo = (modelo: Modelo) => {
  useEffect(() => {
    const url = `${SITE}/modelos/${modelo.slug}`;
    const title = `${modelo.nome} — Modelo de site para ${modelo.categoria} | Kaeth`;
    const description = `${modelo.descricao} Demonstração completa do modelo ${modelo.nome} da Agência Kaeth. Tenha um site igual por R$ 99,90/mês.`;

    const prevTitle = document.title;
    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"][data-demo-seo]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.dataset.demoSeo = "1";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.dataset.demoSeo = "1";
    ld.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: modelo.empresa,
        description: modelo.sobre,
        url,
        address: { "@type": "PostalAddress", streetAddress: modelo.endereco, addressCountry: "BR" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "350" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Modelos Premium", item: `${SITE}/modelos` },
          { "@type": "ListItem", position: 3, name: modelo.nome, item: url },
        ],
      },
    ]);
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      ld.remove();
      canonical?.remove();
    };
  }, [modelo]);
};

export default useDemoSeo;
