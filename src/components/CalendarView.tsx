
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CalendarView: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  
  const months = [
    "October 2023",
    "November 2023", 
    "December 2023",
    "January 2024",
    "February 2024"
  ];
  
  const weekSchedule = [
    { date: 25, day: "Mon", timeSlots: ["10:00", "11:00", "12:00"] },
    { date: 26, day: "Tue", timeSlots: ["08:00", "09:00", "10:00"] },
    { date: 27, day: "Wed", timeSlots: ["12:00", "13:00"] },
    { date: 28, day: "Thu", timeSlots: ["10:00", "11:00"] },
    { date: 29, day: "Fri", timeSlots: ["14:00", "16:00"] },
    { date: 30, day: "Sat", timeSlots: ["12:00", "14:00", "15:00"] },
    { date: 31, day: "Sun", timeSlots: ["09:00", "10:00", "11:00"] }
  ];

  const appointments = [
    {
      id: 1,
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
      color: "bg-appointment-light-blue"
    },
    {
      id: 2,
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
      icon: "💪",
      color: "bg-appointment-light-purple"
    }
  ];

  return (
    <Card className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">{months[currentMonthIndex]}</h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => setCurrentMonthIndex(prev => Math.max(0, prev - 1))}
          >
            <ArrowLeft size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => setCurrentMonthIndex(prev => Math.min(months.length - 1, prev + 1))}
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {weekSchedule.map((day) => (
          <div key={day.day} className="text-center">
            <div className="mb-2">
              <div className="text-sm text-gray-500">{day.day}</div>
              <div className="text-lg font-medium">{day.date}</div>
            </div>
            
            <div className="space-y-1">
              {day.timeSlots.map((slot, idx) => (
                <div 
                  key={`${day.day}-${idx}`} 
                  className="py-1 px-2 text-xs rounded-md bg-gray-100 text-gray-600"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {appointments.map(appointment => (
          <div 
            key={appointment.id}
            className={`p-4 rounded-xl ${appointment.color} cursor-pointer hover:shadow-md transition-all`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{appointment.icon}</span>
                <div>
                  <h3 className="font-medium">{appointment.title}</h3>
                  <p className="text-sm text-gray-600">{appointment.time}</p>
                  <p className="text-sm font-medium">{appointment.doctor}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CalendarView;
