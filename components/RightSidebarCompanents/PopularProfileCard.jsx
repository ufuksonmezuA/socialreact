import Avatar from "@mui/material/Avatar";

export default function PopularProfileCard (){

    const userProfilesData = [
        {
            avatar: "https://mui.com/static/images/avatar/1.jpg",
            fullname: "Alexander_john",
            followerCount: "102.3K",
            ishefollow: "false"
        },
        {
            avatar: "https://mui.com/static/images/avatar/2.jpg",
            fullname: "Evange Girl",
            followerCount: "82.5K",
            ishefollow: "true"
        },
        {
            avatar: "https://mui.com/static/images/avatar/3.jpg",
            fullname: "Arthur_silva",
            followerCount: "72.8K",
            ishefollow: "false"
        },
        {
            avatar: "https://mui.com/static/images/avatar/5.jpg",
            fullname: "Veronica Stella",
            followerCount: "54.8K",
            ishefollow: "false"
        },
    ];
    return(
        <>
            {userProfilesData.map((user) => {
                return(
                    <div className="h-[3.5rem] flex items-center justify-between">
                        <div className="h-[3.5rem] flex items-center gap-4">
                            <Avatar className="w-[3rem] h-[3rem]" alt={user.fullname} src={user.avatar} />
                            <div className="h-[3.5rem] flex flex-col items-start justify-center">
                                <span className="text-lg text-[#040000] font-semibold">{user.fullname}</span>
                                <div className="flex text-sm text-[#8f8f8f]">
                                    <span>{user.followerCount} Followers</span>
                                </div>
                            </div>   
                        </div>

                        <div>
                            {user.ishefollow == "false" && 
                                <button className="bg-[#EF3562] text-white font-bold rounded-full px-3 py-1 capitalize">Follow</button>
                            }

                            {user.ishefollow == "true" && 
                                <button className="bg-white text-[#EF3562] border-[0.125rem] border-[#EF3562] font-bold rounded-full px-3 py-1 capitalize">Unfollow</button>
                            }
                        </div>
                    </div>
                );
            })}
        </>
    );
}
