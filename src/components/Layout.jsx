import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";


export function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col min-w-0">
                <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

                <div className="p-3 md:p-5 bg-slate-200 flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}