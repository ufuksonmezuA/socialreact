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
                    <div className="flex flex-col mt-2">
                        <div className="flex justify-between">
                            <div className="text-lg text-black dark:text-white font-semibold w-60">
                                {post.message}
                            </div>
                            <div className="">
                                <CardMedia
                                    component="img"
                                    sx={{ 
                                        width: 100,
                                        height: 70,
                                     }}
                                    image={post.image}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 text-xs text-gray-400">
                            <span>{post.username}</span>
                            <span>•</span>
                            <span>{post.commentCount} Comment</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}