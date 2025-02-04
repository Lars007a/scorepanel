import styles from "./videobackground.module.css";

export default function videobc({ children }) {
  return (
    <>
      <section className={styles.bc}>
        <video autoPlay muted loop id="bcVideo">
          <source src="/video/bcvideo_cropped2.mp4" type="video/mp4" />
        </video>
        {children}
      </section>
    </>
  );
}
