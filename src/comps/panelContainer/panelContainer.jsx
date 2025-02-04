import styles from "./panelContainer.module.css";

export default function panelContainer({ children, bottom = true }) {
  return (
    <div
      className={`${styles.panelContainer} ${
        bottom == true ? styles.bottom : styles.top
      }`}
    >
      {children}
    </div>
  );
}
