import { Link } from 'react-router-dom';
import wallet from "../assets/wallet.png";
export function Sidebar() {
    return (
        <div className="w-1/4 md:w-48 bg-gray-800 text-gray-300 h-screen   ">
            <div className="text-xl font-bold mb-5 px-8 pt-4 flex items-center justify-evenly">
                <img src={wallet} alt="" className="w-1/3" />
                <h2>Menu</h2>
            </div>
            <ul>
                <li  >
                    <Link to="/" className="py-4 hover:bg-sky-700 cursor-pointer flex items-center px-8 pt-4 gap-1">
                        <ion-icon name="grid-outline"></ion-icon>
                        <span>Dashboard</span></Link>
                </li>
                <li >
                    <Link to="/transactions" className="py-4 hover:bg-sky-700 cursor-pointer flex items-center px-8 pt-4 gap-1">
                        <ion-icon name="file-tray-stacked-outline"></ion-icon>
                        <span>Transactions</span></Link>
                </li>
                <li>
                    <Link to="/report" className="py-4 hover:bg-sky-700  cursor-pointer flex items-center px-8 pt-4 gap-1">
                        <ion-icon name="document-outline"></ion-icon>
                        <span>Report</span></Link>
                </li>
                <li >
                    <Link to="/settings" className="py-4 hover:bg-sky-700  cursor-pointer flex items-center px-8 pt-4 gap-1">
                        <ion-icon name="settings-outline"></ion-icon>
                        Settings</Link>
                </li>
            </ul>
        </div>
    );
}