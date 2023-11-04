export default function MenuCardDesign({ cardTitle, cardComponent }){
    return(
        <div className="w-[16rem] flex flex-col items-center justify-center gap-2 border-t-2 border-[#EDEDED]">
            <div className="w-[16rem] h-[3rem] flex items-center justify-between px-2">
                <h2 className="font-bold text-lg text-[#040000]">{cardTitle}</h2>
                <span className="text-[#EF3562] font-bold text-base">See All</span>
            </div>
            <div className="w-[16rem] flex flex-col px-2">{cardComponent}</div>
        </div>
    )
}