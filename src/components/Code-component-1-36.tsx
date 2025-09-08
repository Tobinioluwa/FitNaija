import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Home, Utensils, Trophy, User, Activity, Bell } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-green-600' },
    { id: 'meals', label: 'Naija Meals', icon: Utensils, color: 'text-orange-600' },
    { id: 'challenges', label: 'Challenges', icon: Trophy, color: 'text-yellow-600' },
    { id: 'profile', label: 'Profile', icon: User, color: 'text-blue-600' }
  ];

  return (
    <>
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              FitNaija
            </h1>
            <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
              🇳🇬 Nigeria's #1 Fitness App
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                3
              </Badge>
            </Button>
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-700 font-bold text-sm">YO</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50">
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col gap-1 h-auto py-2 px-3 ${
                  isActive 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-green-600' : item.color}`} />
                <span className="text-xs font-medium">
                  {item.label}
                </span>
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Spacer for bottom navigation */}
      <div className="h-20" />
    </>
  );
}