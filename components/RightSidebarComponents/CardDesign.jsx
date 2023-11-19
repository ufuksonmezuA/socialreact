export default function CardDesign({ cardTitle, cardComponent }) {
  return (
    <>
      <div className="border-2 rounded-lg p-5">
        <div className="flex items-center justify-between pb-5 border-b-2">
          <h2 className="font-bold text-xl">{cardTitle}</h2>
          <span className="text-rose-500 font-bold text-md">See All</span>
        </div>
        <div className="pt-5 flex flex-col gap-3">{cardComponent}</div>
      </div>
    </>
  );
}
