import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Chip from '@mui/material/Chip';

export default function Messages() {

    const messages = [
        {
            senderFullName: "Ali Veli",
            avatar: "A",
            messages: "Lorem ipsum dolor sit.",
        },
        {
            senderFullName: "Ali Veli",
            avatar: "A",
            messages: "Lorem ipsum dolor sit.",
        },
        {
            senderFullName: "Ali Veli",
            avatar: "A",
            messages: "Lorem ipsum dolor sit.",
        },
        {
            senderFullName: "Ali Veli",
            avatar: "A",
            messages: "Lorem ipsum dolor sit.",
        },
    ]

    return (
        <>
            <div>
                <div className="flex justify-between">
                    <span className="font-bold text-xl">Messages</span>
                    <span className="text-red-600 font-bold"> see all</span>
                </div>
                {messages.map((messages) => {
                    return(                <div className="flex justify-between mt-10">
 
                    <div className="flex items-cnter gap-3">
                    <div>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{messages.avatar}</Avatar>
                    </div>
                    <div className="">
                        <span className="font-bold">{messages.senderFullName}</span>
                        <p>{messages.messages}</p>
                    </div>
                </div>
                <div className="">
                    <Chip label="1" color="error" />     
                    
                </div>
        </div>);
                })}
            </div>
        </>
    )
}