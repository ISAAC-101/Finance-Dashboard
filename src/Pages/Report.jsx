import { Layout } from "../components/Layout";

export function Report({ transactions, currency }) {

    const downloadCSV = () => {
        if (!transactions.length) return;

        // CSV header
        const headers = ["Title", "Category", "Amount", "Type", "Date"];


        const rows = transactions.map((tx) => [
            tx.title,
            tx.category,
            `${currency}${tx.amount}`,
            tx.type,
            tx.date,
        ]);


        const csvContent =
            [headers, ...rows]
                .map((row) => row.join(","))
                .join("\n");

        // Create file
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "transactions_report.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    };


    return (
        <Layout>
            <div className="p-8">
                <button
                    onClick={downloadCSV}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Download Transactions
                </button>
            </div>
        </Layout>

    );
}