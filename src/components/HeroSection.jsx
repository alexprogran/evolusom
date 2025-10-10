import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollParaServicos = () => {
    const elemento = document.getElementById('servicos');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/hero_vd.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <img 
        src="/logo.png" 
        alt="EvoluSom Logo" 
        className="hero-logo" 
      />
      <div className="hero-content">
        <h1 className="hero-title">
        Películas, multimídias e acessórios 
        </h1>
        <h2 className="hero-subtitle">
          para o seu carro, casa ou empresa
        </h2>
        <p className="hero-description">
          Soluções completas em películas, multimídias, som, elétrica e acessórios
        </p>
        <button onClick={scrollParaServicos} className="hero-btn">
          Conheça nossos serviços
          <ChevronDown size={20} className="btn-icon" />
        </button>
        
      </div>
      
      <div className="hero-scroll-indicator">
        <ChevronDown size={32} className="scroll-icon" />
      </div>
    </section>
  );
};

export default HeroSection;
