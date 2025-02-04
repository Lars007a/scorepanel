import styles from "./btn.module.css";

export default function btn({ children, clickFunc = undefined }) {
  return (
    <>
      {clickFunc == undefined ? (
        <button className={styles.btn}>{children}</button>
      ) : (
        <button
          onClick={() => {
            clickFunc();
          }}
          className={styles.btn}
        >
          {children}
        </button>
      )}
    </>
  );
}
