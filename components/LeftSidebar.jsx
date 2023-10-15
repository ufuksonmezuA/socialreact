import Messages from "./LeftSidebarCompanents/Messages";
import NavMenu from "./LeftSidebarCompanents/NavMenu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LeftSidebar () {
    return(
        <div className="h-fullflex flex-col px-4 py-6 gap-3">
            <NavMenu/>
            <Messages/>
            <div className="flex flex-col gap-3 py-3 border-t-2">
                <div className="flex items-center gap-5">
                    <SettingsIcon
                        style={{
                            color: "rgb(87 83 78)",
                            fontSize: "1.8rem",
                        }}
                    /> {""}
                    <span className="text-stone-600 text-lg">Settings</span>
                </div>

                <div className="flex items-center gap-5">
                    <LogoutIcon style={{
                            color: "rgb(192 65 12)",
                            fontSize: "1.8rem",                            
                        }}
                    /> {""}
                    <span className="text-orange-700">Logout</span>
                </div>
            </div>
        </div>    
    );
}