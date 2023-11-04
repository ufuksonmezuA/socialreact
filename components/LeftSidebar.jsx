import MenuCardDesign from "./LeftSidebarCompanents/MenuCardDesign";
import Messages from "./LeftSidebarCompanents/Messages";
import NavMenu from "./LeftSidebarCompanents/NavMenu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LeftSidebar () {
    return(
        <div className="flex flex-col gap-4">
            <NavMenu/>

            <MenuCardDesign
                cardTitle={"Messages"}
                cardComponent={ <Messages/> }
            />

            <div className="flex flex-col gap-3 py-3 border-t-2 border-[#EDEDED]">
                <div className="h-[3rem] flex items-center gap-6">
                    <SettingsIcon
                        style={{
                            color: "#8F8F8F",
                            fontSize: "1.8rem",
                        }}
                    />
                    <span className="text-[#8F8F8F] text-lg">Settings</span>
                </div>

                <div className="h-[3rem] flex items-center gap-6">
                    <LogoutIcon style={{
                            color: "#EF3562",
                            fontSize: "1.8rem",                            
                        }}
                    />
                    <span className="text-[#EF3562]">Logout</span>
                </div>
            </div>   
        </div>
    );
}