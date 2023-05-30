import React, { useState } from "react";
import styles from "./styles.module.css";
import { Sidebar } from "../components/Sidebar";
import { IDataItemProps, data } from "../constants/data";
import { AppContext } from "../context/appContext";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  const [activeFeatured, setActiveFeatured] = useState<IDataItemProps>(
    data.Featured
  );
  return (
    <AppContext.Provider value={{ activeFeatured, setActiveFeatured }}>
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: `url(${activeFeatured.CoverImage})` }}
      >
        <Sidebar />
        <section>{children}</section>
      </div>
    </AppContext.Provider>
  );
};

export default MainLayout;
