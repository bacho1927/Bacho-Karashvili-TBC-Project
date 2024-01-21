import { CoursesData } from "./CoursesData"
import { FaArrowRight } from "react-icons/fa6";

function Courses() {
    return (
        <div className="bg-[rgb(28,28,28)] font-arial">
            <div className="max-w-[1000px] m-auto pb-14 xsm:px-4 lg:px-0">
                <h1 className="text-[#F4F4F4] text-2xl pt-8 mb-16">სასწავლო კურსები</h1>
                <div className="grid grid-cols-3 gap-10">
                    {CoursesData.map(({ id, title, description, img }) => (
                        <div key={id} className="border border-gray-500 rounded-md ">
                            <img src={img} className="w-full" />
                            <div className="p-6  flex flex-col justify-between h-72 ">
                                <div className=" ">
                                    <h1 className="py-4 text-[#F4F4F4] text-xl ">{title}</h1>
                                    <p className="text-[#F4F4F4] text-sm mt-3">{description}</p>
                                </div>
                                <div className="flex items-center ">
                                    <FaArrowRight className="text-[#00A3E0] text-lg" />
                                    <a href='/' className="text-[#00A3E0]  ml-3 hover:text-[#008FCC] transition duration-200 ">კურსის დეტალები</a>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default Courses
