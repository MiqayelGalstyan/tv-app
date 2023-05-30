import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { Sidebar } from "../components/Sidebar";
import { IDataItemProps, data } from "../constants/data";
import { AppContext } from "../context/appContext";
import { ESessionStorage } from "../models/models/sessionStorage.enum";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  const [activeFeatured, setActiveFeatured] = useState<IDataItemProps>(
    data.Featured
  );
  const [videoVisible, setVideoVisible] = useState<boolean>(false);

  const sessionStorageData = sessionStorage.getItem(ESessionStorage.activeItem);

  useEffect(() => {
    if (sessionStorageData) {
      const activeFeature = JSON.parse(sessionStorageData || "{}");
      setActiveFeatured(activeFeature);
    }
  }, [sessionStorageData]);

  useEffect(() => {
    if (activeFeatured?.VideoUrl) {
      setTimeout(() => {
        setVideoVisible(true);
      }, 2000);
    }
    return () => {
      setVideoVisible(false);
    };
  }, [activeFeatured]);

  const backgroundVideoPlayer = useMemo(() => {
    if (activeFeatured?.VideoUrl) {
      return (
        videoVisible && (
          <video
            id="background-video"
            loop
            muted
            autoPlay
            className={styles.video}
          >
            <source src={activeFeatured?.VideoUrl} type="video/mp4" autoFocus />
          </video>
        )
      );
    }
  }, [activeFeatured, videoVisible]);

  return (
    <AppContext.Provider value={{ activeFeatured, setActiveFeatured }}>
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: `url(${activeFeatured.CoverImage})` }}
      >
        {backgroundVideoPlayer}
        <Sidebar />
        <section>{children}</section>
      </div>
    </AppContext.Provider>
  );
};

export default MainLayout;
