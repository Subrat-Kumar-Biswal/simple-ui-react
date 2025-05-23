
import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 bg-gray-50 border-gray-100"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-healthcare-500 text-white">
            <span className="text-sm font-medium">👨‍⚕️</span>
          </div>
          <Button 
            size="icon" 
            className="rounded-lg bg-secondary text-white hover:bg-secondary/90"
          >
            <span className="text-xl">+</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
