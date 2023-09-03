
interface Props {
  name?: string;
  age?: number;
  isMarried?: boolean;
  hobbies?: string[];
  getAge?: (name: string)=> number;
  hisName: string;
  isDeveloper: boolean;
}

const PropsInterface = (props: Props)=> {
  return (
    <div className="container">
      <article>
        <h2>Components Props & Interface</h2>
        <p>His name is {props.hisName} and he is a {props.isDeveloper ? "developer" : "student"}.</p>
      </article>
    </div>
  )
}

export default PropsInterface;
