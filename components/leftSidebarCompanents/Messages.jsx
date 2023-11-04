import Avatar from "@mui/material/Avatar";
import Chip from '@mui/material/Chip';

export default function Messages() {

    const messages = [
        {
            senderFullName: "Michaela Rinch",
            avatar: "https://mui.com/static/images/avatar/6.jpg",
            messages: "Please help me...",
            count: 1
        },
        {
            senderFullName: "Alexandra A",
            avatar: "https://mui.com/static/images/avatar/2.jpg",
            messages: "How are you...",
            count: 3
        },
        {
            senderFullName: "King_steve",
            avatar: "https://mui.com/static/images/avatar/3.jpg",
            messages: "Thanks brade",
        },
        {
            senderFullName: "Margareth_L",
            avatar: "https://mui.com/static/images/avatar/4.jpg",
            messages: "Okey, thank you",
        },
        {
            senderFullName: "Alex Gonzaga",
            avatar: "https://mui.com/static/images/avatar/5.jpg",
            messages: "Okeyy, all right",
        },
        {
            senderFullName: "Melisa Silv",
            avatar: "https://mui.com/static/images/avatar/6.jpg",
            messages: "Woww, okey",
        },
    ]

    return (
    <div className="flex flex-col justify-center gap-2">
        {messages.map((messages) => {
            return(
                <div className="h-[3rem] flex items-center justify-between  ">
                    <div className="flex items-center gap-4">
                        <div>
                            <Avatar alt={messages.senderFullName} src={messages.avatar} />
                        </div>
                        <div>
                            <span className="font-bold text-sm text-[#040000]">{messages.senderFullName}</span>
                            <p className="text-sm text-[#8f8f8f]">{messages.messages}</p>
                        </div>
                    </div>

                    <div>
                        {messages.count && <Chip label={messages.count} className="w-[2rem] h-[2rem] bg-[#EF3562] rounded-full text-white text-sm" />}
                    </div>
                </div>
            );
        })}
    </div>
    );
}