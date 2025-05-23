
import React from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface HealthIndicator {
  id: string;
  title: string;
  status: number;
  color: string;
  image: string;
}

const HealthStatusCards: React.FC = () => {
  const healthIndicators: HealthIndicator[] = [
    {
      id: 'heart',
      title: 'Healthy Heart',
      status: 85,
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=100&h=100'
    },
    {
      id: 'lungs',
      title: 'Lungs',
      status: 70,
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=100&h=100'
    },
    {
      id: 'teeth',
      title: 'Teeth',
      status: 90,
      color: 'bg-white',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=100&h=100'
    },
    {
      id: 'bone',
      title: 'Bone',
      status: 65,
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=100&h=100'
    },
  ];

  const getProgressColor = (id: string) => {
    switch (id) {
      case 'heart': return 'bg-red-500';
      case 'lungs': return 'bg-blue-500';
      case 'teeth': return 'bg-gray-800';
      case 'bone': return 'bg-orange-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Health Status</h2>
      
      <div className="space-y-4">
        {healthIndicators.map(indicator => (
          <div key={indicator.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={indicator.image}
                  alt={indicator.title}
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `/icons/${indicator.id}.svg`;
                  }}
                />
                <h3 className="font-medium text-gray-800">{indicator.title}</h3>
              </div>
              <span className="text-sm font-semibold text-healthcare-600">{indicator.status}%</span>
            </div>
            
            <div className="relative">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getProgressColor(indicator.id)} transition-all duration-500`}
                  style={{ width: `${indicator.status}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HealthStatusCards;
