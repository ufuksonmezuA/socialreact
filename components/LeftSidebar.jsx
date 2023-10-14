import Messages from "./LeftSidebarCompanents/Messages";
import NavMenu from "./LeftSidebarCompanents/NavMenu";
import Divider from '@mui/material/Divider';

export default function LeftSidebar () {
    return(
        <>
        <div className="flex flex-col gap-5">
            <NavMenu/>
            <Divider />
            <Messages/>
        </div>
        </>    
    )
}