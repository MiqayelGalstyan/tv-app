/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { menuItemsData } from "./data";
import SearchIcon from "../../assets/icons/search.png";
import ProfileIcon from "../../assets/images/profile.jpeg";
import styles from "./style.module.css";
import { useNavigate } from "react-router";

export const Sidebar = (): JSX.Element => {
  const [active, setActive] = useState<number>(menuItemsData[0].id);

  const navigate = useNavigate();

  return (
      <header className={styles.sidebar}>
        <nav>
          <ul>
            <div className={styles.profileLogo}>
              <img src={ProfileIcon} alt={"ProfileIcon"} />
              <a> Daniel </a>
            </div>
            <li>
              <img src={SearchIcon} alt={"Search"} />
              <a>Search</a>
            </li>
            {menuItemsData.map((item) => (
              <li
                key={item.id}
                className={
                  active === item.id ? styles.activeRoute : styles.route
                }
                onClick={() => {
                  navigate(item.url);
                  setActive(item.id);
                }}
              >
                <img src={item.icon} alt={`${item.id}`} />
                <a>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
  );
};
