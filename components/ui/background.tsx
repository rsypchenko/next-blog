import styles from "./background.module.css";
import svg from "./background.svg";

import Image from "next/image";

export const Background = () => {
  return (
    <div className={styles.background}>
      <Image src={svg} className="z-0" alt="author">
       
      </Image>
    </div>
  );
};
