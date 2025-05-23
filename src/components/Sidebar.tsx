
import React from 'react';
import { Calendar, BarChart2, MessageSquare, Phone, Settings, Grid, Clock, FileText } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active = false, onClick }) => {
  return (
    <li 
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md transition-colors duration-200 ${
        active 
          ? 'text-healthcare-500 font-medium bg-healthcare-100' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} className={active ? 'text-healthcare-500' : 'text-gray-500'} />
      <span>{label}</span>
    </li>
  );
};

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggleCollapse }) => {
  return (
    <div 
      className={`bg-white h-screen border-r border-gray-200 transition-all duration-300 ${
        collapsed ? 'w-[72px]' : 'w-[220px]'
      } flex flex-col`}
    >
      <div className="p-5">
        <h1 className={`text-healthcare-500 font-bold text-xl flex items-center ${collapsed ? 'justify-center' : ''}`}>
          {collapsed ? 'HC.' : 'Healthcare.'}
        </h1>
      </div>

      {/* Divider with label */}
      <div className={`px-5 pt-4 pb-2 ${collapsed ? 'hidden' : ''}`}>
        <p className="text-xs text-gray-400 uppercase tracking-wider">General</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="px-2 space-y-1">
          <SidebarItem icon={Grid} label="Dashboard" active />
          <SidebarItem icon={FileText} label="History" />
          <SidebarItem icon={Calendar} label="Calendar" />
          <SidebarItem icon={Clock} label="Appointments" />
          <SidebarItem icon={BarChart2} label="Statistics" />
        </ul>

        {/* Tools Section */}
        <div className={`px-5 pt-6 pb-2 ${collapsed ? 'hidden' : ''}`}>
          <p className="text-xs text-gray-400 uppercase tracking-wider">Tools</p>
        </div>
        
        <ul className="px-2 space-y-1">
          <SidebarItem icon={MessageSquare} label="Chat" />
          <SidebarItem icon={Phone} label="Support" />
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <SidebarItem icon={Settings} label="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
