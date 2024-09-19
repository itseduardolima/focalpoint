import React from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, title, content, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
