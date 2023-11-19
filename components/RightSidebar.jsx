<<<<<<< HEAD
import CardDesign from "./RightSidebarComponents/CardDesign";
import PopularProfileCard from "./RightSidebarComponents/popularProfileCard";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-10">
      <CardDesign
        cardTitle="Popular Profiles"
        cardComponent={<PopularProfileCard />}
      />

      <CardDesign cardTitle="Trending Post" cardComponent="deneme" />
    </div>
  );
}
=======
import CardDesign from "./RightSidebarComponents/CardDesign";
import PopularProfileCard from "./RightSidebarComponents/popularProfileCard";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-10">
      <CardDesign
        cardTitle="Popular Profiles"
        cardComponent={<PopularProfileCard />}
      />

      <CardDesign cardTitle="Trending Post" cardComponent="deneme" />
    </div>
  );
}
>>>>>>> 4f17b334f63bbf6a2e63240889b4189164e04d8c
