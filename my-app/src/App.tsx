import BioTeamComponent from "./components/BioTeamComponent";
import ContactComponent from "./components/ContactComponent";
import CurveAbove from "./components/CurveBelowAbobe";
import LineComponent from "./components/EightComponent";
import FifithComponent from "./components/FifithComponent";

import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";
import ForthComponent from "./components/ForthComponent";
import LastLine from "./components/LastLine";
import NineComponent from "./components/NineComponent";

import PositionComponent from "./components/PositionComponent";
import SecondComponent from "./components/SecondComponent";
import SeventhComponent from "./components/SeventhComponent";
import SixthComponent from "./components/SixthComponent";
import TextComponent from "./components/TextComponent";
import ThirdComponent from "./components/ThirdComponent";

export default function App() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <ForthComponent />
      <FifithComponent />
      <SixthComponent />
      <SeventhComponent />
      <LineComponent />
      <TextComponent />
      <CurveAbove />
      <NineComponent />
      <LastLine />

      <BioTeamComponent />
      <PositionComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}
