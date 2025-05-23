
import React from 'react';
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const ActivityChart: React.FC = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  const data = days.map(day => ({
    name: day,
    physical: Math.floor(Math.random() * 100),
    medical: Math.floor(Math.random() * 100),
  }));

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Activity</h2>
      
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#888' }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
              }}
            />
            <Bar 
              dataKey="physical" 
              fill="#1ec4ae"
              radius={[4, 4, 0, 0]}
              barSize={8}
            />
            <Bar 
              dataKey="medical" 
              fill="#6248D0" 
              radius={[4, 4, 0, 0]} 
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ActivityChart;
