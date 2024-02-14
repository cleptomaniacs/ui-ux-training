import React from "react";
import { useState, useRef } from "react";

//import { useForm } from "react-hook-form"; //npm install react-hook-form
// const App = () => {
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (values) =>
//     console.log(values.email + " " + values.password);
//   const [input, setInput] = useState({ name: "Sudaksha UI training" });
//   return (
//     <div className="container">
//       <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>
//         <h1>Register</h1>
//         <div className="col-lg-12">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter your email"
//             {...register("email", {
//               required: "Email cannot be empty",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "invalid email address",
//               },
//             })}
//           />
//           <br />
//           {errors.email && (
//             <p className="form-text text-danger">{errors.email.message}</p>
//           )}
//         </div>
//         <div className="col-lg-12">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="form-control"
//             {...register("password", {
//               required: "Password cannot be empty",
//               pattern: {
//                 value:
//                   /^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
//                 message:
//                   "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
//               },
//             })}
//           />
//           <br />
//           {errors.password && (
//             <p className="form-text text-danger">{errors.password.message}</p>
//           )}
//         </div>
//         <div className="col-lg-12">
//           <button className="btn btn-primary px-5" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     <div className="container">
//       <p className="text-center mb-2">Parent state: {input.name}</p>
//       <Message message="Hello, world" />
//       <Country name="Tanzania" />
//     </div>
//     </div>
//   );
// };

// function Message({ message }) {
//   return <p className="text-center">Props from parent: {message}</p>;
// }
// const Country = ({ name }) => {
//   return <p className="text-center">Country name: {name}</p>;
// };
// export default App;
const Home = () => {
  const n = useRef(0);
  const names = ["Meshack", "Ramadhani", "Chanila", "Nassor"];
  const [input] = useState({ names: names });
  const [employee, setEmployee] = useState([
    { id: 1, name: "Meshack Bernard", title: "ICT Officer II" },
  ]);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handle = () => {
    n.current++;
    console.log(`Clicked ${n.current} times`);
  };

  const empList = employee.map((employee, index) => (
    <li
      className="list-group-item d-flex justify-content-between align-items-start"
      key={index}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{employee.name}</div>
        {employee.title}
      </div>
    </li>
  ));

  const onApprove = () => {
    setStatus("Approved");
  };

  const onReject = () => {
    setStatus("Rejected");
  };

  const onCreateEmployee = (emp) => {
    setEmployee([emp, ...employee]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  };
  return (
    <div className="m-0 p-0">
      <div className="row g-4 justify-content-start">
        <div className="col-lg-4">
          <TeamDetails status={status} />
          <div className="d-grid gap-1">
            <button className="btn btn-success" onClick={onApprove}>
              Approve
            </button>
            <button className="btn btn-danger" onClick={onReject}>
              Reject
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <h3>How About Them Apples</h3>
          {submitting && <div>Submtting Form...</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          <br />
          <div>
            <h2>Processing an Array</h2>
            <ol className="list-group list-group-numbered">
              {input.names.map((name, index) => (
                <li className="list-group-item" key={index}>
                  {name}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="col-lg-4">
          <h2>Register employee</h2>
          <EmployeeForm createEmployee={onCreateEmployee} />
        </div>
        <div className="col-lg-4">
          <h2>Employee list</h2>
          <ol className="list-group list-group-numbered">{empList}</ol>
        </div>

        <div className="col-lg-4">
          <h2>useRef Hook example</h2>
          <p>You have clicked {n.current} times</p>
          <button className="btn btn-sm btn-primary" onClick={() => handle()}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const EmployeeForm = ({ createEmployee }) => {
  const [input, setInput] = useState({ id: "", name: "", title: "" });

  const onInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createEmployee(input);
  };
  return (
    <form className="row g-2" onSubmit={onSubmit}>
      <div className="col-lg-12">
        <label className="form-label">Id</label>
        <input
          type="number"
          name="id"
          className="form-control"
          placeholder="Enter user ID"
          onChange={(event) => onInputChange(event)}
          value={input.id}
        />
      </div>
      <div className="col-lg-12">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter your name"
          onChange={onInputChange}
          value={input.name}
        />
      </div>
      <div className="col-lg-12">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter your title"
          onChange={onInputChange}
          value={input.title}
        />
      </div>
      <div className="col-lg-12">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

const TeamDetails = ({ status }) => {
  return (
    <div>
      <h2>Team Details</h2>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Meshack Bernard</div>
            Annual leave
          </div>
          <span className="badge bg-secondary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Emmanuel Chanila</div>
            Sick leave
          </div>
          <span className="badge bg-secondary rounded-pill">4</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Nassor Nassor</div>
            Emergency leave
          </div>
          <span className="badge bg-secondary rounded-pill">3</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Ramadhan Sadick</div>
            Annual leave
          </div>
          <span className="badge bg-secondary rounded-pill">10</span>
        </li>
      </ol>
      {status === "Approved" ? (
        <p className="text-success">{status}</p>
      ) : (
        <p className="text-danger">{status}</p>
      )}
    </div>
  );
};
