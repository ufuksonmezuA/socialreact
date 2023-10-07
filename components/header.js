import Logo from "@/components/logo"
import SearchInput from "@/components/search_input"

import IconButton from '@mui/material/IconButton';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function Header(){
    return(
        <header className="w-full h-14 md:w-auto flex items-center justify-between">
            <Logo/>
            <SearchInput />
            <div className="w-96 h-14 flex items-center gap-3">
                <IconButton aria-label="Headtset" size="large">
                    <HeadsetMicOutlinedIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="Notifications" size="small">
                    <NotificationsNoneIcon fontSize="small" />
                </IconButton>                

                <IconButton className="flex gap-3" aria-label="avatar" size="small">
                    Cindy.Baker
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </Stack>y
                    <KeyboardArrowDownOutlinedIcon fontSize="small" />
                </IconButton>


            </div>
        </header>
    )
}