import profile from "../assets/profile.svg"
export function Navbar({toggleSidebar}) {
    return (
        <div className=" bg-gray-100 text-gray-700 p-4 flex md:justify-between justify-around items-center">

            <div className="flex items-center  gap-3">
                {/* Hamburger menu button */}
                <button 
                    className="md:hidden text-2xl text-gray-700"
                    onClick={toggleSidebar}
                >
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
                </div>
                <div>
                <h1 className="text-lg md:text-2xl font-bold">
                    <span className="hidden sm:inline">Personal Finance Dashboard</span>
                    <span className="sm:hidden">Finance</span>
                </h1>
            </div>


            <div className="flex items-center gap-2">
                <button className="bg-white hover:bg-gray-600 hover:text-white text-gray-700 rounded-full px-3 py-1 text-sm md:text-base">
                    <span className="hidden sm:inline">Hello, Isaac</span>
                    <span className="sm:hidden">Isaac</span>
                </button>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                    <img src={profile} alt="Profile" className="w-full h-full object-cover"/>
                </div>
            </div>
            
            </div>
        
    );
}