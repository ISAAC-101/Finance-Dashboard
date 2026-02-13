import { Link } from 'react-router-dom';
import wallet from "../assets/wallet.png";
export function Sidebar({ isOpen, setIsOpen }) {
    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0  "
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static
                inset-y-0 left-0
                w-64 lg:w-48
                bg-gray-800 text-gray-300
                transform transition-transform duration-300 ease-in-out
                z-50
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="text-xl font-bold mb-5 px-8 pt-4 flex items-center justify-between lg:justify-evenly">
                    <div className="flex items-center gap-2">
                        <img src={wallet} alt="" className="w-8 lg:w-10" />
                        <h2>Menu</h2>
                    </div>
                    {/* Close button for mobile */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="py-4 hover:bg-sky-700 cursor-pointer flex items-center px-8 gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <ion-icon name="grid-outline"></ion-icon>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/transactions"
                            className="py-4 hover:bg-sky-700 cursor-pointer flex items-center px-8 gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <ion-icon name="file-tray-stacked-outline"></ion-icon>
                            <span>Transactions</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/report"
                            className="py-4 hover:bg-sky-700 cursor-pointer flex items-center px-8 gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <ion-icon name="document-outline"></ion-icon>
                            <span>Report</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            className="py-4 hover:bg-sky-700 cursor-pointer flex items-center px-8 gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <ion-icon name="settings-outline"></ion-icon>
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}