import { useEffect, useState } from "react";
import { SliderData } from "./SliderData"
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";


function PartnerSlider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0

        const newIndex = isFirstSlide ? SliderData.length - 1 : currentIndex - 3;
        setCurrentIndex(newIndex)

    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === SliderData.length - 1

        const newIndex = isLastSlide ? 0 : currentIndex + 3;
        setCurrentIndex(newIndex)

    }

    useEffect(() => {
        let intervalId;

        const sliderContainer = document.getElementById('sliderContainer');

        const handleMouseEnter = () => clearInterval(intervalId);
        const handleMouseLeave = () => (intervalId = startInterval());

        const startInterval = () =>
            setInterval(() => setCurrentIndex((prevIndex) => (prevIndex + 3 < SliderData.length ? prevIndex + 3 : 0)), 5000);

        intervalId = startInterval();

        sliderContainer.addEventListener('mouseenter', handleMouseEnter);
        sliderContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearInterval(intervalId);
            sliderContainer.removeEventListener('mouseenter', handleMouseEnter);
            sliderContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);


    return (
        <div className=" bg-[#2B2B2B] relative h-[380px]">

            <div className="max-w-[1000px]  m-auto  pt-8 ">
                <h1 className="xsm:text-3xl lg:text-2xl xsm:px-12 font-arial text-[#F4F4F4] ">პროექტის პარტნიორები</h1>
                <div className="xsm:flex-col flex overflow-hidden  xsm:gap-4 lg:gap-32 items-center py-28 justify-center" id="sliderContainer ">

                    {SliderData.slice(currentIndex, currentIndex + 3).map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className="xsm:w-36 xl:w-60" />
                    ))}
                    <PiCaretLeftThin onClick={prevSlide} className="absolute top-48 xsm:left-0 lg:left-24 text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400" id="sliderContainer" />

                    <PiCaretRightThin onClick={nextSlide} className="absolute top-48 xsm:right-0 lg:right-24  text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400" id="sliderContainer" />
                </div>



            </div>
        </div>
    )
}

export default PartnerSlider
