import Logo from "@/public/logo.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function Header() {
  return (
    <header className="flex justify-between px-7 py-6 border-b-2 border-[#EDEDED]">
      <Image src={Logo} height={55} />

      <TextField
        id="outlined-basic"
        placeholder="Search now..."
        sx={{
          width: "750px",
          backgroundColor: "#F8F8F8",
          borderRadius: "500px",
        }}
        InputProps={{
          style: {
            borderRadius: "1000px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <div className="flex items-center gap-3">
        <HeadsetMicIcon
          sx={{
            fontSize: 42,
            color: "#040000",
            border: "1px solid #8F8F8F",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <NotificationsIcon
          sx={{
            fontSize: 42,
            color: "#040000",
            border: "1px solid #8F8F8F",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
        <span className="text-xl text-[#040000] font-bold ml-7">Vinc.ragga</span>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>VR</Avatar>
        <ExpandMoreIcon sx={{ fontSize: 28, color: "#8F8F8F",  }} />
      </div>
    </header>
  );
}
