import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../constants/data";
import styles from "./style.module.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
};

const TrendingNow = (): JSX.Element => {
  return (
    <div className={styles.slider}>
      <Slider  {...settings}>
        {data.TrendingNow.map((item, key) => (
          <div className={styles.item} key={key}>
            <img src={item.CoverImage} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNow;
