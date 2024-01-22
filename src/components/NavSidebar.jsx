import { RxCross2 } from "react-icons/rx";


function NavSidebar({ closeSidebar, showSidebar }) {
    console.log(showSidebar)

    return (
        <div className={` fixed  w-[400px]  inset-0 right-0 left-auto bg-opacity-75  fade-in `}>

            <div className="bg-[#1C1C1C]  h-full relative ">
                <RxCross2 className="absolute  top-8 right-12 text-7xl text-[#535353]" onClick={closeSidebar} />

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
