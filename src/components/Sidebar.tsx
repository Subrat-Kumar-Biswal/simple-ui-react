
import React from 'react';
import { Calendar, BarChart2, MessageSquare, Phone, Settings, Grid, Clock, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, path, active = false, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(path);
    }
  };

  return (
    <li 
      onClick={handleClick}
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
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className={`bg-white h-screen border-r border-gray-200 transition-all duration-300 ${
        collapsed ? 'w-[72px]' : 'w-[220px]'
      } flex flex-col`}
    >
      <div className="p-5">
        <h1 
          className={`text-healthcare-500 font-bold text-xl flex items-center cursor-pointer ${collapsed ? 'justify-center' : ''}`}
          onClick={() => navigate('/')}
        >
          {collapsed ? 'HC.' : 'Healthcare.'}
        </h1>
      </div>

      {/* Divider with label */}
      <div className={`px-5 pt-4 pb-2 ${collapsed ? 'hidden' : ''}`}>
        <p className="text-xs text-gray-400 uppercase tracking-wider">General</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="px-2 space-y-1">
          <SidebarItem icon={Grid} label="Dashboard" path="/" active={isActive('/')} />
          <SidebarItem icon={FileText} label="History" path="/history" active={isActive('/history')} />
          <SidebarItem icon={Calendar} label="Calendar" path="/calendar" active={isActive('/calendar')} />
          <SidebarItem icon={Clock} label="Appointments" path="/appointments" active={isActive('/appointments')} />
          <SidebarItem icon={BarChart2} label="Statistics" path="/statistics" active={isActive('/statistics')} />
        </ul>

        {/* Tools Section */}
        <div className={`px-5 pt-6 pb-2 ${collapsed ? 'hidden' : ''}`}>
          <p className="text-xs text-gray-400 uppercase tracking-wider">Tools</p>
        </div>
        
        <ul className="px-2 space-y-1">
          <SidebarItem icon={MessageSquare} label="Chat" path="/chat" active={isActive('/chat')} />
          <SidebarItem icon={Phone} label="Support" path="/support" active={isActive('/support')} />
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <SidebarItem icon={Settings} label="Settings" path="/settings" active={isActive('/settings')} />
      </div>
    </div>
  );
};

export default Sidebar;
