import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import './AvaliacaoSection.css';

const AvaliacaoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const avaliacoes = [
    {
      nome: "João Silva",
      foto: "https://ui-avatars.com/api/?name=Joao+Silva&background=24A043&color=fff&size=80",
      avaliacao: 5,
      comentario: "Excelente atendimento! Instalaram película no meu carro com muita qualidade e profissionalismo. Super recomendo!",
      data: "Há 2 semanas"
    },
    {
      nome: "Maria Santos",
      foto: "https://ui-avatars.com/api/?name=Maria+Santos&background=24A043&color=fff&size=80",
      avaliacao: 5,
      comentario: "Fizeram a instalação do som do meu carro. Ficou perfeito! Equipe atenciosa e preço justo. Voltarei com certeza.",
      data: "Há 1 mês"
    },
    {
      nome: "Carlos Oliveira",
      foto: "https://ui-avatars.com/api/?name=Carlos+Oliveira&background=24A043&color=fff&size=80",
      avaliacao: 5,
      comentario: "Melhor lugar para instalação de multimídia! Trabalho impecável e entrega no prazo. Muito satisfeito!",
      data: "Há 3 semanas"
    },
    {
      nome: "Ana Paula",
      foto: "https://ui-avatars.com/api/?name=Ana+Paula&background=24A043&color=fff&size=80",
      avaliacao: 5,
      comentario: "Instalaram LEDs no meu carro e ficou incrível! Atendimento nota 10 e resultado surpreendente.",
      data: "Há 1 semana"
    },
    {
      nome: "Ricardo Souza",
      foto: "https://ui-avatars.com/api/?name=Ricardo+Souza&background=24A043&color=fff&size=80",
      avaliacao: 5,
      comentario: "Serviço de elétrica automotiva excelente. Resolveram meu problema rapidamente. Recomendo demais!",
      data: "Há 2 meses"
    },
    {
      nome: "Fernanda Lima",
      foto: "https://ui-avatars.com/api/?name=Fernanda+Lima&background=24A043&color=fff&size=80",
      avaliacao: 5,
      comentario: "Atendimento excepcional! Instalaram película residencial em minha casa. Ficou perfeito e diminuiu muito o calor.",
      data: "Há 1 mês"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? avaliacoes.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        fill={index < rating ? "#24A043" : "none"}
        stroke={index < rating ? "#24A043" : "#d1d5db"}
      />
    ));
  };

  return (
    <section id="avaliacoes" className="avaliacoes">
      <div className="container">
        <div className="avaliacoes-header">
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <div className="avaliacoes-title-underline"></div>
          <p className="avaliacoes-subtitle">
           A satisfação do nosso cliente é nossa prioridade
          </p>
        </div>

        <div className="carrossel-container">
          <button 
            className="carrossel-btn carrossel-btn-prev" 
            onClick={prevSlide}
            aria-label="Avaliação anterior"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="carrossel-wrapper">
            <div 
              className="carrossel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {avaliacoes.map((avaliacao, index) => (
                <div key={index} className="avaliacao-card">
                  <Quote className="quote-icon" size={40} />
                  
                  <div className="avaliacao-header">
                    <img 
                      src={avaliacao.foto} 
                      alt={avaliacao.nome}
                      className="avaliacao-foto"
                    />
                    <div className="avaliacao-info">
                      <h4 className="avaliacao-nome">{avaliacao.nome}</h4>
                      <div className="avaliacao-stars">
                        {renderStars(avaliacao.avaliacao)}
                      </div>
                      <span className="avaliacao-data">{avaliacao.data}</span>
                    </div>
                  </div>

                  <p className="avaliacao-comentario">
                    {avaliacao.comentario}
                  </p>

                  <div className="avaliacao-source">
                    <svg viewBox="0 0 24 24" className="google-icon">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Avaliação do Google</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carrossel-btn carrossel-btn-next" 
            onClick={nextSlide}
            aria-label="Próxima avaliação"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        <div className="carrossel-dots">
          {avaliacoes.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para avaliação ${index + 1}`}
            />
          ))}
        </div>

        <div className="avaliacoes-cta">
          <p>Gostou do nosso trabalho?</p>
          <a 
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="avaliacoes-btn"
          >
            Deixe sua avaliação no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default AvaliacaoSection;

