import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollParaSecao = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-coluna">
            <h3 className="footer-titulo">Evolu<span className="brand-s">S</span>om Equipadora</h3>
            <p className="footer-descricao">
              Excelência em películas, plotagens, som, elétrica e acessórios para automotivos,
              residências e empresas.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com/evolusom"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/evolusom"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-subtitulo">Links Rápidos</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollParaSecao('inicio')}>Início</a></li>
              <li><a onClick={() => scrollParaSecao('sobre')}>Sobre</a></li>
              <li><a onClick={() => scrollParaSecao('servicos')}>Serviços</a></li>
              <li><a onClick={() => scrollParaSecao('videos')}>Vídeos</a></li>
              <li><a onClick={() => scrollParaSecao('produtos')}>Produtos</a></li>
              <li><a onClick={() => scrollParaSecao('contato')}>Contato</a></li>
            </ul>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-subtitulo">Serviços</h4>
            <ul className="footer-links">
              <li>Películas Automotivas</li>
              <li>Som Automotivo</li>
              <li>Alarmes e Segurança</li>
              <li>Plotagens</li>
              <li>Instalações Elétricas</li>
              <li>Acessórios</li>
            </ul>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-subtitulo">Contato</h4>
            <ul className="footer-contatos">
              <li>
                <MapPin size={18} />
                <span>Rua Exemplo, 123<br />Centro - Cidade/UF</span>
              </li>
              <li>
                <Phone size={18} />
                <span>(99) 99999-9999</span>
              </li>
              <li>
                <Mail size={18} />
                <span>contato@evolusom.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Evolu<span className="brand-s">S</span>om Equipadora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
