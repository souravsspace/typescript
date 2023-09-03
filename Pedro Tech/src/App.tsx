import { FC, createContext } from "react";
import "./css/pico.min.css";
import ContextApi from "./Components/ContextApi";
// import EnomsType, { hairColor } from "./Components/EnomsType";

interface ContextType {
  herName: string;
  isDeveloper: boolean;
  hobby: string[];
}

const ContextVal = createContext<ContextType | null>(null);

const App: FC = () => {
  const herData: ContextType = {
    herName: "Israt Ibrani",
    isDeveloper: false,
    hobby: ["Coding", "Reading", "Travelling"]
  };
  return (
    <ContextVal.Provider value={herData}>
      {/* <EnomsType
        isHairColor={hairColor.red}
        herName="Israt Ibrani"
        isDeveloper={false}
      /> */}
      <ContextApi />
    </ContextVal.Provider>
  );
};

export default App;
