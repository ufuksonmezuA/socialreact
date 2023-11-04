import PublishArea from "./ContentAreaComponents/PublishArea";
import PostCard from "./ContentAreaComponents/PostCard";

export default function ContentArea () {
    const contentData = [
        {
            userName: "canberkberen",
            userFullName: "Canberk Beren",
            createdOn: "1 Hour ago",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            avatar: "https://mui.com/static/images/avatar/1.jpg",
            likeCount: "1.8K",
            commentCount: "1.1K",
        },
        {
            userName: "john_stim",
            userFullName: "Johanes Stim",
            createdOn: "3 Hour ago",
            content: "Nullam rutrum purus odio, et ullamcorper lectus dapibus cursus.",
            avatar: "https://mui.com/static/images/avatar/2.jpg",
            likeCount: "700",
            commentCount: "325",
        },
        {
            userName: "ahmetyilmz1",
            userFullName: "Ahmet Yılmaz",
            createdOn: "1 Day ago",
            content: "Morbi a semper tellus. Sed nisi nisl, efficitur vel dapibus a, rhoncus eget nibh.",
            avatar: "https://mui.com/static/images/avatar/3.jpg",
            likeCount: "1.2K",
            commentCount: "1.1K",
        },
    ];

    return(
        <div>
            <PublishArea />
            {contentData.map((content) => {
                return(
                    <PostCard
                    userName={content.userName}
                    userFullName={content.userFullName}
                    createdOn={content.createdOn}
                    content={content.content}
                    avatar={content.avatar}
                    likeCount={content.likeCount}
                    commentCount={content.commentCount}
                    />
                )
            })}
        </div>    
    )
}