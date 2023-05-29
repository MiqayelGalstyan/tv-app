import React from "react";
import styles from "./styles.module.css";
import { Sidebar } from "../components/Sidebar";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  return (
    <div className={styles.Wrapper}>
      <Sidebar />
      <section>{children}</section>
    </div>
  );
};

export default MainLayout;
