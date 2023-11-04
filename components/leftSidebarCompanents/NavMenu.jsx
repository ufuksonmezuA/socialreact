import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import ExploreIcon from '@mui/icons-material/Explore';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

export default function NavMenu() {

    const menuItems = [
        {
            title: "Home",
            icon: <HomeIcon/>,
        },
        {
            title: "Message",
            icon: <MessageIcon/>,
        },
        {
            title: "Explore",
            icon: <ExploreIcon/>,
        },
        {
            title: "Live",
            icon: <LiveTvIcon/>,
        },
        {
            title: "Saved",
            icon: <CollectionsBookmarkIcon/>,
        },
    ];

    return (
        <nav>
            <List>
                {menuItems.map((item) => {
                        return(
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon className="text-[#8F8F8F]">
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText className="text-[#8F8F8F]" primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
            </List>
        </nav>
    )
}