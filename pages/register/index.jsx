import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";

export default function RegisterPage() {
  //   const [name, setName] = useState("");
  //   const [surName, setSurName] = useState("");
  //   const [userName, setUserName] = useState("");

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <div className="bg-orange-200 h-screen flex items-center justify-center">
      <div className="bg-white w-1/2 rounded-3xl p-4">
        <h2 className="text-center text-2xl text-gray-500 font-semibold">
          Create a your account
        </h2>
        <p className="text-center text-gray-500 mt-5">
          Let's login your account and be socialized!
        </p>
        
        <div className="flex gap-5 mt-5">
          <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Enter your surname"
            variant="outlined"
            type="text"
            value={form.surname}
            onChange={(event) =>
              setForm({ ...form, surname: event.target.value })
            }
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
            value={form.username}
            onChange={(event) =>
              setForm({ ...form, username: event.target.value })
            }
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Enter your e-mail"
            variant="outlined"
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
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
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Re-type your password"
            variant="outlined"
            type="password"
            value={form.password2}
            onChange={(event) =>
              setForm({ ...form, password2: event.target.value })
            }
            sx={{
              width: "100%",
            }}
          />

          <Button
            variant="contained"
            className="bg-gray-600 py-3 text-lg rounded-2xl"
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
