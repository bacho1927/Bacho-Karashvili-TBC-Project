import MainCoverImg from '../assets/main-cover.png'

function Main() {
    return (
        <main>
            <section className="relative  bg-cover  " style={{ backgroundImage: `url(${MainCoverImg})`, }}>
                <div className='max-w-[950px] m-auto py-24 '>
                    <h1 className='text-5xl font-bold text-[#F4F4F4] mt-4 '>TBC x USAID</h1>
                    <h2 className='text-4xl font-bold text-[#F4F4F4] my-6 font-archy'>ტექნოლოგიური განათლებისთვის</h2>
                </div>
            </section>
            <section className='  bg-[#2B2B2B] py-16'>
                <article className=' max-w-[1000px] m-auto '>
                    <h3 className='text-[26px] text-[#F4F4F4] font-arial'>
                        „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.</h3>
                    <h4 className='text-[#00A3E0] text-xl font-bold pt-14 font-Arial,Helvetica,sans-serif '>გაიგე მეტი</h4>
                </article>
            </section>
        </main>
    )
}

export default Main
