import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiperSection.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSection = () => {
  return (
    <div className={styles.body}>
      <div className={styles.swiper}></div>

      <h1 className={styles.h1}>Formation Continue</h1>
      <p className={styles.para}>
        Dans un environnement professionnel en constante évolution, il est
        crucial pour les organisations de rester compétitives et d'assurer le
        développement continu des compétences de leurs employés. C'est dans
        cette optique que nous avons conçu notre projet de formation continue.
        Ce projet vise à fournir aux participants les outils nécessaires pour
        améliorer leurs compétences, s'adapter aux nouvelles technologies et
        méthodes de travail, et ainsi contribuer de manière plus efficace aux
        objectifs de l'entreprise.
      </p>
    </div>
  );
};

export default SwiperSection;
