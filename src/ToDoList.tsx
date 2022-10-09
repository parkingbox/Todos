import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//       const {currentTarget : { value },
//     } = event;
//     setToDoError("")
//     setToDo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLInputElement>) => {
//       event.preventDefault();
//       if(toDo.length < 10) {
//         return setToDoError("To do should be longer");
//       }
//       console.log("submit");
//     }
//   return 
//   <div>
//     <form>
//       <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//       <button>Add</button>
//       {toDoError !== "" ? toDoError : null}
//     </form>
//   </div>
// }

function ToDoList() {
  const { register, watch } = useForm();
  return ( 
    <div>
      <form>
        <input { ...register("Email")} placeholder="Email" />
        <input { ...register("firstName")} placeholder="firstName" />
        <input { ...register("lastName")} placeholder="Email" />
        <input { ...register("Username")} placeholder="Email" />
        <input { ...register("Password")} placeholder="Email" />
        <input { ...register("Password1")} placeholder="Email" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList;