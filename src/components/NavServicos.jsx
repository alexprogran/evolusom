import './NavServicos.css';

const NavServicos = () => {
  return (
    <section className="nav-servicos">
      <div className="nav-servicos-content">
        <h1 className="nav-servicos-title">NOSSOS SERVIÇOS</h1>
        <p className="nav-servicos-subtitle">
        Soluções completas em películas, leds, multimídia, som e elétrica tudo em um só lugar</p>
        <div className="nav-servicos-line">
          <span className="nav-servicos-line-segment line-brown"></span>
          <span className="nav-servicos-line-segment line-yellow"></span>
        </div>
      </div>
    </section>
  );
};

export default NavServicos;
