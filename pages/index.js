import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";


export default function Home() {
  return (
    <> 
      <Header/>
      <main className="h-full flex gap-10">
        <div className="w-2/12">
          <LeftSidebar/>
        </div>

        <div className="w-7/12">
          <ContentArea/>
        </div>

        <div className="w-3/12">
          <RightSidebar/>
        </div>
      </main>
    </>
  )
}
