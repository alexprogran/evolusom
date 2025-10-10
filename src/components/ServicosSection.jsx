import { Car, Home, Shield, Music, Zap, Wrench, Building2 } from 'lucide-react';
import './ServicosSection.css';

const ServicosSection = () => {
  const servicosAutomotivos = [
    {
      icon: <Shield size={32} />,
      titulo: "Películas e Plotagens",
      descricao: "Proteção e personalização com películas de alta qualidade"
    },
    {
      icon: <Music size={32} />,
      titulo: "Som Automotivo",
      descricao: "Instalação de sistemas de som premium e multimídia"
    },
    {
      icon: <Zap size={32} />,
      titulo: "Alarmes e Travas",
      descricao: "Sistemas de segurança, alarmes e vidros elétricos"
    },
    {
      icon: <Wrench size={32} />,
      titulo: "Acessórios",
      descricao: "Variedade de acessórios automotivos de qualidade"
    }
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
          <div className="title-underline"></div>
          <p className="servicos-subtitle">
            Soluções completas para atender todas as suas necessidades
          </p>
        </div>

        <div className="servicos-categoria">
          <div className="categoria-header">
            <Car size={36} className="categoria-icon" />
            <h3 className="categoria-titulo">Automotivo</h3>
          </div>
          <div className="servicos-grid">
            {servicosAutomotivos.map((servico, index) => (
              <div key={index} className="servico-card">
                <div className="servico-icon">{servico.icon}</div>
                <h4 className="servico-titulo">{servico.titulo}</h4>
                <p className="servico-descricao">{servico.descricao}</p>
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
          <div className="servicos-grid">
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
