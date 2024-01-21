import { useEffect, useState } from 'react';
import tbclogo from '../assets/tbc-icon.png'
import { FaGripLines } from "react-icons/fa";
// import SideBar from './SideBar';




function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);


    const largeScreen = window.innerWidth >= 1024;

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };


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
        <>
            <header className={`navbar  w-full text-[#F4F4F4] p-4 font-semibold sticky top-0 bg-[rgb(28,28,28)] ${scrolled ? ' opacity-90 ' : ''} transition duration-300`}>
                <div className="flex items-center justify-between max-w-[1000px] pr-4 m-auto   xsm:px-8">
                    <div className="flex items-center xsm:py-4 md:py-0">
                        <img src={tbclogo} className="xsm:w-16 " />
                        <p>X</p>
                        <h1 className="xsm:text-4xl  md:2xl"> აკადემია</h1>
                    </div>
                    {largeScreen ? <nav>
                        <ul className="flex gap-[45px] ">
                            <li><a href="/" className="hover:text-[#00A3E0] transition duration-200 ">მთავარი </a></li>
                            <li><a href="/" className="hover:text-[#00A3E0] transition duration-200">TBC IT </a></li>
                            <li><a href="/" className="text-[#00A3E0] ">TBC x USAID </a></li>
                            <li><a href="/" className="hover:text-[#00A3E0] transition duration-200">რისკები </a></li>
                        </ul>
                    </nav> : <FaGripLines className='xsm:text-5xl' onClick={toggleSidebar} />
                    }
                </div>
            </header>
            {/* {showSidebar  && !largeScreen && (
                <SideBar closeSidebar={closeSidebar} />
            )} */}
        </>
    )
}

export default Navbar
