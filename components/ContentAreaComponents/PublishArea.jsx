import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

export default function PublishArea() {
    return(
        <div className="border-2 border-[#EDEDED] rounded-[.75rem]">
            <div className="p-2">
                <input
                    type="text"
                    placeholder="What are you publish?"
                    className="w-full p-4 border-none outline-none"
                />
            </div>

            <div className="flex md:flex-row flex-col md:gap-4 gap-2 justify-between p-4 items-center border-t-2 border-[#EDEDED]">
                <div className="flex items-center gap-2">
                    <button href="#" className="w-[3rem] h-[3rem] flex items-center justify-center">                    
                        <ControlPointOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.5rem"
                            }}
                        />
                    </button>

                    <button href="#" className="w-[3rem] h-[3rem] flex items-center justify-center">                    
                        <PhotoOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.5rem"
                            }}
                        />
                    </button>

                    <button href="#" className="w-[3rem] h-[3rem] flex items-center justify-center">                    
                        <VideocamOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.5rem"
                            }}
                        />
                    </button>

                    <button href="#" className="w-[3rem] h-[3rem] flex items-center justify-center">                    
                        <InsertLinkOutlinedIcon
                            style={{
                                color: "#8F8F8F",
                                fontSize: "1.5rem"
                            }}
                        />
                    </button>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="h-[3rem] border-2 border-[#8F8F8F] text-[#8F8F8F] px-4 py-2 rounded-full">
                        Draft
                    </button>
                    <button className="h-[3rem] bg-[#EF3562] text-white px-4 py-2 rounded-full">
                        Post Now
                    </button>
                </div>
            </div>
        </div>
    );
}