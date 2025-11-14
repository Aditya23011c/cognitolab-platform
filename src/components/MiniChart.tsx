'use client';

import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface MiniChartProps {
  title: string;
  data: Array<{ name: string; value: number }>;
  type?: 'line' | 'bar';
  color?: string;
}

export function MiniChart({ title, data, type = 'line', color = '#3b82f6' }: MiniChartProps) {
  return (
    <Card className="p-6">
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={120}>
        {type === 'line' ? (
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
            <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </Card>
  );
}