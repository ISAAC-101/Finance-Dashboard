import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart() {
    const pieData = {
        labels: ["Rent", "Food", "Transport", "Entertainment"],
        datasets: [
            {
                label: "Expenses",
                data: [500, 300, 100, 150], 
                backgroundColor: [
                    "rgba(75, 192, 192, 0.7)",   // Rent
                    "rgba(255, 99, 132, 0.7)",   // Food
                    "rgba(255, 206, 86, 0.7)",   // Transport
                    "rgba(153, 102, 255, 0.7)",  // Entertainment
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        cutout: "50%", 
        plugins: {
            legend: {
                position: "right", // <- move legend to the right
                labels: {
                    font: {
                        size: 13,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `$${tooltipItem.raw}`;
                    },
                },
            },
        },
    };




    return (
        <div className="w-full max-w-md mx-auto p-7 bg-white rounded-xl shadow-md pb-0">
            <h2 className="text-xl font-bold mb-4 text-gray-700 border-b-4 border-gray-300 pb-5">Expense Breakdown</h2>
            <Pie data={pieData} options={options} />
        </div>
    );
}