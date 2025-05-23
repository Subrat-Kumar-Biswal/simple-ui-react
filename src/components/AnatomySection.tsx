
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Heart } from 'lucide-react';

const AnatomySection: React.FC = () => {
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(null);

  return (
    <Card className="p-6 relative overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Body Overview</h2>
      
      <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
        <div className="relative w-full max-w-[300px] lg:max-w-[350px]">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=1000" 
            alt="Full human body anatomy" 
            className="w-full h-auto rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://static.vecteezy.com/system/resources/previews/015/280/516/original/human-anatomy-body-model-png.png";
            }}
          />
          
          {/* Health indicators positioned on body */}
          <div className="absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <Button 
              variant="secondary" 
              size="sm"
              className="rounded-full bg-red-500 text-white px-3 py-1"
              onClick={() => setSelectedIndicator('heart')}
            >
              <Heart size={14} className="mr-1" /> 
              Heart
            </Button>
          </div>

          <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <Button 
              variant="secondary" 
              size="sm"
              className="rounded-full bg-blue-500 text-white px-3 py-1"
              onClick={() => setSelectedIndicator('lungs')}
            >
              Lungs
            </Button>
          </div>

          <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <Button 
              variant="secondary" 
              size="sm"
              className="rounded-full bg-white text-gray-800 px-3 py-1 border"
              onClick={() => setSelectedIndicator('teeth')}
            >
              Teeth
            </Button>
          </div>

          <div className="absolute top-[60%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
            <Button 
              variant="secondary" 
              size="sm"
              className="rounded-full bg-orange-500 text-white px-3 py-1"
              onClick={() => setSelectedIndicator('bone')}
            >
              Bone
            </Button>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 shadow-sm">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="h-6 w-6 text-xs">-</Button>
              <div className="h-1 w-12 bg-gray-200 rounded-full relative mx-2">
                <div className="h-full w-1/2 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-xs">+</Button>
            </div>
          </div>

          {/* Magnifier icon */}
          <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
            <Search size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AnatomySection;
