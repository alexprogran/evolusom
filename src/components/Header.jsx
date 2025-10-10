import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },    
    { label: 'Produtos', href: '#produtos' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Navegação Desktop */}
          <nav className="header-nav">
            {menuItems.map((item) => (
              <button
                key={item.href}
                className="header-nav-link"
                onClick={() => scrollToSection(item.href)}
                aria-label={item.label}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Ações Desktop */}
          <div className="header-actions">
            <a
              href="https://wa.me/5599999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
              className="agendar-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar Serviços no WhatsApp"
            >
              <svg
                viewBox="0 0 32 32"
                className="agendar-icon"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.002 0h-.004C7.164 0 0 7.163 0 16c0 3.5 1.128 6.743 3.045 9.38L1.055 31.08l5.925-1.955C9.485 30.87 12.644 32 16.002 32 24.838 32 32 24.837 32 16S24.838 0 16.002 0zm9.45 22.698c-.393 1.11-1.948 2.035-3.188 2.3-.843.18-1.943.324-5.644-1.21-4.744-1.968-7.793-6.767-8.03-7.08-.226-.312-1.896-2.522-1.896-4.813 0-2.29 1.197-3.417 1.622-3.88.426-.463.926-.578 1.235-.578.31 0 .62.002.89.015.287.013.67-.109.97.74.393.925 1.348 3.285 1.463 3.525.116.24.196.52.04.833-.158.31-.233.504-.464.773-.232.27-.485.6-.695.806-.232.226-.474.47-.204.926.27.455 1.203 1.983 2.582 3.212 1.773 1.58 3.268 2.07 3.73 2.303.464.232.735.196 1.005-.117.27-.31 1.16-1.355 1.47-1.82.31-.463.62-.386.926-.232.31.154 1.968.928 2.304 1.097.337.155.558.232.642.347.084.115.084.674-.31 1.325z"/>
              </svg>
              Agendar Serviços
            </a>
          </div>

          {/* Botão Toggle Mobile */}
          <button
            className="header-mobile-menu-button menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="header-mobile-menu">
            <nav className="header-mobile-nav">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  className="header-mobile-link"
                  onClick={() => scrollToSection(item.href)}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="https://wa.me/5599999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
                className="header-mobile-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Serviços no WhatsApp"
              >
                <Phone size={18} />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
