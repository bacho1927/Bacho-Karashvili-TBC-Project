import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"

function Question({ data }) {

    const [questionOpened, setQuestionOpened] = useState(false)

    const toggle = () => {
        setQuestionOpened(!questionOpened)
    }

    return (
        <>
            <div className=" cursor-pointer  border-b border-[rgb(53,49,49)] pt-6" onClick={toggle}>
                <div className="flex justify-between items-center ">
                    <h1 className="text-white  text-lg font-semibold">{data.question}</h1>
                    <FaAngleDown className={`${questionOpened ? 'rotate-180' : ''}`} />

                </div>

                <div className={`accordion ${questionOpened ? 'accordion-open py-8' : ''} py-4 text-[15px]`}>
                    <div>

                        {data.answer}
                    </div>
                </div>

            </div >

        </>
    )

}

export default Question
