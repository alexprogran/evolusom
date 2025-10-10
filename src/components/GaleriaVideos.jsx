import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player';
import { videos } from '../data/videos';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './GaleriaVideos.css';

const GaleriaVideos = () => {
  return (
    <section id="videos" className="galeria-videos">
      <div className="container">
        <div className="galeria-header">
          <h2 className="section-title">Nossos Trabalhos em Ação</h2>
          <div className="title-underline"></div>
          <p className="galeria-subtitle">
            Confira alguns dos nossos projetos e instalações realizadas
          </p>
        </div>

        <div className="swiper-container">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="videos-swiper"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="video-slide">
                  <ReactPlayer
                    url={video.url}
                    controls
                    width="100%"
                    height="100%"
                    className="react-player"
                    light={true}
                  />
                  <div className="video-titulo">{video.titulo}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GaleriaVideos;
