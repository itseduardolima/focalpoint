import Image from "next/image";
import LogoImg from "../../../public/assets/images/Logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  // Obtém a data atual
  const today = new Date();

  // Formata a data como "Segunda, 01 de março de 2025"
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('pt-BR', options);

  return (
    <header className={styles.header}>
      <Image src={LogoImg} alt="FocalPoint" />
      <h1>Bem-vindo de volta, Karine</h1>
      <span>{formattedDate}</span>
    </header>
  );
};
