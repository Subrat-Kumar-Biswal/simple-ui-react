
import React from 'react';
import { Card } from "@/components/ui/card";

const ActivityFeed: React.FC = () => {
  const activityData = [
    { day: 'Mon', physical: 80, medical: 60 },
    { day: 'Tue', physical: 65, medical: 85 },
    { day: 'Wed', physical: 90, medical: 45 },
    { day: 'Thu', physical: 75, medical: 70 },
    { day: 'Fri', physical: 55, medical: 95 },
    { day: 'Sat', physical: 85, medical: 55 },
    { day: 'Sun', physical: 70, medical: 80 }
  ];

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Activity</h2>
        <p className="text-sm text-gray-600">3 appointments on this week</p>
      </div>
      
      <div className="h-[180px] flex items-end justify-between gap-2">
        {activityData.map((data, index) => (
          <div key={data.day} className="flex flex-col items-center gap-2 flex-1">
            <div className="flex flex-col gap-1 h-32 justify-end">
              <div 
                className="bg-healthcare-400 rounded-t-sm w-4"
                style={{ height: `${(data.physical / 100) * 80}px` }}
              />
              <div 
                className="bg-appointment-purple rounded-t-sm w-4"
                style={{ height: `${(data.medical / 100) * 80}px` }}
              />
            </div>
            <span className="text-xs text-gray-600">{data.day}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-healthcare-400 rounded"></div>
          <span>Physical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-appointment-purple rounded"></div>
          <span>Medical</span>
        </div>
      </div>
    </Card>
  );
};

export default ActivityFeed;
