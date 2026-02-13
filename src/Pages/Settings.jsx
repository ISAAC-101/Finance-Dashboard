import { Layout } from "../components/Layout";

export function Settings({ darkMode, setDarkMode, currency, setCurrency}) {
    return (
        <Layout>
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-bold">Settings</h1>

                {/* Dark Mode */}
                <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 dark:text-white p-4 rounded-lg">
                    <span>Dark Mode</span>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                </div>

                {/* Currency */}
                <div className="flex justify-between items-center bg-gray-100  p-4 rounded-lg">
                    <span>Currency</span>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="p-2 rounded-md "
                    >
                        <option value="GHS">₵ GHS</option>
                        <option value="USD">$ USD</option>
                        <option value="EUR">€ EUR</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => {
                            localStorage.removeItem("transactions");
                            window.location.reload();
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                        Reset All Transactions
                    </button>
                </div>
            </div>
        </Layout>
    );
}