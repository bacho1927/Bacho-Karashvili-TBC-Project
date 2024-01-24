import { useEffect, useState } from "react";
import { SliderData } from "./SliderData"
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";


function PartnerSlider() {

    const [currentSlide, setCurrentSlide] = useState(1)

    const MAX_PHOTOS_PER_SLIDE = 3;

    const largeScreen = window.innerWidth >= 1024;

    //changes to previous slide

    function previousSlide() {
        if (currentSlide === 1) {
            setCurrentSlide(SliderData.length)
        } else {
            setCurrentSlide(oldSlide => oldSlide - 1)
        }
    }

    //changes to next slide

    function nextSlide() {

        if (currentSlide === SliderData.length) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(oldSlide => oldSlide + 1)
        }
    }

    // this changes slides automatically in every 4 seconds

    useEffect(() => {
        let intervalId;

        const sliderContainer = document.getElementById('sliderContainer');

        const handleMouseEnter = () => clearInterval(intervalId);
        const handleMouseLeave = () => (intervalId = startInterval());

        const startInterval = () =>
            setInterval(() => setCurrentSlide((prevIndex) =>
                (prevIndex + 1 <= SliderData.length ? prevIndex + 1 : 1)), 5000);

        intervalId = startInterval();

        // this ensures that if the mouse cursor is over the component the clearInterval function will be applied and slider will stop changing .

        sliderContainer.addEventListener('mouseenter', handleMouseEnter);
        sliderContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {

            clearInterval(intervalId);
            sliderContainer.removeEventListener('mouseenter', handleMouseEnter);
            sliderContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    });

    // this hook applies fade in style to the slide images

    useEffect(() => {
        const sliderContainer = document.getElementById('sliderContainer');


        sliderContainer.classList.add('reveal');

        return () => {
            if (sliderContainer) {
                sliderContainer.classList.remove('reveal');
            }
        };
    }, [currentSlide])

    return (
        <div className=" bg-[#2B2B2B] xsm:h-[680px]  md:h-[380px] relative ">

            <div className="max-w-[1000px]  m-auto  pt-8 ">
                <h1 className="xsm:text-3xl lg:text-2xl xsm:px-12 md:px-0 font-arial text-[#F4F4F4] ">პროექტის პარტნიორები</h1>
                <div className=" flex md:items-end overflow-hidden      items-center   justify-center xsm:h-[550px] md:h-[200px]" id="sliderContainer ">

                    {SliderData.slice(currentSlide - 1, currentSlide).map(((el) => <div key={currentSlide} className=" flex xsm:flex-col md:flex-row xsm:animate-[sideReveal_1000ms] md:animate-[slide_2500ms] xsm:gap-20 lg:gap-32 items-center" id='sliderContainer'>
                        {el.map(image => <img src={image} key={image} />)}
                    </div>))}



                    {largeScreen && <>
                        <PiCaretLeftThin onClick={previousSlide} className="absolute top-48 xsm:left-0 lg:left-24 text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400" id='sliderContainer' />

                        <PiCaretRightThin onClick={nextSlide} className="absolute top-48 xsm:right-0 lg:right-24  text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400" id='sliderContainer' />
                    </>
                    }

                </div>

                <div className="flex justify-center mt-6">
                    {Array.from({ length: MAX_PHOTOS_PER_SLIDE }).map((_, slideIndex) => (

                        <span
                            key={slideIndex}
                            className={`w-2 h-2    mx-2 bg-gray-400 rounded-xl  cursor-pointer `}
                            onClick={() => setCurrentSlide(slideIndex + 1)}
                        ></span>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PartnerSlider
