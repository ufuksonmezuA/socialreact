import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";


export default function Home() {
  return (
    <> 
      <Header/>
      <main className="flex p-12 gap-20">
        <div className="w-1/4">
          <LeftSidebar/>
        </div>

        <div className="w-2/4">
          <ContentArea/>
        </div>

        <div className="w-1/4">
          <RightSidebar/>
        </div>
      </main>
    </>
  )
}
