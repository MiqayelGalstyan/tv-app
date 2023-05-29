import React, { useState } from "react";
import { menuItemsData } from "./data";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/icons/search.png";
import styles from "./style.module.css";

export const Sidebar = (): JSX.Element => {
  
  const [active, setActive] = useState<number>(menuItemsData[0].id);

  return (
    <header className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <img src={SearchIcon} alt={"Search"} />
            Search
          </li>
          {menuItemsData.map((item) => (
            <li
              key={item.id}
              className={active === item.id ? styles.activeRoute : styles.route}
              onClick={() => setActive(item.id)}
            >
              <img src={item.icon} alt={`${item.id}`} />
              <NavLink to={item.url}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
