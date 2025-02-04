import styles from "./hideadmin.module.css";
import { BiSolidHide } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";

export default function hideadmin({ hideFunc, hiddenState }) {
  return (
    <>
      <div
        onClick={() => {
          hideFunc();
        }}
        className={styles.hideBox}
      >
        {hiddenState ? (
          <RxEyeOpen color={"white"} className={styles.hideIcon} />
        ) : (
          <BiSolidHide color={"white"} className={styles.hideIcon} />
        )}
      </div>
    </>
  );
}
