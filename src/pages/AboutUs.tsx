import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import robsonImage from "@/assets/robson-prestes.png";
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
              <div className="aspect-[3/4] rounded-2xl overflow-hidden gradient-border">
                <img 
                  src={robsonImage} 
                  alt="Robson Prestes - Fundador da Kaeth" 
                  className="w-full h-full object-cover"
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
                Na Kaeth, transformo minha bagagem de liderança em autoridade para a sua marca, liderando um time focado em tirar sua empresa da caixa e posicioná-la como referência no mercado digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Missão, Visão e Valores</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar negócios através de soluções criativas e estratégicas, entregando designs que convertem em resultados reais para nossos clientes.
              </p>
            </div>

            {/* Visão */}
            <div className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em consultoria criativa digital, reconhecida pela excelência na entrega e pelo impacto positivo na transformação de marcas.
              </p>
            </div>

            {/* Valores */}
            <div className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprometimento, qualidade, transparência, inovação e foco no resultado do cliente são os pilares que guiam todas as nossas entregas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
