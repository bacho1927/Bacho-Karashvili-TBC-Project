function NavSidebar({ closeSidebar }) {
    return (
        <div className="absolute h-screen  inset-0 bg-gray-800 bg-opacity-75" onClick={closeSidebar}>

            <div className="bg-white p-4 h-full">
                <ul>
                    <li><a href="/">Sidebar Item 1</a></li>
                    <li><a href="/">Sidebar Item 2</a></li>
                    <li><a href="/">Sidebar Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavSidebar
