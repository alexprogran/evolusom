import { Shield, Award, Users } from 'lucide-react';
import './SobreSection.css';

const SobreSection = () => { 
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre-header">
          <h2 className="section-title">Sobre a Evolu<span className="brand-s">S</span>om</h2>
          <div className="title-underline"></div>
        </div>

        <div className="sobre-content">
          <div className="sobre-texto">
            <p className="sobre-paragrafo">
              Com mais de 10 anos de experiência no mercado, a <strong><span className="brand">evolusom</span></strong> é referência em qualidade,
              tecnologia e atendimento personalizado. Nosso compromisso é elevar o padrão de conforto
              e segurança em cada projeto automotivo, residencial e empresarial.
            </p>
            <p className="sobre-paragrafo">
              Oferecemos soluções completas e inovadoras, desde a instalação de películas de proteção
              e sistemas de som até serviços elétricos, instalação de multimídias e acessórios de alta qualidade. Nossa equipe
              especializada trabalha com dedicação para transformar seu espaço e veículo.
            </p>

            <div className="sobre-diferenciais">
              <div className="diferencial-card">
                <Shield className="diferencial-icon" size={40} />
                <h3>Garantia de Qualidade</h3>
                <p>Produtos e serviços certificados com garantia estendida</p>
              </div>
              <div className="diferencial-card">
                <Award className="diferencial-icon" size={40} />
                <h3>Excelência</h3>
                <p>Reconhecidos pela qualidade e profissionalismo</p>
              </div>
              <div className="diferencial-card">
                <Users className="diferencial-icon" size={40} />
                <h3>Atendimento Premium</h3>
                <p>Equipe qualificada e atendimento personalizado</p>
              </div>
            </div>
          </div>

          <div className="sobre-video">
            <div className="video-wrapper">
            <video className="sobre-video-player" controls preload="metadata" playsInline>
              <source src="/apresent_1.mp4" type="video/mp4" />
              <source src="/quem_somos.MOV" type="video/quicktime" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
