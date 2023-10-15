import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Chip from '@mui/material/Chip';

export default function Messages() {

    const messages = [
        {
            senderFullName: "Michaela Rinch",
            avatar: "M",
            messages: "Please help me...",
            count: 1
        },
        {
            senderFullName: "Alexandra A",
            avatar: "A",
            messages: "How are you...",
            count: 1
        },
        {
            senderFullName: "King_steve",
            avatar: "K",
            messages: "Thanks brade",
        },
        {
            senderFullName: "Margareth_L",
            avatar: "M",
            messages: "Okey, thank you",
        },
        {
            senderFullName: "Alex Gonzaga",
            avatar: "A",
            messages: "Okeyy, all right",
        },
        {
            senderFullName: "Melisa Silv",
            avatar: "M",
            messages: "Woww, okey",
        },
    ]

    return (
    <div className="py-4">
        <div className="flex justify-between border-t-2">
            <span className="font-bold text-xl pt-5">Messages</span>
            <span className="text-red-600 font-bold pt-5"> see all</span>
        </div>
        {messages.map((messages) => {
            return(
                <div className="flex justify-between mt-3">
                    <div className="flex items-cnter gap-3">
                        <div>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>{messages.avatar}</Avatar>
                        </div>
                        <div>
                            <span className="font-bold">{messages.senderFullName}</span>
                            <p>{messages.messages}</p>
                        </div>
                    </div>

                    <div className="">
                        {messages.count && <Chip label={messages.count} color="error" />}
                    </div>
                </div>
            );
        })}
    </div>
    );
}