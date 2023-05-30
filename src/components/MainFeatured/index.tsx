import { useContext } from "react";
import styles from "./style.module.css";
import { AppContext } from "../../context/appContext";
import PlayIcon from '../../assets/icons/play-button.png'

const MainFeatured = (): JSX.Element => {
  const { activeFeatured } = useContext(AppContext);
  return (
    <section className={styles.container}>
      <p className={styles.category}>{activeFeatured.Category}</p>
      <p className={styles.title}>{activeFeatured.Title}</p>
      <div className={styles.date_mpa_flex}>
        <p className={styles.text}>{activeFeatured.Date}</p>
        <p className={styles.text}>{activeFeatured.MpaRating}</p>
        <p className={styles.text}>{activeFeatured.Duration}</p>
      </div>
      <p className={styles.desc}>{activeFeatured.Description}</p>
      <div className={styles.buttonsArea}>
        <button>
          <img src={PlayIcon} alt="play"/> Play
        </button>
        <button>More</button>
      </div>
    </section>
  );
};

export default MainFeatured;
