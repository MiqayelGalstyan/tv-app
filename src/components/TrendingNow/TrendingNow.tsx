import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../constants/data";
import styles from "./style.module.css";
import Slider from "react-slick";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
};

const TrendingNow = (): JSX.Element => {
  const { setActiveFeatured } = useContext(AppContext);

  return (
    <div className={styles.slider}>
      <p className={styles.sliderTitle}>Trending Now</p>
      <Slider {...settings}>
        {data.TrendingNow.map((item, key) => (
          <div
            className={styles.item}
            key={key}
            onClick={() => setActiveFeatured(item)}
          >
            <img src={item.CoverImage} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNow;
