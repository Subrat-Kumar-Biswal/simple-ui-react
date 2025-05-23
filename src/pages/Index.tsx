
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import BodyVisualization from '@/components/BodyVisualization';
import AppointmentsCalendar from '@/components/AppointmentsCalendar';
import UpcomingSchedule from '@/components/UpcomingSchedule';
import ActivityChart from '@/components/ActivityChart';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Index: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden ${
          mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      ></div>
      
      <div 
        className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 transform lg:hidden ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center h-16 px-4 md:px-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="mr-4 lg:hidden"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <Menu size={24} />
            </Button>
            <div className="w-full">
              <SearchBar />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">This Week</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <BodyVisualization />
              <AppointmentsCalendar />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <UpcomingSchedule />
              </div>
              <div>
                <ActivityChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
