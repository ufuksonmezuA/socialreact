import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    let userToken = localStorage.getItem("user_token");

    if (userToken) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="bg-orange-200 h-screen flex items-center justify-center">
      <div className="bg-white w-1/3  rounded-3xl p-4">
        <h2 className="text-center text-2xl text-gray-500 font-semibold">
          Login your account
        </h2>
        <p className="text-center text-gray-500 mt-5">
          Let's login your account and be socialized!
        </p>

        <div className="flex flex-col gap-5 justify-center mt-10">
          <TextField
            id="outlined-basic"
            inputrol
            label="Enter your e-mail"
            variant="outlined"
            type="email"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            type="password"
            sx={{
              width: "100%",
            }}
          />
          <a href="#" className="text-end text-gray-500">
            Forgot your password?
          </a>

          <Button
            variant="contained"
            className="bg-gray-600 py-3 text-lg rounded-2xl"
            sx={{
              "&:hover": {
                backgroundColor: "#2A3442",
              },
            }}
          >
            Login Your account
          </Button>
        </div>
      </div>
    </div>
  );
}
