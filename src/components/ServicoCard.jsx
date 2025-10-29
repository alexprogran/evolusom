import React, { useState, useRef, useEffect } from 'react';
import './ServicoCard.css';

const ServicoCard = ({ titulo, texto, imagem, video }) => {
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const videoRef = useRef(null);

  const handleSaibaMais = () => setMostrarVideo(true);
  const handleVideoEnd = () => setMostrarVideo(false);

  useEffect(() => {
    if (mostrarVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [mostrarVideo]);

  return (
    <div className="servico-card">
      <div className="servico-content">
        
        {/* Coluna 1 - Imagem/Vídeo */}
        <div className="servico-midia">
          {!mostrarVideo ? (
            <img src={imagem} alt={titulo} className="servico-imagem" />
          ) : (
            <video
              ref={videoRef}
              className="servico-video"
              onEnded={handleVideoEnd}
              controls
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          )}
        </div>

        {/* Coluna 2 - Texto */}
        <div className="servico-texto">
          <h3 className="servico-titulo">{titulo}</h3>
          <p className="servico-descricao">{texto}</p>
        </div>

        {/* Coluna 3 - Botão */}
        <div className="servico-btn-area">
          <button className="servico-btn" onClick={handleSaibaMais}>
            Saiba +
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServicoCard;
