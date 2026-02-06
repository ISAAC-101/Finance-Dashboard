export function Sidebar(){
    return(
        <div>
            <div className="flex items-center text-2xl font-bold mb-5">
                <ion-icon name="wallet-outline"></ion-icon>
                <h2>Menu</h2>
            </div>
        <ul>
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Report</li>
            <li>Settings</li>
        </ul>
        </div>
    );
}