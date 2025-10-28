import { useState } from 'react';
import { Shield, Award, Users, PlayCircle } from 'lucide-react';
import './SobreSection.css';

const SobreSection = () => {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const handleAssistirVideo = () => {
    setMostrarVideo(true);
  };

  const handleVideoEnded = () => {
    setMostrarVideo(false);
  };
  
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        {/* Vídeo para mobile - aparece no topo */}
        <div className="sobre-video-mobile">
          {!mostrarVideo ? (
            <div className="video-cover">
              <img 
                src="/img_loja.png" 
                alt="EvoluSom Loja" 
                className="video-cover-image"
              />
              <div className="video-cover-content">
                {/* <p className="video-cover-text">Saiba mais sobre a EvoluSom</p> */}
                <button 
                  className="video-play-button"
                  onClick={handleAssistirVideo}
                >
                  <PlayCircle size={24} />
                  {/* Assista o vídeo */}
                </button>
              </div>
            </div>
          ) : (
            <div className="video-wrapper">            
              <video
                className="servico-video"
                controls
                controlsList="nofullscreen nodownload noremoteplayback"
                autoPlay
                muted
                playsInline
                preload="metadata"
                onEnded={handleVideoEnded}
              >
                <source src="/apresent_1.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        <div className="sobre-header">
          <img 
            src="/logo.png"  
            alt="EvoluSom Logo" 
            className="sobre-logo" 
          />
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
            {!mostrarVideo ? (
              <div className="video-cover">
                <img 
                  src="/img_loja.png" 
                  alt="EvoluSom Loja" 
                  className="video-cover-image"
                />
                <div className="video-cover-content">
                  <p className="video-cover-text">Saiba mais sobre a EvoluSom</p>
                  <button 
                    className="video-play-button"
                    onClick={handleAssistirVideo}
                  >
                    <PlayCircle size={24} />
                    Assista o vídeo
                  </button>
                </div>
              </div>
            ) : (
              <div className="video-wrapper">            
                <video
                  className="servico-video"
                  controls
                  controlsList="nofullscreen nodownload noremoteplayback"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnded}
                >
                  <source src="/apresent_1.mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
      </div> 
    </section>
  );
};

export default SobreSection;
