import Videobc from "./comps/videoBackground/videobackground.jsx";
import Scorebug from "./comps/scorebug/scorebug.jsx";
import AdminPanel from "./comps/adminPanel/adminPanel.jsx";
import { useStopwatch } from "react-timer-hook";

/* Side */

export default function App() {
  return (
    <>
      <Videobc>
        {/* Video baggrund */}
        <AdminPanel /> {/* Adminpanel */}
        <Scorebug /> {/* Scorepanel */}
      </Videobc>
    </>
  );
}
