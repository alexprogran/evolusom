import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';
import './ContatoSection.css';

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensagemWhatsApp = `Olá! Meu nome é ${formData.nome}.\nTelefone: ${formData.telefone}\n\nMensagem: ${formData.mensagem}`;
    const url = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="contato-header">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="title-underline"></div>
          <p className="contato-subtitle">
            Estamos prontos para atender você e realizar seu projeto
          </p>
        </div>

        <div className="contato-content">
          <div className="contato-info">
            <div className="info-card">
              <MapPin className="info-icon" size={28} />
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123<br />Centro - Cidade/UF</p>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={28} />
              <h3>Telefone</h3>
              <p>(99) 99999-9999</p>
              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-link"
              >
                WhatsApp
              </a>
            </div>

            <div className="info-card">
              <Mail className="info-icon" size={28} />
              <h3>E-mail</h3>
              <p>contato@evolusom.com.br</p>
            </div>

            <div className="info-card">
              <Instagram className="info-icon" size={28} />
              <h3>Redes Sociais</h3>
              <a
                href="https://instagram.com/evolusom"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-link"
              >
                @evolusom
              </a>
            </div>

            <div className="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1791266830946!2d-43.18835668537944!3d-22.90693194325879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5a5b4b3b3b%3A0x1234567890abcdef!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização EvoluSom"
              ></iframe>
            </div>
          </div>

          <div className="contato-form-wrapper">
            <form onSubmit={handleSubmit} className="contato-form">
              <h3 className="form-titulo">Envie sua mensagem</h3>

              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(99) 99999-9999"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>

              <button type="submit" className="form-btn">
                <Send size={18} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
