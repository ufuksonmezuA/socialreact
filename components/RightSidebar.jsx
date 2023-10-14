import CardDesign from "./RightSİdebarCompanents/CardDesign"
import PopularProfileCard from "./RightSİdebarCompanents/PopularProfileCard"

export default function RightSidebar () {
    return(
        <>
            <div className="flex flex-col gap-10"> 
                <CardDesign
                    cardTitle={"Popular Profiles"}
                    cardComponent={ <PopularProfileCard/> }
                />

                <CardDesign 
                    cardTitle="Trending Post"
                    cardComponent="Deneme"
                />
            </div>
        </>    
    )
}