"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Img1 from "../../public/MyT-01.jpg";
import Img2 from "../../public/MyT-02.jpg";
import { FaRegCopy } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

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
        className={styles.imgDesktop}
        style={{
          backgroundImage: `url("${Img1.src}")`,
        }}
      >
        <button
          className={styles.copyButton}
          onClick={() => handleCopy("2850467840095904560598", "CBU")}
          style={{
            top: "44.4%",
            left: "73.3%",
          }}
        >
          <FaRegCopy className={styles.icon} />
        </button>

        <button
          className={styles.copyButton}
          onClick={() => handleCopy("2850467840095904560598", "USDT")}
          style={{
            top: "67%",
            left: "73.3%",
          }}
        >
          <FaRegCopy className={styles.icon} />
        </button>
      </div>

      <div
        className={styles.imgMobile}
        style={{
          backgroundImage: `url("${Img2.src}")`,
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
          <div className={styles.container}>
            <div className={styles.containerTitle}>
              <CiCircleCheck className={styles.checkIcon} />
              <h1 className={styles.title}>{toastData.title}</h1>
            </div>
          </div>

          <p className={styles.description}>{toastData.description}</p>
        </div>
      ) : null}
    </div>
  );
}
