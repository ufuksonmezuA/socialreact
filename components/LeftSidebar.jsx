import Messages from "./leftSidebarCompanents/Messages";
import NavMenu from "./leftSidebarCompanents/NavMenu";
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