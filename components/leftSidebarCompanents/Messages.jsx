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
        <div className="flex justify-between border-t-2 border-[#EDEDED]">
            <span className="font-bold text-[#040000] text-xl pt-5">Messages</span>
            <span className="text-[#EF3562] font-bold pt-5">See All</span>
        </div>
        {messages.map((messages) => {
            return(
                <div className="flex justify-between mt-3">
                    <div className="flex items-cnter gap-3">
                        <div>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>{messages.avatar}</Avatar>
                        </div>
                        <div>
                            <span className="font-bold text-[#040000]">{messages.senderFullName}</span>
                            <p className="text-[#8f8f8f]">{messages.messages}</p>
                        </div>
                    </div>

                    <div className="">
                        {messages.count && <Chip label={messages.count} className="bg-[#EF3562] text-white" />}
                    </div>
                </div>
            );
        })}
    </div>
    );
}