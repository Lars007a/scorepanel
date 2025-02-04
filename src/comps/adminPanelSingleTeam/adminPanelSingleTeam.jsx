import styles from "./adminPanelSingleTeam.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import Btn from "../btn/btn.jsx";
import { useRef, useState, useId } from "react";

//Modtager getter og setter for localstorage objektet for teamet.
//Så der kan ændres i hvad der er gemt der.
export default function adminPanelSingleTeam({ teamObj, setTeamObj }) {
  //Til input feltet til at skifte navn på holdet.
  const [teamField, setTeamField] = useState(teamObj.name);

  const addPoint = () => {
    teamObj.score++;
    setTeamObj(teamObj);
  };

  const removePoint = () => {
    if (!teamObj.score > 0) {
      return;
    }

    teamObj.score--;
    setTeamObj(teamObj);
  };

  const onTeamNameChange = (event) => {
    const input = event.target.value.toUpperCase();

    if (input.length > 3) {
      return;
    }

    setTeamField(input);
    teamObj.name = input;
    setTeamObj(teamObj);
  };

  //Den her event bliver firet, når et biled bliver uploadet.
  //Eftersom den er på onChange attributen på file upload input.
  const onImageChange = (event) => {
    console.log("Img changed");

    //Vi henter så filen der er blevet lagt op.
    const file = event.target.files[0]; //en array, henter første element. Siden kun ville have en.

    //Vi skal læse filen, og få dataen.
    const reader = new FileReader();

    //Definere hvordan filen skal læses, og hvad for en fil det skal være.
    reader.readAsDataURL(file);

    //Event når Filen er blevet læst med success. Hvis brugte loadend, var vi ikke sikker på success.
    reader.addEventListener("load", () => {
      teamObj.img = reader.result;
      console.log(teamObj);
      setTeamObj(teamObj);
    });

    //Event listeneren og readasdataurl kan også byttes om på, siden event listeneren ville altid blive firet efter filen er blevet læst, også selvom den blier defineret og gemt før.
  };

  const uniqueIdFileInput = useId();

  return (
    <section className={styles.teamSection}>
      <div>
        <input
          type="text"
          name="teamname"
          value={teamField}
          onChange={onTeamNameChange}
          placeholder="team abbreveation..."
        />

        <input
          type="file"
          style={{ display: "none" }}
          id={uniqueIdFileInput}
          onChange={onImageChange}
        />
        <label htmlFor={uniqueIdFileInput}>
          <img src={teamObj.img} alt="flag" />
        </label>
      </div>
      <div>
        <Btn clickFunc={addPoint}>
          Mål <BiPlus />
        </Btn>
        <Btn clickFunc={removePoint}>
          Mål <BiMinus />
        </Btn>
      </div>

      <Btn>2 min udvisning</Btn>
    </section>
  );
}
