import Image from "next/image";
import LogoImg from "../../../public/assets/images/Logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={LogoImg} alt="FocalPoint" />
      <h1>Bem-vindo de volta, Marcus</h1>
      <span>Segunda, 01 de dezembro de 2025</span>
    </header>
  );
};
