function App() {
  return (
    <>
    <h1>Props Demo</h1>
    <ListDemo />
    </>
  );
}

function ListDemo(){
  let data = "Hello Universe";
  let list = ["delhi","calcutta","mumbai"];
  return(
    <>
      <h1>{data}</h1>

      {list.forEach((item ) => item)}
      {list.map((item ) => item)}
    </>
  );
}
export default App;