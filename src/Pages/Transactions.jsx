import { TransactionsTable } from "../components/TransactionsTable";
import { Layout } from "../components/Layout";
import { useState } from "react";


export function Transactions({ transactions, setTransactions , currency}) {



    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        amount: "",
        type: "expense",
        date: "",
    });
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            ...formData,
            amount: Number(formData.amount),
        };

        setTransactions([newTransaction, ...transactions]);
        setFormData({
            title: "",
            category: "",
            amount: "",
            type: "expense",
            date: "",
        });
        setShowForm(false);
    }

    return (
        <Layout>
            <div className="lg:p-6">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Transactions</h1>

                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Add Transaction
                    </button>
                </div>

                {/* ADD TRANSACTION FORM */}
                {showForm && (
                    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                        <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <input
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                required
                            />

                            <input
                                name="category"
                                placeholder="Category"
                                value={formData.category}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                required
                            />

                            <input
                                name="amount"
                                type="number"
                                placeholder="Amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                required
                            />

                            <input
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="border p-2 rounded"
                                required
                            />

                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            >
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>

                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    Save
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="bg-gray-300 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* TRANSACTIONS TABLE */}
                <TransactionsTable transactions={transactions} setTransactions={setTransactions} showDelete={true} currency={currency}/>
            </div>
        </Layout>
    );
}