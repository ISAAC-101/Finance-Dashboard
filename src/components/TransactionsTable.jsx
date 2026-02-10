export function TransactionsTable({ transactions }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100 text-sm">
                    <tr>
                        <th className="p-4 text-left">Title</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Type</th>
                        <th className="p-4 text-left">Amount</th>
                        <th className="p-4 text-left">Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((tx) => (
                        <tr key={tx.id} className="border-t">
                            <td className="p-4">{tx.title}</td>
                            <td className="p-4">{tx.category}</td>
                            <td className="p-4">
                                <span
                                    className={`px-2 py-1 rounded text-xs font-semibold ${tx.type === "income"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {tx.type}
                                </span>
                            </td>
                            <td
                                className={`p-4 font-semibold ${tx.type === "income"
                                    ? "text-green-600"
                                    : "text-red-600"
                                    }`}
                            >
                                ${tx.amount}
                            </td>
                            <td className="p-4 text-gray-500">{tx.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}