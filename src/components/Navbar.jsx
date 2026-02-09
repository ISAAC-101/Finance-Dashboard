import profile from "../assets/profile.svg"
export function Navbar() {
    return (
        <div className=" bg-gray-100 text-gray-700 p-4 flex md:justify-between justify-around items-center">
            <h1 className="md:text-2xl text-lg font-bold">Personal Finance Dashboard</h1>
            <div className="flex justify-evenly">
            <button className="bg-white hover:bg-gray-600 hover:text-white text-gray-700 rounded-full px-3">
                Hello,Isaac 
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden"><img src={profile} alt="" className="w-full h-full object-cover"/></div>
            
            </div>
        </div>
    );
}