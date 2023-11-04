import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";
import { useEffect } from "react";


export default function Home() {
    // useEffect(() => {
    //   let storageData = localStorage.getItem("") !== null;
    //   if (!storageData) {
    //     window.location.href = "/register";
    //   }
    // }, []);


  return (
    <>
      <Header />
      <main className="w-full flex items-center justify-center">
        <div className="w-[96rem] flex justify-between gap-8 py-6">
          <div className="w-[16rem]">
            <LeftSidebar />
          </div>

          <div className="w-[52rem]">
            <ContentArea />
          </div>

          <div className="w-[24rem]">
            <RightSidebar />
          </div>
        </div>
      </main>
    </>
  );
}
