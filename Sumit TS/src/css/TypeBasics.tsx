export default function TypeBasics() {
  let authur: string = "John Doe";
  authur = "Sourav Ukil";
  // authur = 34 // error TS2322: Type '34' is not assignable to type 'string'.

  // let age: number = 24;
  // age = 34; // no error
  // // age = "sourav" // error

  // const getValue = (a: number, b: number)=> {
  //   return a * b
  // }

  const itemsData: { name: string; age: Number } = [
    { name: "sourav", age: 21 },
    { name: "jarif", age: 20 },
    { name: "jahin", age: 20 },
    { name: "ratul", age: 23 },
    { name: "sakib", age: 22 },
  ];

  return (
    <div className="container">
      <article>
        <h3>{authur}</h3>
        {/* <h3>{getValue(12, 15)}</h3> */}
        {/* <h3>{getValue(20, 'sds')}</h3> // error  */}
        {itemsData.map((item, index: number) => {
          return <p key={index}>{item.name}</p>;
        })}
      </article>
    </div>
  );
}
