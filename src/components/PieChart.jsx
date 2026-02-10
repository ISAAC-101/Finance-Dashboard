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
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        size: 0,
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

        <div className="w-full h-100  p-4 bg-white rounded-xl shadow-md ">
            <h2 className="text-lg font-semibold mb-2">Expense Breakdown</h2>
            <div className="flex items-center justify-center h-[300px]">
                <div className="w-[280px]  h-[280px]">
                    <Pie data={pieData} options={options} />
                </div>
            </div>
        </div>

    );
}