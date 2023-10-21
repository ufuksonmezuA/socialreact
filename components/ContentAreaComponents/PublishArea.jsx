import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

export default function PublishArea() {
    return(
        <>
            <div className="border-2 border-[#EDEDED] rounded-lg">
                <div className="p-3">
                    <input
                        type="text"
                        placeholder="What are you publish?"
                        className="w-full py-3 px-2 border-none outline-none"
                    />
                </div>

                <div className="flex justify-between p-3 items-center border-t-2 border-[#EDEDED]">
                    <div className="flex gap-5">
                        <ControlPointOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.7rem",
                            }}
                        />
                        <PhotoOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.7rem",
                            }}
                        />
                        <VideocamOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.7rem",
                            }}
                        />
                        <InsertLinkOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.7rem",
                            }}
                        />
                    </div>
                    
                    <div>
                        <button className="border-2 border-[#8F8F8F] text-[#8F8F8F] px-4 py-1 rounded-full mr-3">
                            Draft
                        </button>
                        <button className="bg-[#EF3562] text-white px-4 py-1 rounded-full">
                            Post Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}