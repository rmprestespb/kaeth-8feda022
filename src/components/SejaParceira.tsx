import mascoteParceria from "@/assets/mascote-parceria-sentado.png";

const WHATSAPP_BASE = "https://wa.me/5546999350070?text=";
const waLink = (msg: string) => WHATSAPP_BASE + encodeURIComponent(msg);

const SejaParceira = () => {
  return (
    <section className="kaeth-parceria">
      <style>{`
        .kaeth-parceria { --laranja: #ffa236; --azul: #4db8ff; --tinta: #f1f4fa; --tinta-2: #b3bfd2; --tinta-3: #8d9bb2;
          font-family: Archivo, Helvetica, sans-serif; color: var(--tinta);
          background: radial-gradient(120% 80% at 12% 0%, #10203a 0%, #06080e 55%, #05070c 100%);
          border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,.08); }
        .kaeth-parceria a { text-decoration: none; color: var(--laranja); }
        .kaeth-parceria a:hover { color: var(--azul); }
        .kp-wrap { max-width: 1180px; margin: 0 auto; padding: 0 32px; }
        .kp-mono { font-family: 'IBM Plex Mono', monospace; }

        .kp-hero { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,.95fr); gap: 40px; align-items: center; padding: 48px 32px 72px; }
        .kp-hero h1 { margin: 0; font-size: clamp(38px, 6vw, 62px); font-weight: 900; line-height: 1.02; letter-spacing: -.03em; }
        .kp-hero h1 span { color: var(--laranja); }
        .kp-lead { margin: 0; max-width: 46ch; font-size: 17px; line-height: 1.65; color: #a8b5c9; }
        .kp-tag { display: inline-flex; align-self: flex-start; gap: 10px; padding: 8px 14px; border: 1px solid rgba(255,162,54,.35);
          border-radius: 999px; background: rgba(255,138,31,.08); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #ffb872; }
        .kp-hero-col { display: flex; flex-direction: column; gap: 24px; }
        .kp-mascote { width: 100%; max-width: 470px; height: auto; display: block; margin: 0 auto;
          filter: drop-shadow(0 32px 48px rgba(0,0,0,.6)); }
        .kp-btn { padding: 15px 26px; border-radius: 12px; font-weight: 700; font-size: 15px;
          background: linear-gradient(100deg, #ff8a1f, #ffb457); color: #1a0d00 !important; }
        .kp-btn-ghost { padding: 15px 26px; border-radius: 12px; border: 1px solid rgba(77,184,255,.4); color: #cfe6ff !important; font-weight: 600; font-size: 15px; }
        .kp-metas { display: flex; gap: 32px; font-size: 12px; color: #7f8da3; flex-wrap: wrap; }

        .kp-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px;
          border-bottom: 1px solid rgba(255,255,255,.08); padding-bottom: 20px; margin-bottom: 34px; }
        .kp-head h2 { margin: 0; font-size: 34px; font-weight: 900; letter-spacing: -.02em; }
        .kp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 22px; }
        .kp-card { position: relative; display: flex; flex-direction: column; gap: 20px; padding: 30px 26px 32px;
          border-radius: 20px; border: 1px solid rgba(255,255,255,.16);
          background: linear-gradient(170deg, rgba(24,26,40,.95), rgba(10,12,20,.8));
          transition: transform .18s ease, border-color .18s ease; }
        .kp-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,.42); }
        .kp-card h3 { margin: 0; font-size: 25px; font-weight: 700; letter-spacing: -.01em; }
        .kp-card p { margin: 0; font-size: 14.5px; line-height: 1.6; color: var(--tinta-2); }
        .kp-card .kp-preco { font-size: 32px; font-weight: 900; letter-spacing: -.02em; }
        .kp-card .kp-unidade { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--tinta-3); }
        .kp-card .kp-topo { display: flex; align-items: center; justify-content: space-between; gap: 12px;
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
        .kp-card .kp-chip { width: 30px; height: 30px; border-radius: 8px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.28); }
        .kp-card .kp-cta { margin-top: auto; padding: 13px 18px; border-radius: 11px; text-align: center; font-weight: 700; font-size: 14px; }
        .kp-card--laranja { border-color: rgba(255,162,54,.28); background: linear-gradient(170deg, rgba(28,20,12,.9), rgba(8,10,16,.75)); box-shadow: 0 24px 60px -32px rgba(255,138,31,.5); }
        .kp-card--laranja .kp-topo, .kp-card--laranja .kp-preco { color: var(--laranja); }
        .kp-card--laranja .kp-cta { background: rgba(255,138,31,.14); border: 1px solid rgba(255,162,54,.4); color: #ffc48c !important; }
        .kp-card--azul { border-color: rgba(77,184,255,.32); background: linear-gradient(170deg, rgba(12,26,44,.92), rgba(8,10,16,.75)); box-shadow: 0 24px 60px -32px rgba(77,184,255,.45); }
        .kp-card--azul .kp-topo, .kp-card--azul .kp-preco { color: var(--azul); }
        .kp-card--azul .kp-cta { background: rgba(77,184,255,.14); border: 1px solid rgba(77,184,255,.45); color: #b9e2ff !important; }
        .kp-card--destaque .kp-cta { background: linear-gradient(100deg, #ff8a1f, #ffb457); color: #1a0d00 !important; }
        .kp-selo { position: absolute; top: -12px; left: 26px; padding: 5px 12px; border-radius: 999px;
          background: linear-gradient(100deg, #ff8a1f, #4db8ff); color: #08101c;
          font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }

        .kp-nego { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px;
          margin: 64px 32px 56px; padding: 38px 40px; border-radius: 22px; border: 1px solid rgba(255,162,54,.3);
          background: linear-gradient(100deg, rgba(255,138,31,.1), rgba(77,184,255,.08)); }
        .kp-nego h2 { margin: 0; font-size: 40px; font-weight: 900; line-height: 1.05; letter-spacing: -.02em; }
        .kp-nego a { padding: 17px 30px; border-radius: 13px; background: #f1f4fa; color: #0b0f18 !important; font-weight: 900; font-size: 16px; }

        @media (max-width: 860px) {
          .kp-hero { grid-template-columns: 1fr; }
          .kp-metas { flex-wrap: wrap; gap: 16px; }
          .kp-nego { margin-left: 16px; margin-right: 16px; padding: 28px; }
        }
      `}</style>

      <div className="kp-wrap kp-hero">
        <div className="kp-hero-col">
          <span className="kp-tag kp-mono">Programa de parceria</span>
          <h1>
            Seja parceira
            <br />
            da <span>Kaeth</span>
          </h1>
          <p className="kp-lead">
            Criação 3D, manipulação e tratamento de imagem para social media.
            Escolha a modalidade que encaixa no seu volume: arte avulsa, lote
            fechado ou fechamento mensal recorrente.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a className="kp-btn" href="#valores-parceria">
              Ver faixas de valor
            </a>
            <a
              className="kp-btn-ghost"
              href={waLink("Olá! Quero saber mais sobre o programa de parceria da Kaeth.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a equipe
            </a>
          </div>
          <div className="kp-metas kp-mono">
            <span>3 modalidades</span>
            <span>Valor negociável</span>
            <span>Entrega em lote ou mensal</span>
          </div>
        </div>
        <div>
          <img
            className="kp-mascote"
            src={mascoteParceria}
            alt="Mascote TH da Agência Kaeth"
          />
        </div>
      </div>

      <div className="kp-wrap" id="valores-parceria">
        <div className="kp-head">
          <h2>Faixas de valor recomendadas</h2>
          <span
            className="kp-mono"
            style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#7f8da3" }}
          >
            Modalidade · Faixa · Contexto
          </span>
        </div>

        <div className="kp-grid">
          <article className="kp-card kp-card--laranja">
            <div className="kp-topo">
              <span>Unidade</span>
              <span className="kp-chip" />
            </div>
            <h3>Arte Avulsa</h3>
            <div>
              <div className="kp-preco">R$ 90 – R$ 150</div>
              <div className="kp-unidade">por arte</div>
            </div>
            <p>
              Cobrança por unidade em criações pontuais com esse nível de
              acabamento (3D, manipulação e tratamento).
            </p>
            <a
              className="kp-cta"
              href={waLink("Olá! Quero solicitar uma arte avulsa (3D/manipulação).")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar arte
            </a>
          </article>

          <article className="kp-card kp-card--azul">
            <div className="kp-topo">
              <span>Lote</span>
              <span className="kp-chip" />
            </div>
            <h3>Pacote de 5 Artes</h3>
            <div>
              <div className="kp-preco">R$ 350 – R$ 500</div>
              <div className="kp-unidade">pelo lote fechado</div>
            </div>
            <p>
              Valor cobrado pelo conjunto completo aproveitando a mesma
              estrutura de layout e variações de fundo/veículo.
            </p>
            <a
              className="kp-cta"
              href={waLink("Olá! Quero fechar o pacote de 5 artes.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fechar lote
            </a>
          </article>

          <article className="kp-card kp-card--destaque">
            <span className="kp-selo">Recorrente</span>
            <div className="kp-topo">
              <span>Social media</span>
              <span className="kp-chip" />
            </div>
            <h3>Fechamento Mensal</h3>
            <div>
              <div className="kp-preco">R$ 800 – R$ 1.400</div>
              <div className="kp-unidade">por mês</div>
            </div>
            <p>
              Pacote recorrente (ex: 8 a 12 artes/mês + variações para
              Stories/Feeds).
            </p>
            <a
              className="kp-cta"
              href={waLink("Olá! Quero assinar o fechamento mensal de artes para social media.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Assinar mensal
            </a>
          </article>
        </div>

        <div className="kp-nego">
          <div style={{ minWidth: 260 }}>
            <h2>
              VALOR
              <br />
              NEGOCIÁVEL
            </h2>
            <p style={{ margin: "10px 0 0", maxWidth: "42ch", fontSize: 15, lineHeight: 1.6, color: "#b3bfd2" }}>
              Volume, prazo e complexidade ajustam a faixa. Manda o briefing e
              a gente fecha o escopo junto.
            </p>
          </div>
          <a
            href={waLink("Olá! Gostaria de pedir um orçamento para o programa de parceria da Kaeth.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default SejaParceira;
