import { Home, Shield, Music, Zap, Building2, Monitor, ShoppingBag, Plug, Volume2, Lightbulb } from 'lucide-react';
import ServicoCard from './ServicoCard';
import './ServicosSection.css';

const ServicosSection = () => {
  const abrirWhatsApp = (servico) => {
    const mensagem = `Olá! Gostaria de solicitar um orçamento para o serviço: ${servico}`;
    const url = `https://wa.me/557130405086?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const servicosAutomotivos = [
    {
      icon: <Shield size={32} />,
      titulo: "Instalação de Película",
      descricao: "Películas de alta qualidade",
      video: "/aplic_pelicula2.mp4"
    },
      // video: "/install_vidros.mp4"
    
    {
      icon: <Lightbulb size={32} />,
      titulo: "leds X Ulta Treme White",
      descricao: "Leds de alta qualidade para seu carro",
      video: "/product_led1.mp4"
    },
    {
      icon: <Monitor size={32} />,
      titulo: "Instalação de Multimídia",
      descricao: "Os melhores sistemas de multimídia",
      video: "/antes_depois_multimidia1.mp4"
    },
    {
      icon: <ShoppingBag size={32} />,
      titulo: "Som e acessórios",
      descricao: "Confira nossa variedade de acessórios",
      video: "/hero_vd.mp4"
    },
    {
      icon: <Zap size={32} />,
      titulo: "Elétrica",
      descricao: "Instalações elétricas especializadas",
      video: "/install_eletric.mp4"
    },
    {
      icon: <Volume2 size={32} />,
      titulo: "Som",
      descricao: "Instalações de som especializadas",
      video: "/install_som.mp4"
    },
  ];

  const servicosResidencial = [
    {
      icon: <Shield size={32} />,
      titulo: "Películas",
      descricao: "Películas residenciais e empresariais para conforto térmico"
    },
    {
      icon: <Music size={32} />,
      titulo: "Som Ambiente",
      descricao: "Projetos de som ambiente para residências e empresas"
    },
    {
      icon: <Zap size={32} />,
      titulo: "Instalações Elétricas", 
      descricao: "Serviços elétricos especializados e seguros"
    }
  ];

  return ( 
    <section id="servicos" className="servicos">
      <div className="container">
        <div className="servicos-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="sobre-title-underline"></div>
          <p className="servicos-subtitle">
            Soluções completas para atender todas as suas necessidades
          </p>
        </div>

        {/* Exemplos de uso do ServicoCard */}
        <div className="servicos-cards-container">
          <ServicoCard
            titulo="Instalação de Película Premium"
            texto="Oferecemos um serviço de instalação de películas automotivas de alta qualidade, com acabamento impecável e proteção superior contra raios UV e calor. Nossas películas são certificadas e garantem durabilidade excepcional."
            imagem="/img_evolusom_capa_video.webp"
            video="/aplic_pelicula2.mp4"
          />
          
          <ServicoCard
            titulo="Sistemas de Som Automotivo"
            texto="Recuperamos e instalamos sistemas de som com técnicas modernas que preservam a qualidade original do veículo, devolvendo potência sonora e clareza excepcionais para uma experiência musical única."
            imagem="/img_evolusom_capa_video.webp"
            video="/install_som.mp4"
          />
          
          <ServicoCard
            titulo="Instalações Elétricas Especializadas"
            texto="Realizamos instalações elétricas automotivas com segurança e precisão, utilizando equipamentos de última geração e técnicas profissionais que garantem funcionamento perfeito e durabilidade."
            imagem="/img_evolusom_capa_video.webp"
            video="/install_eletric.mp4"
          />
        </div>

        {/* <div className="servicos-categoria">          
          <div className="servicos-all-cards">
            {servicosAutomotivos.map((servico, index) => (
              <div key={index} className="servico-card">
                <div className="servico-icon">{servico.icon}</div>
                <h4 className="servico-titulo">{servico.titulo}</h4>
                <p className="servico-descricao">{servico.descricao}</p>
                {servico.video && (
                  <div className="servico-video-container">                   
                    <video
                      className="servico-video"
                      controls
                      muted
                      playsInline
                      preload="metadata"                   
                      >
                      <source src={servico.video} type="video/mp4" />
                    </video>

                  </div>
                )}
                <button 
                  className="servico-btn"
                  onClick={() => abrirWhatsApp(servico.titulo)}
                >
                  Faça seu orçamento
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="servicos-categoria">
          <div className="categoria-header">
            <div className="categoria-icons">
              <Home size={36} className="categoria-icon" />
              <Building2 size={36} className="categoria-icon" />
            </div>
            <h3 className="categoria-titulo">Residencial / Empresarial</h3>
          </div>
          <div className="servicos-all-cards">
            {servicosResidencial.map((servico, index) => (
              <div key={index} className="servico-card">
                <div className="servico-icon">{servico.icon}</div>
                <h4 className="servico-titulo">{servico.titulo}</h4>
                <p className="servico-descricao">{servico.descricao}</p>
                <button 
                  className="servico-btn"
                  onClick={() => abrirWhatsApp(servico.titulo)}
                >
                  Faça seu orçamento
                </button>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicosSection;
