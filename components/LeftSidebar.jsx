import Messages from "./LeftSidebarCompanents/Messages";
import NavMenu from "./LeftSidebarCompanents/NavMenu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LeftSidebar () {
    return(
        <div className="h-fullflex flex-col px-4 py-6 gap-4">
            <NavMenu/>
            <Messages/>
            <div className="flex flex-col gap-3 py-3 border-t-2 border-[#EDEDED]">
                <div className="flex items-center gap-5">
                    <SettingsIcon
                        style={{
                            color: "#8F8F8F",
                            fontSize: "1.8rem",
                        }}
                    /> {""}
                    <span className="text-[#8F8F8F] text-lg">Settings</span>
                </div>

                <div className="flex items-center gap-5">
                    <LogoutIcon style={{
                            color: "#EF3562",
                            fontSize: "1.8rem",                            
                        }}
                    /> {""}
                    <span className="text-[#EF3562]">Logout</span>
                </div>
            </div>
        </div>    
    );
}