function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/** Calling the MessageDemo(1, 'abcd') */}
      <MessageDemo />
      <MessageDemo name="Pawan" />
      <MessageDemo name="Vitthal" email="v@gmail.com" />
      <MessageDemo name="shivam"  email="s@gmail.com"/>
      <MessageDemo name="rohit"  email="r@gmail.com"/>
      <MessageDemo name="cdac"  email="c@gmail.com"/>
    </>
  );
}

// Reusable
// how to make this "dynmaic"
function MessageDemo({email,name}) {
  // console.log("I am inside messagedemo", props);

  return (
    <>
      <h1>Hello {name} {email}</h1>
    </>
  );
}

export default App;