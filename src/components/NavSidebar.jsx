
function NavSidebar({  showSidebar }) {

    
if(!showSidebar){
    return null
}

    return (

        <div className={` fixed  w-[400px]  inset-0 right-0 left-auto bg-opacity-75   ${!showSidebar ? 
        'animate-[closeSidebar_1000ms]' : ' animate-[sideReveal_1000ms]'} lg:hidden z-[2] `} id='sidebar'>

            <div className="bg-[#1C1C1C]  h-full relative ">
                

                <ul className="text-white right-6 top-28 text-right mt-14 p-4 space-y-16 absolute text-3xl">
                    <li><a href="/">მთავარი</a></li>
                    <li><a href="/">TBC IT</a></li>
                    <li><a href="/" className="text-[#00A3E0]">TBC x USAID</a></li>
                    <li><a href="/">რისკები</a></li>
                </ul>
            </div>
        </div>

    )
}

export default NavSidebar
