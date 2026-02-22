import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import robsonImage from "@/assets/robson-oficial.jpeg";
import { Target, Eye, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Quem Somos</span>
          </h1>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            Conheça a história por trás da Kaeth e nossa paixão por transformar marcas.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden gradient-border">
                <img 
                  src={robsonImage} 
                  alt="Robson Prestes - Fundador da Kaeth" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-bg rounded-full opacity-20 blur-2xl" />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Robson Prestes</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Meu nome é Robson Prestes e minha trajetória sempre foi pautada pela gestão de projetos e pela liderança de equipes. Após anos à frente de operações complexas e coordenação estratégica, percebi que era o momento de aplicar essa expertise em um projeto próprio, onde a qualidade e a entrega técnica caminhassem lado a lado com a visão de negócio.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <span className="text-foreground font-semibold">Assim nasceu a Kaeth.</span>
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundei a agência não apenas para criar designs, mas para oferecer uma consultoria criativa que entende as dores do empreendedor. Minha experiência como líder me ensinou que um projeto só é bem-sucedido quando une organização, cumprimento de prazos e um resultado visual que realmente converte em lucro para o cliente.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Na Kaeth, transformo minha trajetória de liderança na autoridade que a sua marca precisa. Com um time especialista, tiramos sua empresa do comum para posicioná-la como referência no digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia e Propósito */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="gradient-text">Transformando Dados em Arte e Design em Resultados</span>
          </h2>
          
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Na KAETH, acreditamos que a presença digital de uma empresa deve ser tão inteligente quanto bonita. Somos uma agência híbrida que nasceu da necessidade de unir dois mundos que raramente caminham juntos: a criatividade visual de alto impacto e a precisão da inteligência de dados.
          </p>

          {/* Nossa Filosofia */}
          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Nossa Filosofia</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-4xl mx-auto mb-4">
              Não entregamos apenas um logotipo ou um site; entregamos a identidade que sua empresa precisa para se destacar e a infraestrutura digital para converter visitantes em clientes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Com nossa expertise em Power BI, fechamos o ciclo do crescimento, permitindo que você visualize seus resultados com clareza e tome decisões baseadas em fatos, não em palpites.
            </p>
          </div>
          
          {/* O que nos move */}
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">O que nos move</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Design com Propósito */}
            <div className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold">Design com Propósito</h4>
              <p className="text-muted-foreground leading-relaxed">
                Criamos marcas e interfaces que comunicam autoridade e profissionalismo instantâneo.
              </p>
            </div>

            {/* Tecnologia de Conversão */}
            <div className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold">Tecnologia de Conversão</h4>
              <p className="text-muted-foreground leading-relaxed">
                Nossos sites são projetados para serem rápidos, responsivos e focados na jornada do usuário.
              </p>
            </div>

            {/* Cultura de Dados */}
            <div className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold">Cultura de Dados</h4>
              <p className="text-muted-foreground leading-relaxed">
                Transformamos o caos de informações do seu negócio em dashboards estratégicos que mostram o caminho para o próximo nível.
              </p>
            </div>
          </div>

          {/* Frase de fechamento */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold italic">
              Na KAETH, nós não apenas criamos o que o mundo vê;{" "}
              <span className="gradient-text">nós organizamos o que o seu negócio sente.</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
