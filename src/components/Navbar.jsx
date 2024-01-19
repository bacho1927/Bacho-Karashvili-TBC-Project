import tbclogo from '../assets/tbc-icon.png'


function Navbar() {
    return (

        <header className="bg-[rgb(28,28,28)]  w-full text-[#F4F4F4]  p-4  font-semibold">
            <div className="flex items-center justify-between max-w-[950px] m-auto   ">
                <div className="flex items-center">
                    <img src={tbclogo} className="w-12" />
                    <h1 className="text-2xl">აკადემია</h1>
                </div>
                <nav>
                    <ul className="flex gap-[45px] ">
                        <li><a href="/" className="hover:text-[#00A3E0] transition duration-200 ">მთავარი </a></li>
                        <li><a href="/" className="hover:text-[#00A3E0] transition duration-200">TBC IT </a></li>
                        <li><a href="/" className="text-[#00A3E0] ">TBC x USAID </a></li>
                        <li><a href="/" className="hover:text-[#00A3E0] transition duration-200">რისკები </a></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Navbar
