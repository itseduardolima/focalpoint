"use client"

import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'cancel' | 'delete';
  onClick?: () => void;
};

export const Button = ({ label, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};


