import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";

export default function RegisterPage() {
  //   const [name, setName] = useState("");
  //   const [surName, setSurName] = useState("");
  //   const [userName, setUserName] = useState("");

  const [termsCheck, setTermsCheck] = useState(false);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };



  const createAccountService = async () => {
    // servis işlemleri
  }


  const handleSubmit = async () => {
    if(termsCheck === false) {
      alert("you must accept ")
      return
    } else {
      await createAccountService();
      alert("İşlem Tamamlandı")
    }
  }; 




  return (
    <div className="bg-orange-200 h-screen flex items-center justify-center">
      <div className="bg-white w-1/2 rounded-3xl p-4">
        <h2 className="text-center text-2xl text-gray-500 font-semibold">
          Create a your account
        </h2>
        <p className="text-center text-gray-500 mt-5">
          Let's login your account and be socialized!
        </p>

        {/* {JSON.stringify(form)}    --> bu komut, objeleri düz string halinde gösterir */}

        <div className="flex gap-5 mt-5">
          <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => handleOnChange(event)}
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Enter your surname"
            variant="outlined"
            type="text"
            name="surname"
            value={form.surname}
            onChange={(event) => handleOnChange(event)}
            sx={{
              width: "100%",
            }}
          />
        </div>

        <div className="flex gap-5 mt-5">
          <TextField
            id="outlined-basic"
            label="Enter your username"
            variant="outlined"
            type="text"
            name="username"
            value={form.username}
            onChange={(event) => handleOnChange(event)}
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Enter your e-mail"
            variant="outlined"
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => handleOnChange(event)}
            sx={{
              width: "100%",
            }}
          />
        </div>

        <div className="flex flex-col gap-5 justify-center mt-5">
          <TextField
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            type="password"
            name="password"
            value={form.password}
            onChange={(event) => handleOnChange(event)}
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Re-type your password"
            variant="outlined"
            type="password"
            name="password2"
            value={form.password2}
            onChange={(event) => handleOnChange(event)}
            sx={{
              width: "100%",
            }}
          />
          <div className="flex items-center">
            <Checkbox
              checked={termsCheck}
              onChange={() => {
                setTermsCheck(!termsCheck);
              }}
            /> 

            <span>I accept the Privacy Policy and Terms of Use.</span>
          </div>
          <Button
            variant="contained"
            disabled={termsCheck === false}
            className="bg-gray-600 py-3 text-lg rounded-2xl"
            onClick={ () => handleSubmit()}
            sx={{
              "&:hover": {
                backgroundColor: "#2A3442",
              },
            }}
          >
            Create new a account
          </Button>
        </div>
      </div>
    </div>
  );
}
