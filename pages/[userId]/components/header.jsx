import MessageIcon from '@mui/icons-material/Message';
export default function Header() {
    return (
        <>
            <div className="">
                <div className="relative">
                    <img
                        src="https://picsum.photos/1200/280"
                        className="rounded-b-xl w-full"
                    />
                    <div
                        className="absolute"
                        style={{
                            top: "50%",
                            left: "10%",
                        }}
                    >
                        <img src="https://picsum.photos/180/180" className="rounded-full" />
                    </div>
                    <div className="flex justify-around items-center w-full p-10">
                        <div>
                            <h2 className="text-3xl text-purple-700 font-bold">
                                Charles Doe
                            </h2>
                            <h4 className="text-purple-700">UI/UX Designer</h4>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button className="border-2 border-purple-700 bg-purple-700 text-white px-5 py-3 rounded-full cursor-not-allowed">
                                <MessageIcon />
                            </button>

                            <button className="border-2 border-purple-700 bg-purple-700 text-white px-5 py-3 rounded-xl">
                                Follow
                            </button>

                            <button className="border-2 border-purple-700 text-purple-700 px-5 py-3 rounded-xl cursor-not-allowed">
                                Schedule a meeting
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}