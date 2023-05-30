import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../constants/data";
import styles from "./style.module.css";
import Slider from "react-slick";
import { useContext, useMemo } from "react";
import { AppContext } from "../../context/appContext";
import { IDataItemProps } from "../../constants/data";
import { ESessionStorage } from "../../models/models/sessionStorage.enum";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  
};

interface ITrendingDataProps {
  list?: IDataItemProps[];
}

const TrendingNow = ({ list }: ITrendingDataProps): JSX.Element => {
  const { setActiveFeatured } = useContext(AppContext);

  const handleClick = (item: IDataItemProps) => {
    setActiveFeatured(item);
    sessionStorage.setItem(ESessionStorage.activeItem, JSON.stringify(item));
  };

  const sliderData = useMemo(() => {
    return list && list.length > 0 ? list : data.TrendingNow;
  }, [list]);

  return (
    <div className={styles.slider}>
      <p className={styles.sliderTitle}>Trending Now</p>
      <Slider {...settings} className={styles.sliderContainer}>
        {sliderData.map((item, key) => (
          <div
            className={styles.item}
            key={key}
            onClick={() => handleClick(item)}
          >
            <img src={item.CoverImage} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNow;
