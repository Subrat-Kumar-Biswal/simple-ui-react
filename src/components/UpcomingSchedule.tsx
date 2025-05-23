
import React from 'react';
import { Card } from "@/components/ui/card";

interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  icon: string;
  color: string;
}

interface ScheduleGroupProps {
  day: string;
  items: ScheduleItem[];
}

const ScheduleGroup: React.FC<ScheduleGroupProps> = ({ day, items }) => {
  return (
    <div className="mb-6">
      <h3 className="text-gray-500 mb-3">On {day}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map(item => (
          <div 
            key={item.id}
            className="bg-appointment-light-blue rounded-xl p-4 appointment-card"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.time}</p>
              </div>
              <span className="text-xl">{item.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UpcomingSchedule: React.FC = () => {
  const scheduleData = [
    {
      day: "Thursday",
      items: [
        { id: 1, title: "Health checkup complete", time: "11:00 AM", icon: "✏️", color: "blue" },
        { id: 2, title: "Ophthalmologist", time: "14:00 PM", icon: "👁️", color: "blue" },
      ]
    },
    {
      day: "Saturday",
      items: [
        { id: 3, title: "Cardiologist", time: "12:00 AM", icon: "❤️", color: "red" },
        { id: 4, title: "Neurologist", time: "16:00 PM", icon: "🧠", color: "purple" },
      ]
    }
  ];
  
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-5">The Upcoming Schedule</h2>
      
      {scheduleData.map((group, idx) => (
        <ScheduleGroup 
          key={idx}
          day={group.day}
          items={group.items}
        />
      ))}
    </Card>
  );
};

export default UpcomingSchedule;
