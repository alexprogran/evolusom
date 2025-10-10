import { ShoppingCart, MessageCircle } from 'lucide-react';
import './ProdutosSection.css';

const ProdutosSection = () => {
  const produtos = [
    {
      nome: "Película de Proteção Solar",
      descricao: "Película de alta qualidade para proteção UV e conforto térmico",
      categoria: "Películas"
    },
    {
      nome: "Kit Som Automotivo",
      descricao: "Sistema completo de som com amplificador e subwoofer",
      categoria: "Som"
    },
    {
      nome: "Alarme Automotivo Premium",
      descricao: "Sistema de segurança com sensor de presença e bloqueio",
      categoria: "Segurança"
    },
    {
      nome: "Central Multimídia",
      descricao: "Central com Android, GPS, Bluetooth e espelhamento",
      categoria: "Multimídia"
    },
    {
      nome: "Kit Vidro Elétrico",
      descricao: "Sistema completo de vidro elétrico para 4 portas",
      categoria: "Elétrica"
    },
    {
      nome: "Acessórios Personalizados",
      descricao: "Variedade de acessórios para personalizar seu veículo",
      categoria: "Acessórios"
    }
  ];

  const abrirWhatsApp = (produto) => {
    const mensagem = `Olá! Gostaria de solicitar um orçamento para: ${produto}`;
    const url = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <div className="produtos-header">
          <h2 className="section-title">Produtos e Acessórios</h2>
          <div className="title-underline"></div>
          <p className="produtos-subtitle">
            Produtos de qualidade para todas as suas necessidades
          </p>
        </div>

        <div className="produtos-grid">
          {produtos.map((produto, index) => (
            <div key={index} className="produto-card">
              <div className="produto-icon-wrapper">
                <ShoppingCart size={48} className="produto-icon" />
              </div>
              <span className="produto-categoria">{produto.categoria}</span>
              <h3 className="produto-nome">{produto.nome}</h3>
              <p className="produto-descricao">{produto.descricao}</p>
              <button
                className="produto-btn"
                onClick={() => abrirWhatsApp(produto.nome)}
              >
                <MessageCircle size={18} />
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdutosSection;
