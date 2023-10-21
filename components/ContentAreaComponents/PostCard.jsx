import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function PostCard( {
    userName,
    userFullName,
    createdOn,
    content,
    avatar,
    likeCount,
    commentCount,
    
    }) {
    return(
        <>
            <div className="mt-10 flex flex-col gap-5 pb-10 border-b-2 border-[#EDEDED]">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar alt={userName} src={avatar} />
                        <div>
                            <span className="text-lg text-[#040000] font-semibold">{userFullName}</span>
                            <div className="flex gap-2 text-[#8F8F8F]">
                                <span>@{userName}</span>
                                <span>•</span>
                                <span>{createdOn}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-[#8F8F8F]">
                        <MoreVertIcon/>
                    </div>
                </div>

                <div>
                    <p className="text-[#040000]">{content}</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-10">
                        <div>
                            <FavoriteIcon className="fill-[#EF3562]"/>
                            <span className="ml-2 text-[#EF3562]">{likeCount}</span>
                        </div>
                        <div>
                            <TextsmsOutlinedIcon className="fill-[#8F8F8F]"/>
                            <span className="ml-2 text-[#8F8F8F]">{commentCount}</span>
                        </div>
                    </div>
                    <div>
                        <SendOutlinedIcon className="fill-[#8F8F8F]"/>
                        <span className="ml-2 text-[#8F8F8F]">Share</span>
                    </div>
                </div>
            </div>
        </>
    );
}