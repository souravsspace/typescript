import { FC } from "react";

export enum hairColor {
  black = "black wow",
  brown = "brown nice",
  blonde = "blonde good",
  red = "red better",
  white = "white sad",
}

interface Props {
  herName: string;
  isDeveloper: boolean;
  isHairColor: hairColor;
}

const EnomsType: FC<Props> = ({ herName, isDeveloper, isHairColor }) => {
  type hisNameType = "Sourav" | "Ukil";
  const hisName: hisNameType = "Sourav";
  // const hisName: hisNameType = "bala";
  return (
    <div className="container">
      <article>
        <h2>Enoms Type</h2>
        <p>
          Her name is {herName} & His Name is {hisName}
        </p>
        <p>Is she a developer? {isDeveloper ? "Yes" : "No"}</p>
        <p>Her hair color is {isHairColor}</p>
      </article>
    </div>
  );
};

export default EnomsType;
