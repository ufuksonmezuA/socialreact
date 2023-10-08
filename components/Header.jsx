import Logo from "@/components/logo"
import SearchInput from "@/components/search_input"

import IconButton from '@mui/material/IconButton';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function Header(){
    return(
        <header className="w-full h-20 px-6 flex items-center justify-between shadow">
            <Logo/>
            <SearchInput />
            <div className="w-72 h-12 flex items-center gap-3">
                <IconButton className="border-2 border-solid border-gray-200" aria-label="Headtset" size="large">
                    <HeadsetMicOutlinedIcon fontSize="small" />
                </IconButton>

                <IconButton className="border-2 border-solid border-gray-200" aria-label="Notifications" size="small">
                    <NotificationsNoneIcon fontSize="small" />
                </IconButton>                

                <IconButton className="flex gap-3" aria-label="avatar" size="small">
                    <span className="text-xl font-bold">Cindy.Baker</span>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <KeyboardArrowDownOutlinedIcon fontSize="small" />
                </IconButton>
            </div>
        </header>
    )
}