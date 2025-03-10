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
            El mejor regalo es el tiempo <br /> compartido juntos. Pero si
            desean pueden <br /> ayudarnos con nuestra luna de miel!
          </h1>
        </div>

        <div
          className={`${styles.containerBankData} ${styles.mobileTitle}`}
          style={{ gap: "0px" }}
        >
          <h1>
            El mejor regalo es el tiempo <br /> compartido juntos. Pero si{" "}
            <br />
            desean pueden ayudarnos con <br /> nuestra luna de miel!
          </h1>
        </div>

        <div className={styles.containerBankData}>
          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>Alias:</p>
            <p>Tomichis</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>CBU:</p>
            <p>2850467840095904560598</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>Titular:</p>
            <p>Tomas Karagozian</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>CUIL / CUIT / CDI:</p>
            <p>20349826829</p>
          </div>
          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>Caja de Ahorro en $:</p>
            <p>446709590456059</p>
          </div>
        </div>

        <Image src={imgDesktop4} alt="Text" className={styles.imgDesktop4} />

        <div className={styles.containerBankData}>
          <h2>Por si te divierte mandar USDT...</h2>

          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>Red:</p>
            <p>TRC20</p>
          </div>

          <div className={styles.containerText}>
            <p style={{ color: "rgba(163, 14, 0, 1)" }}>
              Dirección de Depósito:
            </p>
          </div>
          <div className={styles.containerText}>
            <p>TBrJ8rHLmGAoXyAqHP1KW6UHQSdREn6TT1</p>
          </div>
        </div>

        <h1>Muchas Gracias!</h1>

        <div className={styles.containerBankData}>
          <Image src={imgDesktop7} alt="Text" className={styles.imgDesktop7} />

          <div className={styles.containerText}>
            <p style={{ fontSize: "12px" }}>12</p>
            <p style={{ fontSize: "12px" }}>.</p>
            <p style={{ fontSize: "12px" }}>04</p>
            <p style={{ fontSize: "12px" }}>.</p>
            <p style={{ fontSize: "12px" }}>25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
"use client";
import React, { useState } from "react";
import mobileDesing from "../../public/images/mobileDesing.jpg";
import { FaRegCopy } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

  const [toast, setToast] = useState(false);
  const [toastData, setToastData] = useState({ title: "", description: "" });

  async function copiarAlPortapapeles(texto, type) {
    try {
      await navigator.clipboard.writeText(texto);
      setToast(true);
      setToastData({
        title: type === "CBU" ? "CBU copiado" : "Dirección copiada",
        description:
          type === "CBU"
            ? "CBU copiado en portapapeles"
            : "Dirección copiada en portapapeles",
      });
      setTimeout(() => {
        setToast(false);
        setToastData({ title: "", description: "" });
      }, "2500");
    } catch (err) {
      alert("Error al copiar el texto");
    }
  }

      <div className={styles.section}>

      {toast ? (
        <div className={`${styles.bodyToast} ${styles.fadeInUp}`}>
          <div className={styles.containerToast}>
            <div className={styles.containerTitle}>
              <CiCircleCheck className={styles.checkIcon} />
              <h1 className={styles.title}>{toastData.title}</h1>
            </div>
            <i
              className={`${styles.iconToast} pi pi-times`}
              onClick={() => {
                setToast({
                  visible: false,
                  title: "",
                  description: "",
                  error: false,
                });
              }}
            />
          </div>

          <p className={styles.description}>{toastData.description}</p>
        </div>
      ) : null}

      <div
        className={styles.bodyMobile}
        style={{
          backgroundImage: `url("${imgDesktop9.src}")`,
        }}
      >
        <div
          className={styles.containerMobile}
          style={{
            backgroundImage: `url("${mobileDesing.src}")`,
          }}
        >
          <FaRegCopy
            className={styles.icon}
            style={{ top: "48%" }}
            onClick={() => {
              copiarAlPortapapeles("2850467840095904560598", "CBU");
            }}
          />

          <FaRegCopy
            className={styles.icon}
            style={{ top: "68.5%" }}
            onClick={() => {
              copiarAlPortapapeles(
                "TBrJ8rHLmGAoXyAqHP1KW6UHQSdREn6TT1",
                "USDT"
              );
            }}
          />
        </div>
      </div>
      
          </div>

      */
