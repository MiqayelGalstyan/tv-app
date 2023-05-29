import React, { useState } from "react";
import styles from "./styles.module.css";
import { Sidebar } from "../components/Sidebar";
import { data } from "../constants/data";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  const [activeFeatured, setActiveFeatured] = useState<typeof data.Featured>();
  return (
    <div className={styles.Wrapper}>
      <Sidebar />
      <section>{children}</section>
    </div>
  );
};

export default MainLayout;
