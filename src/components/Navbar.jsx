import { useEffect, useState } from 'react';
import tbclogo from '../assets/tbc-icon.png'


function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollPassed = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', scrollPassed);


        return () => {
            window.removeEventListener('scroll', scrollPassed);
        };
    }, []);

    return (

        <header className={`navbar  w-full text-[#F4F4F4] p-4 font-semibold sticky top-0 bg-[rgb(28,28,28)] ${scrolled ? ' opacity-90 ' : ''} transition duration-300`}>
            <div className="flex items-center justify-between max-w-[1000px] pr-4 m-auto   ">
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
