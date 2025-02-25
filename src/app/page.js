import styles from "./page.module.css";
import Img1 from "../../public/img-1.jpg";
import Img2 from "../../public/img-2.jpg";

export default function Home() {
  return (
    <div className={styles.body}>
      <div
        className={styles.imgDesktop}
        style={{
          backgroundImage: `url("${Img2.src}")`,
        }}
      />

      <div
        className={styles.imgMobile}
        style={{
          backgroundImage: `url("${Img1.src}")`,
        }}
      />
    </div>
  );
}
