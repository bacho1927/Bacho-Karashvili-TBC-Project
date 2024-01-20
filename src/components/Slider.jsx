import { useState } from "react";
import { SliderData } from "./SliderData"
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";


function Slider() {

    const [nextSlide, setNextSlide] = useState(0)


    return (
        <div className=" bg-[#2B2B2B] relative pb-24">

            <div className="max-w-[1000px] m-auto  pt-8">
                <h1 className="text-2xl font-arial text-[#F4F4F4] ">პროექტის პარტნიორები</h1>
                <div className="flex overflow-hidden gap-32 items-center mt-24">
                    {SliderData.map((data, index) => (
                        <img src={data} key={index} />
                    ))}
                </div>

                <PiCaretLeftThin className="absolute top-48 left-24 text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400" />

                <PiCaretRightThin className="absolute top-48 right-24 text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400" />

            </div>
        </div>
    )
}

export default Slider
