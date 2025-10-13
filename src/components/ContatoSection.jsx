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
    const url = `https://wa.me/557130405086?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="contato-header">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="title-underline"></div>
          <p className="contato-subtitle">
            Estamos prontos para atender você !
          </p>
        </div>

        <div className="contato-content">
          <div className="contato-info">
            <div className="info-card">
              <MapPin className="info-icon" size={24} />
              <h3>Endereço</h3>
              <p>Tv. Getúlio Vargas, 05<br />Alto da Cruz - Camaçari/BA</p>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={24} />
              <h3>Telefone</h3>
              <p>(71) 3040-5086</p>
              <a
                href="https://wa.me/557130405086"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-link"
              >
                WhatsApp
              </a>
            </div>

            <div className="info-card">
              <Mail className="info-icon" size={24} />
              <h3>E-mail</h3>
              <p>evolusom.equip@hotmail.com</p>
            </div>

            <div className="info-card">
              <Instagram className="info-icon" size={24} />
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/evolusom.3m/"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-link"
              >
                @evolusom.3m
              </a>
            </div>
          </div>
          
          <div className="mapa">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.2429234507513!2d-38.33249512516363!3d-12.697561487593214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71669cefa23bc59%3A0x6cee95a5542ef221!2sEvoluSom%20Equipadora!5e0!3m2!1spt-BR!2sbr!4v1760344046147!5m2!1spt-BR!2sbr"
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '12px' }}
              // style={{border:0;}} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Localização EvoluSom"
             
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
