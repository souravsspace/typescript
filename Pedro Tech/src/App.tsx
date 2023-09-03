import { FC } from "react";
import "./css/pico.min.css";
import PropsInterface from "./Components/PropsInterface";

const App: FC = () => {
  return <PropsInterface hisName="Sourav Ukil" isDeveloper={false} />;
};

export default App;
