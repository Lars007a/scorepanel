import styles from "./scorebug.module.css";
import PanelContainer from "../panelContainer/panelContainer.jsx";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  standardTeamLocalStObj,
  standardGeneralSettingsObj,
} from "../../localstorageObject.jsx";
import Popup from "../popup/popup.jsx";

/* brug for:
en boks til flag. * 2
en boks til tre bogstavers forkortelse. * 2
en boks til antal mål. * 2

en boks til tid. * 1




*/

export default function scorebug() {
  //Gem et team object i localstorage for hver team.
  const [team1, setTeam1] = useLocalStorage("team1", standardTeamLocalStObj);
  const [team2, setTeam2] = useLocalStorage("team2", standardTeamLocalStObj);

  //Gem et objekt i localstorage for generelle ting til scorepanellet.
  const [general, setGeneral] = useLocalStorage(
    "general",
    standardGeneralSettingsObj
  );

  return (
    <>
      <PanelContainer bottom={true}>
        <div className={styles.popupCon}>
          {team1.recentGoal ? <Popup text={`Mål til ${team1.name}`} /> : ""}
          {team2.recentGoal ? <Popup text={`Mål til ${team2.name}`} /> : ""}
        </div>
        <div className={styles.outline}>
          <section className={`${styles.teamSection} ${styles.first}`}>
            <img src={team1.img} alt="flag" className={styles.logoimg} />
            <h3>{team1.name}</h3>
          </section>

          <section className={styles.teamscore}>
            <h2>{team1.score}</h2>
          </section>

          <section className={styles.timerSection}>
            <h3 className={styles.halfTime}>{general.half}. Halvleg</h3>
            <h2 className={styles.timer}>
              {general.minutes}:{general.seconds}
            </h2>
          </section>

          <section className={styles.teamscore}>
            <h2>{team2.score}</h2>
          </section>

          <section className={`${styles.teamSection} ${styles.second}`}>
            <h3>{team2.name}</h3>
            <img src={team2.img} alt="flag" className={styles.logoimg} />
          </section>
        </div>
      </PanelContainer>
    </>
  );
}
