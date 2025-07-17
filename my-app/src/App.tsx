import BioTeamComponent from "./components/BioTeamComponent";
import ContactComponent from "./components/ContactComponent";
import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";

import PositionComponent from "./components/PositionComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

export default function App() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <BioTeamComponent />
      <PositionComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}
