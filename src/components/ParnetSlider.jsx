import { useEffect, useState } from "react";
import { SliderData } from "./SliderData"
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";


function PartnerSlider() {

    const [currentSlide, setCurrentSlide] = useState(1)

    const MAX_PHOTOS_PER_SLIDE = 3;

    let touchstartX = 0;
    let touchendX = 0;
    
    //this logic is for swiping on touchscreen(mobile)

 useEffect(() => {
    const slide = document.getElementById('sliderContainer')
   

    const touchDirection = () => {
        if (touchendX > touchstartX && currentSlide > 1) {
          setCurrentSlide(prevSlide => prevSlide - 1);
        }
        if (touchendX > touchstartX && currentSlide === 1) {
            setCurrentSlide(3)
          }
        
        if (touchendX < touchstartX && currentSlide === 3) {
            setCurrentSlide(1);
          }
         
        if (touchendX < touchstartX && currentSlide < 3) {
          setCurrentSlide(prevSlide => prevSlide + 1);
        }
      };
     
      slide.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
     })

     slide.addEventListener('touchend', (e)=>{
        touchendX = e.changedTouches[0].screenX
        touchDirection();
     })
     
 },[currentSlide])
     
   

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

    // this changes slides automatically in every 5 seconds

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
        <div className=" bg-[#2B2B2B]  xsm:h-[880px] z-[1] md:h-[380px] relative ">

        <div className="max-w-[1000px]  m-auto  pt-8 " >
            <h1 className="xsm:text-3xl lg:text-2xl xsm:px-12 md:px-0 font-arial text-[#F4F4F4] ">პროექტის პარტნიორები</h1>
            <div className=" flex md:items-end overflow-hidden      items-center   justify-center xsm:h-[750px] md:h-[200px]" >


                    {SliderData.slice(currentSlide - 1, currentSlide).map(((el) => <div key={currentSlide} className=" flex xsm:flex-col md:flex-row xsm:animate-[sideReveal_1000ms] md:animate-[slide_2500ms] xsm:gap-20 lg:gap-32 items-center relative" id='sliderContainer'>
                        {el.map(image => <img src={image} key={image} className="xsm:w-[400px] md:w-[280px]"/>)}
                    </div>))}

                        <PiCaretLeftThin onClick={previousSlide} className="absolute top-48 xsm:left-0 lg:left-24 text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400 hidden md:block" id='sliderContainer'/>

                        <PiCaretRightThin onClick={nextSlide} className="absolute top-48 xsm:right-0 lg:right-24  text-5xl text-[#F4F4F4] hover:cursor-pointer hover:text-gray-400 hidden md:block "  id='sliderContainer'/>
        

                </div>

                <div className="flex justify-center mt-6">
                    {Array.from({ length: MAX_PHOTOS_PER_SLIDE }).map((_, slideIndex) => (

                        <span
                            key={slideIndex}
                            className={`xsm:w-4 xsm:h-4 md:w-2 md:h-2    mx-2  rounded-xl  cursor-pointer ${currentSlide == slideIndex+1 ? 'bg-gray-300' : 'bg-gray-500'}`}
                            onClick={() => setCurrentSlide(slideIndex + 1)}
                        ></span>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PartnerSlider
