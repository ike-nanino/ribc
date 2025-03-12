"use client"

import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StatisticsDashboard() {
  // Line Chart Data (Last 7 days)
  const lineData = {
    labels: ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7'],
    datasets: [
      {
        label: 'Expenses',
        data: [650, 590, 800, 810, 560, 550, 400],
        borderColor: 'rgb(239 68 68)',
        tension: 0.4,
      },
      {
        label: 'Income',
        data: [1200, 1100, 1300, 1400, 1150, 1050, 1200],
        borderColor: 'rgb(34 197 94)',
        tension: 0.4,
      },
    ],
  };

  // Pie Chart Data (Spending Overview)
  const pieData = {
    labels: ['Groceries', 'Withdrawal', 'Retail', 'Leisure'],
    datasets: [
      {
        data: [68, 20, 10, 2],
        backgroundColor: [
          'rgb(239 68 68)',
          'rgb(59 130 246)',
          'rgb(234 179 8)',
          'rgb(168 85 247)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="space-y-6 mt-2">
      {/* Statistics Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Statistics</h2>
          <span className="text-sm text-gray-500">Last 7 days</span>
        </div>
        <div className="h-64">
          <Line 
            data={lineData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true }
              },
              plugins: {
                legend: { position: 'top' }
              }
            }}
          />
        </div>
      </div>

      {/* Goals Section */}
      {/* <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Goals</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Summer Vacation</span>
            <span>62%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-red-500 rounded-full transition-all" 
              style={{ width: '62%' }}
            ></div>
          </div>
          <div className="text-sm text-gray-500">
            $1,485 out of $2,385
          </div>
        </div>
      </div> */}

      {/* Spending Overview */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Spending Overview</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="h-48">
            <Pie 
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'right' }
                }
              }}
            />
          </div>
          <div className="space-y-4">
            {pieData.labels.map((label, index) => (
              <div key={label} className="flex items-center space-x-2 text-sm">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ 
                    backgroundColor: pieData.datasets[0].backgroundColor[index] 
                  }}
                ></div>
                <span>{label}</span>
                <span className="font-medium">
                  {pieData.datasets[0].data[index]}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}