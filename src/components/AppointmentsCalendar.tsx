
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TimeSlot {
  time: string;
  booked: boolean;
  appointmentType?: string;
}

interface DaySchedule {
  date: number;
  day: string;
  timeSlots: TimeSlot[];
}

const AppointmentsCalendar: React.FC = () => {
  const currentMonth = "October 2023";
  
  const weekSchedule: DaySchedule[] = [
    {
      date: 25,
      day: "Mon",
      timeSlots: [
        { time: "10:00", booked: false },
        { time: "11:00", booked: true },
        { time: "12:00", booked: true }
      ]
    },
    {
      date: 26,
      day: "Tues",
      timeSlots: [
        { time: "08:00", booked: false },
        { time: "09:00", booked: true, appointmentType: "dentist" },
        { time: "10:00", booked: true }
      ]
    },
    {
      date: 27,
      day: "Wed",
      timeSlots: [
        { time: "12:00", booked: false },
        { time: "13:00", booked: true }
      ]
    },
    {
      date: 28,
      day: "Thurs",
      timeSlots: [
        { time: "10:00", booked: false },
        { time: "11:00", booked: true }
      ]
    },
    {
      date: 29,
      day: "Fri",
      timeSlots: [
        { time: "14:00", booked: false },
        { time: "16:00", booked: true }
      ]
    },
    {
      date: 30,
      day: "Sat",
      timeSlots: [
        { time: "12:00", booked: true },
        { time: "14:00", booked: true },
        { time: "15:00", booked: false }
      ]
    },
    {
      date: 31,
      day: "Sun",
      timeSlots: [
        { time: "09:00", booked: true },
        { time: "10:00", booked: false },
        { time: "11:00", booked: false }
      ]
    }
  ];

  const appointments = [
    {
      id: 1,
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
      color: "bg-appointment-blue",
      lightColor: "bg-appointment-light-blue"
    },
    {
      id: 2,
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
      icon: "💪",
      color: "bg-appointment-purple",
      lightColor: "bg-appointment-light-purple"
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{currentMonth}</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ArrowLeft size={16} />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekSchedule.map((day) => (
          <div key={day.day} className="text-center">
            <div className="mb-2">
              <div className="text-sm text-gray-500">{day.day}</div>
              <div className="text-lg font-medium">{day.date}</div>
            </div>
            
            <div className="space-y-2">
              {day.timeSlots.map((slot, idx) => (
                <div 
                  key={`${day.day}-${idx}`} 
                  className={`
                    py-1 px-2 text-xs rounded-md
                    ${slot.booked 
                      ? slot.appointmentType === "dentist" 
                        ? "bg-appointment-light-blue text-appointment-blue" 
                        : "bg-gray-100 text-gray-600"
                      : "border border-dashed border-gray-200 text-gray-400"
                    }
                  `}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="mt-6 space-y-3">
        {appointments.map(appointment => (
          <div 
            key={appointment.id}
            className={`appointment-card p-4 rounded-xl ${appointment.lightColor} cursor-pointer`}
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

export default AppointmentsCalendar;
