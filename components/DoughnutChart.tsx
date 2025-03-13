'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function DoughnutChart({ accounts }) {
  // Sample data, replace with your actual accounts data
  const data = [
    { name: 'Bank 1', value: 100000, color: '#FF6384' },
    { name: 'Bank 2', value: 200000, color: '#36A2EB' },
  ];

  // Custom label to show inside doughnut
  const renderCustomizedLabel = ({ cx, cy }) => {
    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
    
    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
        <tspan x={cx} dy="-0.5em" className="text-gray-500 text-xs">Total</tspan>
        <tspan x={cx} dy="1.5em" className="font-semibold">${totalValue.toLocaleString()}</tspan>
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        paddingAngle={2}
        dataKey="value"
        label={false}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
    </PieChart>
  </ResponsiveContainer>
  );
}

export default DoughnutChart;