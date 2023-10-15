export default function TrendingPostCard(){
    const trendingPostData = [
        {
            message: "Travel, because money returns. Time doesn't",
            image: "",
            username: "Alexander_john",
            commentCount: "32K"
        },
        {
            message: "Making for the best memories is along the way",
            image: "",
            username: "Evange Girl",
            commentCount: "28K"
        },
        {
            message: "Don't listen to what they say, go and see it for yourself",
            image: "",
            username: "Veronica Stella",
            commentCount: "22K"
        },
        {
            message: "Don't spend your ...",
            image: "",
            username: "Alexander_john",
            commentCount: "32K"
        },
    ];

    return(
        <div>
            {trendingPostData.map((post) =>{
                return(
                    <div>
                        {post.message}
                    </div>
                );
            })}
        </div>
    );
}