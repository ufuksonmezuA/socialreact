import CardDesign from "./RightSidebarCompanents/CardDesign"
import PopularProfileCard from "./RightSidebarCompanents/PopularProfileCard"
import TrendingPostCard from "./RightSidebarCompanents/TrendingPostCard"

export default function RightSidebar () {
    return(
        <div className="flex flex-col gap-8">
            <CardDesign
                cardTitle={"Popular Profiles"}
                cardComponent={ <PopularProfileCard/> }
            />
            <CardDesign 
                cardTitle="Trending Post"
                cardComponent= {<TrendingPostCard/>}
            />
        </div>  
    )
}