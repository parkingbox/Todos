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

type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  CheckingPassword: string;
  extraError?: string;
};

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    if (data.password !== data.CheckingPassword) {
      setError(
        "CheckingPassword",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline."})
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noWoo: (value) =>
                value.includes("woo") ? "no woo allowed" : true,
              noSeung: (value) =>
                value.includes("Seung") ? "no woo allowed" : true,
            },
          })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("CheckingPassword", {
            required: "Passwored is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="CheckingPassword"
        />
        <span>{errors?.CheckingPassword?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
