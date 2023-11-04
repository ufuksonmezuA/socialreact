import Image from "next/image";
import Logo from "@/public/logo.png";
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
    <header className="h-[6rem] flex items-center justify-center px-8 border-b-2 border-[#EDEDED]">
      <nav className="w-[96rem] flex items-center justify-between">
        <div className="w-[16rem]">
          <Image src={Logo} height={56} />
        </div>
 
        <div className="w-[48rem] bg-[#EDEDED] rounded-full">
          <TextField
            id="outlined-basic"
            placeholder="Search now..."
            InputProps={{
              style: {
                width: "768px",
                backgroundColor: "#F8F8F8",
                borderRadius: "9999px",
                outline: "none",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="w-[24rem] h-[3.5rem] flex items-center justify-end gap-4">
          <button className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full border-[.125rem] border-[#EDEDED] color-[#040000]">
            <HeadsetMicIcon />
          </button>

          <button className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full border-[.125rem] border-[#EDEDED] color-[#040000]">
            <NotificationsIcon />
          </button>

          <div className=" flex items-center jusitify-center gap-4">
            <span className="text-xl text-[#040000] font-bold">Vinc.rangga</span>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>VR</Avatar>
            <ExpandMoreIcon sx={{ fontSize: 28, color: "#8F8F8F",  }} />
          </div>
        </div>
      </nav>
    </header>
  );
}
