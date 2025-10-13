import { Shield, Award, Users } from 'lucide-react';
import './SobreSection.css';

const SobreSection = () => { 
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre-header">
        <img 
        src="/logo.png" 
        alt="EvoluSom Logo" 
        className="sobre-logo" 
      />
          {/* <h2 className="section-title">Sobre a Evolu<span className="brand-s">S</span>om</h2> */}
          <div className="title-underline"></div>
        </div>

        <div className="sobre-content">
          <div className="sobre-texto">
            <p className="sobre-paragrafo">
            Há mais de 10 anos oferecemos soluções completas e inovadoras, desde a instalação de películas de proteção
            e sistemas de som até serviços elétricos, instalação de multimídias e acessórios de alta qualidade. Temos uma
            equipe especializada, pronta para lhe atender.
                
            </p>
            

            <div className="sobre-diferenciais">
              <div className="diferencial-card">
                <Shield className="diferencial-icon" size={40} />
                <h3>Garantia</h3>
                <p>Produtos e serviços certificados com garantia </p>
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
              <video
                className="servico-video"
                controls
                muted
                playsInline
                preload="metadata"
                // onLoadedMetadata={(e) => {
                //   const video = e.target;
                //   // Define o tempo desejado do frame (ex: 3 segundos ou 25% da duração)
                //   const tempoDesejado = Math.min(video.duration * 0.97, video.duration - 0.1);
                //   video.currentTime = tempoDesejado;

                //   // Quando o vídeo realmente chega naquele frame
                //   video.onseeked = () => {
                //     video.pause(); // garante que fica pausado
                //   };
                // }}
                >
                <source src="/apresent_1.mp4" type="video/mp4" />
              </video>

            </div> 
          </div>
        </div>
      </div> 
    </section>
  );
};

export default SobreSection;
