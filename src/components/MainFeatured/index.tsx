import { data } from "../../constants/data";
import styles from "./style.module.css";

const MainFeatured = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <p className={styles.category}>{data.Featured.Category}</p>
      <p className={styles.title}>{data.Featured.Title}</p>
      <div className={styles.date_mpa_flex}>
        <p className={styles.text}>{data.Featured.Date}</p>
        <p className={styles.text}>{data.Featured.MpaRating}</p>
        <p className={styles.text}>{data.Featured.Duration}</p>
      </div>
      <p className={styles.desc}>{data.Featured.Description}</p>
      <div className={styles.buttonsArea}>
        <button>Play</button>
        <button>More</button>
      </div>
    </section>
  );
};

export default MainFeatured;
