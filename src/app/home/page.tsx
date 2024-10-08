"use client"

import TaskList from "@/components/TaskList";
import styles from "../../styles/Container.module.scss";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
    <Header />
      <div className={styles.container}>
        <TaskList />
      </div>
    </>
  );
}
