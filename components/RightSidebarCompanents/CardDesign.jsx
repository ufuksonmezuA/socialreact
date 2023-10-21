export default function CardDesign({ cardTitle, cardComponent }){
    return(
        <>
            <div className="border-2 border-[#EDEDED] rounded-lg p-5">
                <div className="flex items-center justify-between pb-5 border-b-2 border-[#EDEDED]">
                    <h2 className="font-bold text-xl text-[#040000]">{cardTitle}</h2>
                    <span className="text-[#EF3562] font-bold text-md">See All</span>
                </div>
                <div className="pt-5 flex flex-col gap-3">{cardComponent}</div>
            </div>
        </>
    )
}