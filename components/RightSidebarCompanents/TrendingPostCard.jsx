import CardMedia from '@mui/material/CardMedia';

export default function TrendingPostCard(){
    const trendingPostData = [
        {
            message: "Travel, because money returns. Time doesn't",
            image: "https://mui.com/static/images/cards/live-from-space.jpg",
            username: "Alexander_john",
            commentCount: "32K"
        },
        {
            message: "Making for the best memories is along the way",
            image: "https://mui.com/static/images/cards/live-from-space.jpg",
            username: "Evange Girl",
            commentCount: "28K"
        },
        {
            message: "Don't listen to what they say, go and see it for yourself",
            image: "https://mui.com/static/images/cards/live-from-space.jpg",
            username: "Veronica Stella",
            commentCount: "22K"
        },
        {
            message: "Don't spend your ...",
            image: "https://mui.com/static/images/cards/live-from-space.jpg",
            username: "Alexander_john",
            commentCount: "32K"
        },
    ];

    return(
        <div className="flex flex-col gap-2">
            {trendingPostData.map((post) =>{
                return(
                    <div className="w-[20rem] flex gap-2">

                        <div className="w-[15rem] flex flex-col gap-2">
                            <div className="text-xl text-[#040000] font-semibold">
                                {post.message}
                            </div>
                            <div className="flex gap-2 text-sm text-[#8F8F8F]">
                                <span>{post.username}</span>
                                <span>•</span>
                                <span>{post.commentCount} Comment</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                                <CardMedia
                                    component="img"
                                    sx={{ 
                                        height: 72,
                                        borderRadius: ".75rem",
                                    }}
                                    image={post.image}
                                />
                            </div>
                    </div>
                );
            })}
        </div>
    );
}