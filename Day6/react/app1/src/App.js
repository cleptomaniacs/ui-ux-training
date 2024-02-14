import "./App.css";
import Header from "./views/Header";
import CoachProfile from "./views/CoachProfile";
// import Footer from "./views/Footer";
// import Home from "./views/Home";
// import Lifecycle from "./views/Lifecycle";

// function App() {
//   return (
//     <div>
//       <Lifecycle />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
function App() {
  //state
  // useEffect(() => {
  //   console.log(`Clicked ${count} times`);
  // });
  // const [name, setName] = useState("RevenueAuthorityof Tanzania Employee");
  // const [input, setInput] = useState({ name: "", status: "" });
  // const [email, setEmail] = useState("xxxxxxx@rev.com");
  // const [count, setCount] = useState(0);

  // const inputHandler = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };
  // const submitButton = () => {
  //   let stat = "invalid";
  //   input.name.length >= 5 ? (stat = "valid") : (stat = "invalid");
  //   setInput({ ...input, status: stat });
  // };
  // const changeName = () => {
  //   setName("new RUT Employee");
  // };
  // const updateEmail = () => {
  //   setEmail("xxxxxxxxxxxxx@rev.com");
  // };
  return (
    // <div>
    //   <p>My name is {name}</p>
    //   <button onClick={changeName}> update name </button>
    //   <div>
    //     <h1> Email is : {email}</h1>
    //     <button onClick={updateEmail}>updateEmail</button>
    //     <button onClick={() => setEmail("yyyyyyyy@adp.com")}>
    //       updateEmail
    //     </button>
    //     <br />
    //     <br />
    //     <div>
    //       <button onClick={() => setCount(count + 1)}>++</button>
    //       <h1>Number: {count}</h1>
    //       <button onClick={() => setCount(count - 1)}>--</button>
    //     </div>
    //   </div>
    //   <br />
    //   <br />
    //   <input
    //     type="text"
    //     name="name"
    //     placeholder="Name"
    //     onChange={(event) => inputHandler(event)}
    //   />
    //   <br />
    //   <br />
    //   <button onClick={() => submitButton()}>Submit</button>
    //   <br />
    //   <br />
    //   <p>Name: {input.name}</p>
    //   <br />
    //   <br />
    //   <p>Status: {input.status}</p>
    // </div>
    <div className="m-0 p-0">
      <Header />
      <CoachProfile />
    </div>
  );
}

export default App;
