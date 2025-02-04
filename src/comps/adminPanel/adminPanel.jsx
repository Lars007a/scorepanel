import PanelContainer from "../panelContainer/panelContainer.jsx";
import AdminPanelSingleTeam from "../adminPanelSingleTeam/adminPanelSingleTeam.jsx";
import AdminGeneralSettings from "../adminGeneralSettings/adminGeneralSettings.jsx";
import { useEffect, useState } from "react";
import Hideadmin from "../hideadmin/hideadmin.jsx";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  standardTeamLocalStObj,
  standardGeneralSettingsObj,
} from "../../localstorageObject.jsx";

export default function adminPanel() {
  const [hidden, setHidden] = useState(false);

  //Set op localstorage, bare gem det der som pr niveau 1.
  //Gem et team object i localstorage for hver team.
  const [team1, setTeam1] = useLocalStorage("team1", standardTeamLocalStObj);
  const [team2, setTeam2] = useLocalStorage("team2", standardTeamLocalStObj);

  //Gem et objekt i localstorage for generelle ting til scorepanellet.
  const [general, setGeneral] = useLocalStorage(
    "general",
    standardGeneralSettingsObj
  );

  const toggleHide = () => {
    if (hidden == true) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <>
      <Hideadmin hideFunc={toggleHide} hiddenState={hidden} />

      {hidden ? (
        ""
      ) : (
        <PanelContainer bottom={false}>
          <AdminPanelSingleTeam teamObj={team1} setTeamObj={setTeam1} />
          <AdminGeneralSettings getter={general} setter={setGeneral} />
          <AdminPanelSingleTeam teamObj={team2} setTeamObj={setTeam2} />

          {/* general */}
        </PanelContainer>
      )}
    </>
  );
}
