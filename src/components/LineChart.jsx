import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


export function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

        datasets: [
            {
                label: "Income",
                data: [1200, 1500, 1400, 18000, 1700, 2000],
                borderColor: "#22c55e", // green
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                tension: 0.4,
                pointRadius: 4,
            },
            {
                label: "Expense",
                data: [800, 900, 950, 1100, 1050, 1300],
                borderColor: "#ef4444", // red
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                tension: 0.4,
                pointRadius: 4,
            },
        ]
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                callbacks: {
                    label: (context) => `$${context.raw}`,
                },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) => `$${value}`,
                },
            },
        },
    };


    return (
        <div className="bg-white rounded-xl shadow-md p-4 h-100">
            <h2 className="text-lg font-semibold mb-2">
                Income vs Expenses
            </h2>
            <Line data={data} options={options} />
        </div>
    );
}