export function TransactionsTable({ transactions, setTransactions, showDelete, currency }) {

    const handleDelete = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this transaction?"
        );
        if (confirmed) {
            const updatedTransactions = transactions.filter((tx) => tx.id !== id);
            setTransactions(updatedTransactions);
        }
    };

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
                        {showDelete && (
                            <th className="p-4 text-left">Actions</th>)}
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
                                {currency === "GHS" && "₵"}
                                {currency === "USD" && "$"}
                                {currency === "EUR" && "€"}
                                {tx.amount}
                            </td>
                            <td className="p-4 text-gray-500">{tx.date}</td>
                            {showDelete && (
                                <td key={tx.id}>
                                    <button
                                        onClick={() => handleDelete(tx.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>)
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}