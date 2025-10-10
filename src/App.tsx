import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SobreSection from './components/SobreSection';
import ServicosSection from './components/ServicosSection';
import GaleriaVideos from './components/GaleriaVideos';
import ProdutosSection from './components/ProdutosSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>EvoluSom Equipadora | Películas, Som, Elétrica e Acessórios</title>
        <meta
          name="description"
          content="EvoluSom Equipadora - Excelência em películas, plotagens, som automotivo, instalações elétricas e acessórios para veículos, residências e empresas."
        />
        <meta
          name="keywords"
          content="película automotiva, som automotivo, alarme automotivo, plotagem, instalação elétrica, acessórios automotivos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <SobreSection />
          <ServicosSection />
          <GaleriaVideos />
          <ProdutosSection />
          <ContatoSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}

export default App;
