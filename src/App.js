// import LandingPage from "./BookManagement/LandingPage";
import LandingPage from "./Budget/LandingPage";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
// import CB from "./CheckBox_Project/CB";
// import Memoization from "./HooksPractice/Memoization";
// import CallbackHook from "./HooksPractice/CallbackHook";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <CB /> */}
        {/* <Memoization /> */}
        {/* <CallbackHook /> */}
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}
