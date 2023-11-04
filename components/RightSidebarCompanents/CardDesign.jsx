export default function CardDesign({ cardTitle, cardComponent }){
    return(
        <div className="w-[24rem] flex flex-col items-center justify-center py-4 px-[1.875rem] border-2 border-[#EDEDED] rounded-[.75rem]">
            <div className="w-[20rem] h-[3rem] flex items-center justify-between border-b-2 border-[#EDEDED]">
                <h2 className="font-bold text-lg text-[#040000]">{cardTitle}</h2>
                <span className="text-[#EF3562] font-bold text-base">See All</span>
            </div>
            <div className="w-[20rem] flex flex-col gap-2 py-4">{cardComponent}</div>
        </div>
    )
}