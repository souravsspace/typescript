import { FC } from "react";

interface Props {
  name?: string;
  age?: number;
  isMarried?: boolean;
  hobbies?: string[];
  getAge?: (name: string) => number;
  hisName: string;
  isDeveloper: boolean;
}

// const PropsInterface = (props: Props)=> {
// const PropsInterface = ({ hisName, isDeveloper }: Props) => {
const PropsInterface: FC<Props> = ({ hisName, isDeveloper }) => {
  return (
    <div className="container">
      <article>
        <h2>Components Props & Interface</h2>
        <p>
          His name is {hisName} and he is a{" "}
          {isDeveloper ? "developer" : "student"}.
        </p>
      </article>
    </div>
  );
};

export default PropsInterface;
