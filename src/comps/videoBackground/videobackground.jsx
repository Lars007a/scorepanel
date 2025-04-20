import styles from "./videobackground.module.css";
import video from "../../assets/bcvideo_cropped2.mp4";

export default function videobc({ children }) {
  return (
    <>
      <section className={styles.bc}>
        <video autoPlay muted loop id="bcVideo">
          <source src={video} type="video/mp4" />
        </video>
        {children}
      </section>
    </>
  );
}
