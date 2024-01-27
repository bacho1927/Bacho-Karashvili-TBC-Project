import { useEffect, useState } from 'react';
import tbclogo from '../assets/tbc-icon.png'




function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    
    const [showSidebar, setShowSidebar] = useState(false);
   
  
    useEffect(() => {
        const scrollPassed = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', scrollPassed);


        return () => {
            window.removeEventListener('scroll', scrollPassed);
        };
    }, []);

     // disables scrolling when the sidebar is open
    useEffect(() => {
       
        if (showSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSidebar]);

    return (
        <>
            <header className={`z-[3] w-full text-[#F4F4F4] p-4 font-semibold sticky top-0 bg-[#1A1E1F] ${scrolled ? ' opacity-90 ' : ''} transition duration-300`}>
                <div className="flex items-center justify-between max-w-[1000px]  m-auto   xsm:px-8 md:px-2">
                    <div className="flex items-center gap-2 xsm:py-4 md:py-0 hover:cursor-pointer">
                        <img src={tbclogo} className="xsm:w-16 md:w-12 " />
                        <p className='text-xl mt-2'>X</p>
                        <h1 className="mt-4 xsm:text-4xl  md:text-xl font-mrgvlovani"> აკადემია</h1>
                    </div>
                    <nav className='hidden lg:block'>
                        <ul className="flex gap-[45px] ">
                            <li><a href="/" className="hover:text-[#00A3E0] transition duration-200 ">მთავარი </a></li>
                            <li><a href="/" className="hover:text-[#00A3E0] transition duration-200">TBC IT </a></li>
                            <li><a href="/" className="text-[#00A3E0] ">TBC x USAID </a></li>
                            <li><a href="/" className="hover:text-[#00A3E0] transition duration-200">რისკები </a></li>
                        </ul>
                    </nav>
                   
                    <div className='absolute right-14   z-[5]   w-16   lg:hidden transition duration-300' onClick={()=>setShowSidebar(Sidebar => !Sidebar)} >
                            <div className={`absolute top-4 right-0 w-1/2 h-2 bg-white rounded-md transition duration-300  ${showSidebar ? 'line1 bg-[#585858]' : ''}`}></div>
                            <div className={`absolute w-full h-2 bg-white rounded-md  transition duration-300 ${showSidebar ? 'line2 bg-[#585858]' : ''}`}></div>
                            <div className={`absolute bottom-2  w-1/2 h-2 bg-white rounded-md transition duration-300 ${showSidebar ? 'line3 bg-[#585858]' : ''}`}></div>
                    </div>
                </div>  
                <div className={`transition-all duration-300 fixed  w-[400px]  inset-0 right-0 left-auto ${!showSidebar ? 'opacity-0 pointer-events-none' :'opacity-1 pointer-events-auto'}    lg:hidden z-[4] `} id='sidebar '>
            
            {/* this is sidebar component */}
            <div className="bg-[#1C1C1C]  h-full relative ">
                

                <ul className="text-white right-6 top-28 text-right mt-14 p-4 space-y-16 absolute text-3xl">
                    <li><a href="/">მთავარი</a></li>
                    <li><a href="/">TBC IT</a></li>
                    <li><a href="/" className="text-[#00A3E0]">TBC x USAID</a></li>
                    <li><a href="/">რისკები</a></li>
                </ul>
            </div>
        </div>
            </header>
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-black opacity-50 "
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}
            
        </>
    )
}

export default Navbar
