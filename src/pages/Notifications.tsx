
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, User, Calendar, AlertCircle } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'appointment' | 'alert' | 'reminder' | 'system';
  read: boolean;
}

const Notifications: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'New Appointment Request',
      message: 'Sarah Johnson has requested an appointment for tomorrow at 2:00 PM',
      time: '5 minutes ago',
      type: 'appointment',
      read: false
    },
    {
      id: '2',
      title: 'Lab Results Available',
      message: 'Patient John Doe\'s blood test results are ready for review',
      time: '1 hour ago',
      type: 'alert',
      read: false
    },
    {
      id: '3',
      title: 'Medication Reminder',
      message: 'Patient Mary Smith needs medication refill approval',
      time: '2 hours ago',
      type: 'reminder',
      read: true
    },
    {
      id: '4',
      title: 'System Maintenance',
      message: 'Scheduled maintenance tonight from 11 PM to 1 AM',
      time: '1 day ago',
      type: 'system',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment': return <Calendar className="w-5 h-5 text-blue-500" />;
      case 'alert': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'reminder': return <Clock className="w-5 h-5 text-orange-500" />;
      case 'system': return <Bell className="w-5 h-5 text-gray-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'appointment': return 'default';
      case 'alert': return 'destructive';
      case 'reminder': return 'secondary';
      case 'system': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`p-4 ${!notification.read ? 'border-l-4 border-l-healthcare-500 bg-healthcare-50/30' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(notification.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </h3>
                    <Badge variant={getBadgeVariant(notification.type)} className="text-xs">
                      {notification.type}
                    </Badge>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-healthcare-500 rounded-full"></div>
                    )}
                  </div>
                  
                  <p className={`text-sm ${!notification.read ? 'text-gray-700' : 'text-gray-500'} mb-2`}>
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} />
                      {notification.time}
                    </span>
                    
                    <div className="flex gap-2">
                      {!notification.read && (
                        <Button variant="ghost" size="sm" className="text-xs">
                          Mark as read
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-xs text-healthcare-600">
                        View details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {notifications.length === 0 && (
          <Card className="p-8 text-center">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">No notifications</h3>
            <p className="text-gray-400">You're all caught up!</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Notifications;
