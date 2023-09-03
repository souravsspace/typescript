export default function BasicType() {
  const name: string = "Sourav Ukil";
  const age: number = 21;
  // const isDeveloper: boolean = 'true'; // error
  const isDeveloper: boolean = true;

  const getAgeByName = (name: string): string => {
    if (name === "Sourav Ukil") return '21';
    else return "Not Found";
  };

  return (
    <div className="container">
      <article>
        <h1>Basic Types</h1>
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Age: </strong>
          {age}
        </p>
        <p>
          <strong>Is Developer: </strong>
          {isDeveloper ? "Yes" : "No"}
        </p>
      </article>
    </div>
  );
}
