"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import imgDesktop1 from "../../public/DesktopRecurso 1.png";
import imgDesktop4 from "../../public/DesktopRecurso 4.png";
import imgDesktop7 from "../../public/DesktopRecurso 7.png";
import imgDesktop9 from "../../public/DesktopRecurso 9.png";
import ImgMobile from "../../public/MyT-02.jpg";
import { FaRegCopy } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";

export default function Home() {
  const [toast, setToast] = useState(false);
  const [toastData, setToastData] = useState({ title: "", description: "" });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setToast(true);
    setToastData({
      title: type === "CBU" ? "CBU Copiado" : "Dirección Copiada",
      description:
        type === "CBU"
          ? "CBU copiado correctamente"
          : "Dirección copiada correctamente",
    });

    setTimeout(() => {
      setToast(false);
    }, "2500");
  };

  return (
    <div className={styles.body}>
      <div
        className={styles.desktop}
        style={{
          backgroundImage: `url("${imgDesktop9.src}")`,
        }}
      >
        <div className={styles.container}>
          <Image
            src={imgDesktop1}
            alt="Heart Image"
            className={styles.heartIMG}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.containerBankData} style={{ gap: "0px" }}>
            <h1>El mejor regalos es el tiempo</h1>
            <h1>compartido juntos. Pero si desean pueden</h1>
            <h1>ayudarnos con nuestra luna de miel!</h1>
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
            <Image
              src={imgDesktop7}
              alt="Text"
              className={styles.imgDesktop7}
            />

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

      <div
        className={styles.mobile}
        style={{
          backgroundImage: `url("${ImgMobile.src}")`,
        }}
      >
        <button
          className={styles.copyButton}
          onClick={() => handleCopy("2850467840095904560598", "CBU")}
          style={{
            top: "48%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <FaRegCopy className={styles.icon} />
        </button>

        <button
          className={styles.copyButton}
          onClick={() =>
            handleCopy("TBrJ8rHLmGAoXyAqHP1KW6UHQSdREn6TT1", "USDT")
          }
          style={{
            top: "68.5%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <FaRegCopy className={styles.icon} />
        </button>
      </div>

      {toast ? (
        <div className={`${styles.bodyToast} ${styles.fadeInUp}`}>
          <div className={styles.containerToast}>
            <div className={styles.containerTitle}>
              <CiCircleCheck className={styles.checkIcon} />
              <h3 className={styles.title}>{toastData.title}</h3>
            </div>
          </div>

          <p className={styles.description}>{toastData.description}</p>
        </div>
      ) : null}
    </div>
  );
}
