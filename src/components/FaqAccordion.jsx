import { FaqData } from "./faqData";
import Question from "./Question";
function Faq() {

    const questions = FaqData.map((data, index) => {
        return (
            <Question key={index} data={data} />
        )
    })

    return (
        <div className="bg-[rgb(25,25,25)]">
            <div className="max-w-[900px] m-auto py-20">
                <div className="flex items-center justify-between ">
                    <h1 className="text-[#F4F4F4] text-2xl ">ხშირად დასმული კითხვები</h1>
                    <h2 className="text-[#00A3E0] font-bold text-xl">ყველა კითხვა</h2>
                </div>

                <div className="pt-8 text-[#F4F4F4]">
                    <div className="   cursor-pointer  " >

                        {questions}

                    </div >


                </div>
            </div>
        </div>
    )
}

export default Faq
