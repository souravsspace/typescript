import { ChangeEvent, FC, useState } from "react";

interface Props {
  herName: string;
  isDeveloper: boolean;
}

const State: FC<Props> = ({ herName, isDeveloper }) => {
  const [value, setValue] = useState<string | null>(null);
  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className="container">
      <article>
        <h2>Components State</h2>
        <p>Her name is {herName}</p>
        <p>Is she a developer? {isDeveloper ? "Yes" : "No"}</p>
        <input type="text" onChange={handleEvent} />
        <p>{value}</p>
      </article>
    </div>
  );
};

export default State;
