import styles from "./popup.module.css";

export default function popup({ text }) {
  return (
    <div className={`${styles.box}`}>
      <p>{text}</p>
    </div>
  );
}
