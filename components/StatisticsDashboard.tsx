'use client'

import { 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

export default function StatisticsDashboard() {
  // Line Chart Data (Last 7 days)
  const lineData = [
    { date: '1/1', Expenses: 650, Income: 1200 },
    { date: '1/2', Expenses: 590, Income: 1100 },
    { date: '1/3', Expenses: 800, Income: 1300 },
    { date: '1/4', Expenses: 810, Income: 1400 },
    { date: '1/5', Expenses: 560, Income: 1150 },
    { date: '1/6', Expenses: 550, Income: 1050 },
    { date: '1/7', Expenses: 400, Income: 1200 },
  ];

  // Pie Chart Data (Spending Overview)
  const pieData = [
    { name: 'Groceries', value: 68, color: 'rgb(239 68 68)' },
    { name: 'Withdrawal', value: 20, color: 'rgb(59 130 246)' },
    { name: 'Retail', value: 10, color: 'rgb(234 179 8)' },
    { name: 'Leisure', value: 2, color: 'rgb(168 85 247)' },
  ];

  return (
    <div className="space-y-6 mt-2">
      {/* Statistics Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Statistics</h2>
          <span className="text-sm text-gray-500">Last 7 days</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={lineData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                dataKey="Expenses"
                stroke="rgb(239 68 68)"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Income"
                stroke="rgb(34 197 94)"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Spending Overview */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Spending Overview</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          <div className="h-64 md:h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                  label={false}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                {/* <Legend /> */}
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color
                  }}
                ></div>
                <span>{item.name}</span>
                <span className="font-medium">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}