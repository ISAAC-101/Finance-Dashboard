import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";


export function Layout({ children }) {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <div className="p-5 bg-slate-50 flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}