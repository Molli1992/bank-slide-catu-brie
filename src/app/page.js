import styles from "./page.module.css";
import imgDesktop1 from "../../public/images/DesktopRecurso 1.png";
import imgDesktop4 from "../../public/images/DesktopRecurso 4.png";
import imgDesktop7 from "../../public/images/DesktopRecurso 7.png";
import imgDesktop9 from "../../public/images/DesktopRecurso 9.png";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={styles.body}
      style={{
        backgroundImage: `url("${imgDesktop9.src}")`,
      }}
    >
      <div className={styles.containerLeft}>
        <Image
          src={imgDesktop1}
          alt="Heart Image"
          className={styles.heartIMG}
        />
      </div>

      <div className={styles.container}>
        <div
          className={`${styles.containerBankData} ${styles.desktopTitle}`}
          style={{ gap: "0px" }}
        >
          <h1>
            El mejor regalos es el tiempo <br /> compartido juntos. Pero si
            desean pueden <br /> ayudarnos con nuestra luna de miel!
          </h1>
        </div>

        <div
          className={`${styles.containerBankData} ${styles.mobileTitle}`}
          style={{ gap: "0px" }}
        >
          <h1>
            El mejor regalos es el tiempo <br /> compartido juntos. Pero si{" "}
            <br />
            desean pueden ayudarnos con <br /> nuestra luna de miel!
          </h1>
        </div>

        <div className={styles.containerBankData}>
          <div className={styles.containerText}>
            <p style={{ color: "red" }}>Alias:</p>
            <p>Tomichis</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "red" }}>CBU:</p>
            <p>2850467840095904560598</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "red" }}>Titular:</p>
            <p>Tomas Karagozian</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "red" }}>CUIL / CUIT / CDI:</p>
            <p>20349826829</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "red" }}>Caja de Ahorro en $:</p>
            <p>446709590456059</p>
          </div>
        </div>

        <Image src={imgDesktop4} alt="Text" className={styles.imgDesktop4} />

        <div className={styles.containerBankData}>
          <h2>Por si te divierte mandar USDT...</h2>

          <div className={styles.containerText}>
            <p style={{ color: "red" }}>Red:</p>
            <p>TRC20</p>
          </div>

          <div className={styles.containerText}>
            <p style={{ color: "red" }}>Dirección de Depósito:</p>
          </div>
          <div className={styles.containerText}>
            <p>TBrJ8rHLmGAoXyAqHP1KW6UHQSdREn6TT1</p>
          </div>
        </div>

        <h1>Muchas Gracias!</h1>

        <div className={styles.containerBankData}>
          <Image src={imgDesktop7} alt="Text" className={styles.imgDesktop7} />

          <div className={styles.containerText}>
            <p>12</p>
            <p>.</p>
            <p>04</p>
            <p>.</p>
            <p>25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
