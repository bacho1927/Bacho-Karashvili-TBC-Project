function NavSidebar({ closeSidebar, showSidebar }) {


    return (
        <div className=" fixed  w-[400px]  inset-0 right-0 left-auto bg-opacity-75" >

            <div className="bg-[#1C1C1C]  h-full relative ">
                <h1 className="absolute right-4 p-8 text-gray-200 text-4xl" onClick={closeSidebar}>X</h1>
                <ul className="text-white right-8 top-16 text-right mt-14 p-4 space-y-6 absolute">
                    <li><a href="/">მთავარი</a></li>
                    <li><a href="/">TBC IT</a></li>
                    <li><a href="/">TBC x USAID</a></li>
                    <li><a href="/">რისკები</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavSidebar
