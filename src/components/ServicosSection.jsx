import { Car, Home, Shield, Music, Zap, Wrench, Building2 } from 'lucide-react';
import './ServicosSection.css';

const ServicosSection = () => {
  const servicosAutomotivos = [
    {
      icon: <Shield size={32} />,
      titulo: "Instalação de Película",
      descricao: "Proteção e personalização com películas de alta qualidade",
      video: "/install_vidros.mp4"
    },
    {
      icon: <Shield size={32} />,
      titulo: "leds X Ulta Treme White",
      descricao: "Proteção e personalização com películas de alta qualidade",
      video: "/product_led1.mp4"
    },
    {
      icon: <Shield size={32} />,
      titulo: "Instalação de Multimídia",
      descricao: "Proteção e personalização com películas de alta qualidade",
      video: "/antes_depois_multimidia1.mp4"
    },{
      icon: <Shield size={32} />,
      titulo: "Instalação de Película de Proteção",
      descricao: "Proteção e personalização com películas de alta qualidade",
      video: "/apresent_1.mp4"
    },
    {
      icon: <Shield size={32} />,
      titulo: "Instalação de Película de Proteção",
      descricao: "Proteção e personalização com películas de alta qualidade",
      video: "/apresent_1.mp4"
    },
    {
      icon: <Shield size={32} />,
      titulo: "Instalação de Película de Proteção",
      descricao: "Proteção e personalização com películas de alta qualidade",
      video: "/apresent_1.mp4"
    },
    // {
    //   icon: <Music size={32} />,
    //   titulo: "Som Automotivo",
    //   descricao: "Instalação de sistemas de som premium e multimídia"
    // },
    // {
    //   icon: <Zap size={32} />,
    //   titulo: "Alarmes e Travas",
    //   descricao: "Sistemas de segurança, alarmes e vidros elétricos"
    // },
    // {
    //   icon: <Wrench size={32} />,
    //   titulo: "Acessórios",
    //   descricao: "Variedade de acessórios automotivos de qualidade"
    // }
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

        <div className="servicos-categoria">
          <div className="categoria-header">
            <Car size={36} className="categoria-icon" />
            <h3 className="categoria-titulo">Confira nossos serviços</h3>
          </div>
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
                      onLoadedMetadata={(e) => {
                        const video = e.target;
                        video.currentTime = video.duration; // vai direto para o último frame
                      }}
                      >
                      <source src={servico.video} type="video/mp4" />
                    </video>

                  </div>
                )}
                <button className="servico-btn">Saiba mais</button>
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
                <button className="servico-btn">Saiba mais</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
