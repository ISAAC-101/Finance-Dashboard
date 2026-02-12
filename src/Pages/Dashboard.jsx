import { StatCard } from "../components/StatCard";
import { PieChart } from "../components/PieChart";
import { LineChart } from "../components/LineChart";
import { Layout } from "../components/Layout";
import { TransactionsTable } from "../components/TransactionsTable";

export function Dashboard({ transactions,setTransactions }) {
    return (
        <Layout>
            <div>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard
                        title={"Total Income"}
                        amount={"$4200"}
                        icon={<ion-icon name="add-circle-outline"></ion-icon>}
                        bgColor="bg-green-500 hover:bg-green-600"
                    />
                    <StatCard
                        title={"Total Expenses"}
                        amount={"$3000"}
                        icon={<ion-icon name="remove-circle-outline"></ion-icon>}
                        bgColor="bg-red-500 hover:bg-red-600" />
                    <StatCard
                        title={"Savings"}
                        amount={"$7330"}
                        icon={<ion-icon name="bag-add-outline"></ion-icon>}
                        bgColor="bg-blue-500 hover:bg-blue-600" />

                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PieChart />
                    <LineChart />
                </section>
                <section className="mt-15 ">
                    <h1 className="text-lg font-semibold mb-2 flex justify-between items-center mb-6">Recent Transactions</h1>
                    <TransactionsTable transactions={transactions} setTransactions={setTransactions}/>

                </section>
            </div>
        </Layout>
    );
}


