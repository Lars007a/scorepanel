import styles from "./adminGeneralSettings.module.css";
import Btn from "../btn/btn.jsx";
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function adminGeneralSettings({ getter, setter }) {
  const [timerStarted, setTimerStarted] = useState(false); //For at holde styr på, om at timeren kører, eller ikke køre.
  const timerInterval = useRef(); //For at holde på hvad der skal bruges i clearInterval, så timeren kan stoppes.

  const nextHalfTime = () => {
    if (getter.half >= 2) {
      return;
    }

    getter.half++;

    setter(getter);
  };

  const setOvertime = () => {};

  //Håndtere klik på start stop timer knappen.
  const startStopTimer = () => {
    if (timerStarted == true) {
      setTimerStarted(false);
      clearInterval(timerInterval.current);
    } else {
      setTimerStarted(true);
      timer();
      timerInterval.current = setInterval(timer, 1000);
    }
  };

  //Håndtere faktisk at køre timeren.
  const timer = () => {
    if (getter.seconds == 59) {
      getter.minutes++;
      getter.seconds = 0;
    } else {
      getter.seconds++;
    }
    setter(getter);
  };

  return (
    <section className={styles.general}>
      <Btn clickFunc={startStopTimer}>Stop/start tid</Btn>
      <Btn clickFunc={nextHalfTime}>Næste halvleg</Btn>
    </section>
  );
}
