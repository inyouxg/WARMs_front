import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import diary from "../mock/diary.json"

const RADIAN = Math.PI / 180;
const COLORS = ['#81abcfff', '#ffe89bff', '#cb6161ff', '#8b66bbff', '#c5c5c5ff'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function EmotionPieChart({ probabilities }) {
  const data = Object.entries(probabilities).map(([key, value]) => ({
    name: key,
    value: value
  }));

  return (
    <ResponsiveContainer key={diary.id} width={280} height={280}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
