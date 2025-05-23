
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Search, Heart } from 'lucide-react';

interface HealthIndicator {
  id: string;
  title: string;
  date: string;
  status: number; // 0-100
  color: string;
}

const BodyVisualization: React.FC = () => {
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(null);
  
  const healthIndicators: HealthIndicator[] = [
    {
      id: 'heart',
      title: 'Healthy Heart',
      date: '26 Oct 2023',
      status: 85,
      color: 'bg-red-400'
    },
    {
      id: 'lungs',
      title: 'Lungs',
      date: '26 Oct 2023',
      status: 70,
      color: 'bg-blue-400'
    },
    {
      id: 'teeth',
      title: 'Teeth',
      date: '26 Oct 2023',
      status: 90,
      color: 'bg-healthcare-400'
    },
    {
      id: 'bone',
      title: 'Bone',
      date: '26 Oct 2023',
      status: 65,
      color: 'bg-orange-400'
    },
  ];

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Large internal body image */}
        <div className="relative flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          <div className="relative w-full max-w-[350px] lg:max-w-[450px]">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlY3g6mjhGb78IMtF7R5-i8xPgxFqTG_pjebYr0l_gp73h0O5?auto=format&fit=crop&w=800&h=1000" 
              alt="Human internal body anatomy" 
              className="w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://static.vecteezy.com/system/resources/previews/015/280/516/original/human-anatomy-body-model-png.png";
              }}
            />
            
            {/* Active health indicator */}
            {selectedIndicator === 'heart' && (
              <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <Button 
                  variant="secondary" 
                  className="rounded-full bg-appointment-blue text-white px-4"
                >
                  <Heart size={16} className="mr-2" /> 
                  Healthy Heart
                </Button>
              </div>
            )}
            
            {/* Zoom controls */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 shadow-sm">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="h-8 w-8">-</Button>
                <div className="h-1 w-16 bg-gray-200 rounded-full relative">
                  <div className="h-full w-1/2 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">+</Button>
              </div>
            </div>

            {/* Magnifier icon */}
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
              <Search size={20} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Health indicators */}
        <div className="flex-1 space-y-6">
          {healthIndicators.map(indicator => (
            <div 
              key={indicator.id} 
              className="space-y-2 cursor-pointer" 
              onClick={() => setSelectedIndicator(indicator.id)}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <img 
                    src={`/icons/${indicator.id}.svg`} 
                    alt={indicator.title}
                    className="w-6 h-6 opacity-80"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/24x24?text=🩺";
                    }}
                  />
                  <h3 className="font-medium text-gray-800">{indicator.title}</h3>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
                  {/* Hide date on small and medium screens, show only on large screens */}
                  <span className="hidden lg:block text-sm text-gray-500">Date: {indicator.date}</span>
                  <span className="text-sm font-semibold text-healthcare-600">{indicator.status}%</span>
                </div>
              </div>
              
              <Progress value={indicator.status} className="h-2" />
            </div>
          ))}

          <div className="flex justify-end mt-4">
            <Button variant="ghost" className="text-blue-500">
              Details →
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BodyVisualization;
