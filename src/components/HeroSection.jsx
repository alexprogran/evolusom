import { ChevronDown } from 'lucide-react';
import './HeroSection.css';
import CardApresentations from './CardApresentations';

const HeroSection = () => {
  const scrollParaServicos = () => {
    const elemento = document.getElementById('servicos');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cardsApresentacao = [
    {
      imagem: '/img_aplic_pelicula.png',
      titulo: 'Aplicação de Película de Proteção'
    },
    {
      imagem: '/img_led_car.webp',
      titulo: 'Lâmpadas convencionais e leds'
    },
    {
      imagem: '/img_multimidia.webp',
      titulo: 'Instalação Multimídia'
    },
    {
      imagem: '/img_som_automotivo.webp',
      titulo: 'Instalação de Som Automotivo'
    },
    {
      imagem: '/img_eletricas.jpg',
      titulo: 'Instalação de Elétrica'
    },
  ];

  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      
      {/* Logo para mobile */}
      <img 
        src="/logo.png"
        alt="EvoluSom Logo"
        className="hero-logo"
        onClick={() => scrollParaServicos()}
      />
      
      {/* Carrossel Mobile - só aparece até 764px */}
      <div className="hero-mobile-carousel">
        <CardApresentations cards={cardsApresentacao} />
      </div>
      
      {/* Container para layout desktop - lado a lado */}
      <div className="hero-container-wrapper">
        {/* Carrossel - lado esquerdo */}
        <div className="hero-carousel-wrapper">
          <CardApresentations cards={cardsApresentacao} />
        </div>
        
        {/* Conteúdo - lado direito */}
        <div className="hero-content-wrapper">
          <div className="hero-content"> 
            <h1 className="hero-title">
              Películas, multimídias e acessórios 
            </h1>
            <h2 className="hero-subtitle">
              para o seu carro, casa ou empresa
            </h2>
            <p className="hero-description">
              Soluções em películas, multimídias, som, elétrica e acessórios
            </p>
            <div className="hero-buttons">
              <button onClick={scrollParaServicos} className="hero-btn">
                Conheça nossos serviços
                <ChevronDown size={20} className="btn-icon" />
              </button>

              <button onClick={scrollParaServicos} className="hero-btn-whatsapp">
                <svg 
                  viewBox="0 0 32 32" 
                  className="whatsapp-icon"
                  fill="currentColor"
                >
                  <path d="M16.002 0h-.004C7.164 0 0 7.163 0 16c0 3.5 1.128 6.743 3.045 9.38L1.055 31.08l5.925-1.955C9.485 30.87 12.644 32 16.002 32 24.838 32 32 24.837 32 16S24.838 0 16.002 0zm9.45 22.698c-.393 1.11-1.948 2.035-3.188 2.3-.843.18-1.943.324-5.644-1.21-4.744-1.968-7.793-6.767-8.03-7.08-.226-.312-1.896-2.522-1.896-4.813 0-2.29 1.197-3.417 1.622-3.88.426-.463.926-.578 1.235-.578.31 0 .62.002.89.015.287.013.67-.109.97.74.393.925 1.348 3.285 1.463 3.525.116.24.196.52.04.833-.158.31-.233.504-.464.773-.232.27-.485.6-.695.806-.232.226-.474.47-.204.926.27.455 1.203 1.983 2.582 3.212 1.773 1.58 3.268 2.07 3.73 2.303.464.232.735.196 1.005-.117.27-.31 1.16-1.355 1.47-1.82.31-.463.62-.386.926-.232.31.154 1.968.928 2.304 1.097.337.155.558.232.642.347.084.115.084.674-.31 1.325z"/>
                </svg>
                Faça seu orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão Nossos Serviços - Mobile */}
      <button 
        className="hero-servicos-btn"
        onClick={scrollParaServicos}
      >
        Nossos Serviços
        <ChevronDown size={20} className="btn-icon" />
      </button>
      
      <div className="hero-scroll-indicator">
        <ChevronDown size={32} className="scroll-icon" />
      </div>
    </section>
  );
};

export default HeroSection;
