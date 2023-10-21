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
        <div>
            {trendingPostData.map((post) =>{
                return(
                    <div className="flex justify-between mt-2">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg text-[#040000] font-semibold w-60">
                                {post.message}
                            </div>
                            <div className="flex gap-2 text-xs text-[#8F8F8F]">
                                <span>{post.username}</span>
                                <span>•</span>
                                <span>{post.commentCount} Comment</span>
                            </div>
                        </div>
                        <div className="">
                                <CardMedia
                                    component="img"
                                    sx={{ 
                                        width: 100,
                                        height: 70,
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